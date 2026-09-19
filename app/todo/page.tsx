import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import TodoList, { type Todo } from "./TodoList";

export const metadata = { title: "To Do Project" };
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
    <div className="resume-page">
      <div className="resume-wrap">
        <div className="todo-page">
          <header className="todo-header">
            <h1>To Do</h1>
            <p>Welcome, {session?.user?.name ?? "you"}</p>
          </header>
          <TodoList initialTodos={todos as Todo[]} />
        </div>
      </div>
    </div>
  );
}
