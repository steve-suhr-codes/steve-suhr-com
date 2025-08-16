import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import TodoList, { type Todo } from "./TodoList";

export const metadata = { title: "Steve Suhr - To Do Project" };
export const dynamic = "force-dynamic"; // optional for fresh data on each load

export default async function ToDoPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;
  if (!userId) redirect("/login?callback=/todo");

  const todos = await prisma.todo.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, done: true }
  });

  return (
    <div className="relative w-full z-0 bg-gradient-to-r from-gray-200 to-gray-100">
      <div className="relative flex flex-col z-10 min-h-screen max-w-2xl mx-auto bg-white p-5 gap-5">
        <h1 className="w-full text-3xl font-semibold">
          Welcome, {session?.user?.name ?? "you"}
        </h1>
        <p>Here is a little side project that will keep track of your to do items.</p>
        <TodoList initialTodos={todos as Todo[]} />
      </div>
    </div>
  );
}
