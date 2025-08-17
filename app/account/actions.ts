"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function updateUsername(username: string) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any).id;
  if (!userId) throw new Error("Not signed in.");

  var success = false;
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { username },
    });
    success = true;
  } catch {
    success = false;
  }

  return success;
}