import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request){
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;

  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: { id: currentUserId },
    data,
  });
  
  return NextResponse.json(user)
}