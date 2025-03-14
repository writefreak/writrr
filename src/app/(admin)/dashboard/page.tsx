import DashboardBody from "@/components/admin/dashboardBody";
import prisma from "@/lib/prisma";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";

const Page = async () => {
  const { session, user } = await validateRequest();
  if (!session?.id) return redirect("/login");

  return <DashboardBody user={user} />;
};

export default Page;
