"use server";

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function createTodo(id: string, title: string, done: boolean) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any).id;
  if (!userId) throw new Error("Not signed in.");

  const todo = await prisma.todo.create({
    data: { id, userId, title, done  }
  });

  return todo;
}

export async function toggleTodo(id: string, done: boolean) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any).id;
  if (!userId) throw new Error("Not signed in.");

  const existingTodo = await prisma.todo.findUnique({
      where: { id, userId  },
  });
  if (!existingTodo) throw new Error("User does not own Todo item.");

  const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { done }
  });

  return updatedTodo;
}

export async function deleteTodo(id: string) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any).id;
  if (!userId) throw new Error("Not signed in.");

  const existingTodo = await prisma.todo.findUnique({
      where: { id, userId  },
  });
  if (!existingTodo) throw new Error("User does not own Todo item.");

  await prisma.todo.delete({
      where: { id },
  });
}