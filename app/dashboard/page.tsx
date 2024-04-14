import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  const currentUserId = session?.user?.id;
  const user = await prisma.user.findUnique({
    where: { id: currentUserId },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <ProfileForm user={user} />
    </>
  );
}
