"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function createNote(title: string, noteJson: string, noteHtml: string) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;
  if (!userId) throw new Error("Not signed in.");

  const note = await prisma.note.create({
    data: { userId, title, noteJson, noteHtml }
  });

  return note;
}