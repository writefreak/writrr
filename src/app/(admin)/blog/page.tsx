import { Card } from "@/components/ui/card";
import EmptyState from "@/components/empty-state";
import { Plus } from "lucide-react";
import RecentBlogs from "./components/recent-blogs";
import { AlertTriggerButton } from "@/components/alert-wrapper";
import { PostAlert } from "./components/post";
import { getPostData, getPosts } from "@/lib/actions/blog-actions";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    tab?: string;
    orderBy?: string;
    take?: string;
    skip?: string;
    postId?: string;
    edit?: string;
  }>;
};
export default async function Page(props: Props) {
  const { session, user } = await validateRequest();
  if (!session?.id) return redirect("/login");
  const searchParams = await props.searchParams;
  const data = await getPosts({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
    skip: 0,
  });
  const postData = await getPostData(searchParams.postId);
  return (
    <div className="w-full h-full py-4 sm:py-8 space-y-6">
      <div>
        <h1 className="text-xl sm:text-3xl font-medium mb-1">
          News and Blog Stories
        </h1>
        <p className="text-gray-500">View all posted articles.</p>
      </div>
      {data.length > 0 ? (
        <div className="flex flex-col gap-8">
          <Card className="w-full divide-y">
            <div className="p-6 flex justify-between">
              <div className="flex-1">
                <h2 className="font-medium text-base sm:text-lg">
                  All Your Publications
                </h2>
                <p className="text-gray-500 text-xs">
                  Find all new and existing publications.
                </p>
              </div>

              <AlertTriggerButton
                variant="outline"
                alertKey="postId"
                alertValue="new"
              >
                <Plus className="h-5 w-5 mr-2" />
                New{" "}
                <span className="hidden ml-1 sm:inline-block">publication</span>
              </AlertTriggerButton>
            </div>
          </Card>
          <div>
            <div className="flex flex-col gap-4">
              <h4>Recent publications</h4>
              <RecentBlogs data={data} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          className=" border-0 shadow-none"
          title="No available data"
          description="Blogs will be shown when created!"
        >
          <AlertTriggerButton
            variant="outline"
            alertKey="postId"
            alertValue="new"
          >
            <Plus className="h-5 w-5 mr-2" />
            New publication
          </AlertTriggerButton>
        </EmptyState>
      )}
      <PostAlert
        open={!!searchParams?.postId}
        postId={searchParams?.postId}
        edit={searchParams?.edit}
        post={postData}
      />
    </div>
  );
}
