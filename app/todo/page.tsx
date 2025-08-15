import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "To Do Project" };

export default async function ToDoPage() {

  async function create(formData: FormData) {
    'use server';

    const session = await getServerSession(authOptions);
    if (!session) redirect("/login?callbackUrl=/todo");
  
    var userId = (session?.user as any)?.id;
    var title = formData.get('title');

    //await prisma.todo.create({ data: { userId, title } });
  }

  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?callbackUrl=/todo");

  return (
    <div className="relative w-full z-0 bg-gradient-to-r from-gray-200 to-gray-100">
      <div className="relative flex flex-col z-10 min-h-screen max-w-2xl mx-auto bg-white items-center p-5">
        <h1 className="w-full text-3xl font-semibold pb-20">
          Welcome, {session.user?.name}
        </h1>
        <p>The To Do Project is still TODO!</p>

        <form action={create}>
          <input type="text" name="title" placeholder="To Do Item" /> <br />
          <input type="submit" value="SUBMIT" /> 
        </form>

      </div>
    </div>
  );
}
