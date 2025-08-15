"use server";
import { prisma } from "@/lib/prisma";

export async function addTodo(userId: string, title: string) {
  return; //prisma.todo.create({ data: { userId, title } });
}
