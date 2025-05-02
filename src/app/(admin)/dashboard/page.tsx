import DashboardBody from "@/components/admin/dashboardBody";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";

const Page = async () => {
  const { session, user } = await validateRequest();
  if (!session?.id) return redirect("/login");
  if (user?.role !== "admin") return redirect("/");
  //check if user is an admin or not, redirect to homepage if not admin
  return <DashboardBody user={user} />;
};

export default Page;
