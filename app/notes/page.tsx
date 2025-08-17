import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import NoteProvider from "./NoteProvider"
import NoteEditor from "./NoteEditor";


export default async function NotesPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;
  if (!userId) 
    redirect("/login?callbackUrl=/notes&validationMessage=Login to use Note Sharing");

  const user = await prisma.user.findUnique({
     where: { id: userId },
     select: { username: true }
   });
   if (!user?.username || user?.username.length == 0) 
    redirect("/account?callbackUrl=/notes&validationMessage=User Name required to use Note Sharing");

   const initialNoteId = null;

  return (
    <div className="relative w-full z-0 bg-gradient-to-r from-gray-200 to-gray-100">
      <div className="relative flex flex-col z-10 min-h-screen max-w-2xl mx-auto bg-white p-5 gap-5">
        <h1 className="w-full text-3xl font-semibold">
          Welcome, {session?.user?.name ?? "you"}
        </h1>
        <p>Here is a little side project that will let you create and share notes.</p>
        <p>User Name: {user.username}</p>
        <NoteProvider initialNoteId={initialNoteId}>
          <NoteEditor />
        </NoteProvider>
      </div>
    </div>
  );
}