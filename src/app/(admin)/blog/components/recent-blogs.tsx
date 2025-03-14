import HtmlText from "@/components/html-text";
import Image from "@/components/image";
import { Card } from "@/components/ui/card";
import { PostsType } from "@/lib/actions/blog-actions";
import { uniqueId } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";

interface RecentProps {
  data: PostsType;
}

function RecentBlogs({ data }: RecentProps) {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-2 ">
        {data.map((b) => (
          <Card
            key={uniqueId()}
            className=" bg-transparent min-h-96  md:h-[300px] w-full bg-white  gap-1 grid grid-rows-[60%,auto]"
          >
            <div className="w-full h-full ">
              {b.images[0] && (
                <Image
                  bucketName="images"
                  src={b.images[0]?.url}
                  className="rounded-md object-cover"
                  alt={b.title}
                  scale={true}
                  // zoomIn={true}

                  folderName="blogs"
                />
              )}
            </div>
            <div className="flex flex-col gap-1 px-3">
              <time className="text-xs text-gray-500 ">
                {format(new Date(b.created), "MMM d, yyyy,  hh:mm a")}
              </time>
              <Link href={`/blog/?postId=${b.id}`} className="space-y-2">
                <h2 className="text-base">{b.title}</h2>
                <HtmlText
                  text={b.description}
                  className="text-xs line-clamp-4 text-gray-500"
                />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecentBlogs;
