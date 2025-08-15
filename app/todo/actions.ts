"use server";

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function toggleTodo(id: string, done: boolean) {
    const session = await getServerSession(authOptions);
    var userId = (session?.user as any).id;
    if (!userId) throw new Error("Not signed in.");

    const todo = await prisma.todo.findUnique({
        where: { id, userId  },
    });
    if (!todo) throw new Error("User does not own Todo item.");

    await prisma.todo.update({
        where: { id },
        data: { done }
    });
}