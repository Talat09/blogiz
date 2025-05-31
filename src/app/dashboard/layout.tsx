import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import { SessionInterface } from "@/type";
import { DashboardSidebar } from "@/components/DashboardComponents/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/"); // Redirect unauthorized users
  }

  return (
    <>
      <div className="flex ">
        {/* Sidebar only loads on client */}
        <DashboardSidebar session={session as SessionInterface} />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
