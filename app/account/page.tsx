import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ValidationBar from "./ValidationBar";
import SignOutButton from "./SignOutButton";
import CreateUserName from "./CreateUserName";

export const metadata = { title: "Steve Suhr - My Account" };
export const dynamic = "force-dynamic"; 

export default async function Account() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: (session?.user as any)?.id }
  });
  // TODO logout if no user id stored in session. Should never be the case though

  return (
    <>
      <ValidationBar />
      <div className="flex flex-col items-center min-h-[calc(100svh-4rem)] gap-10 m-10">
        <div className="flex flex-col gap-5 inline-block">
          <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-6 min-w-[300px]">
            {/* Profile Image */}
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt={session?.user?.name || "Profile Picture"}
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />

            {/* User Info */}
            <div>
              <h1 className="text-xl font-semibold">{session?.user?.name}</h1>
              <p className="text-gray-500">{session?.user?.email}</p>
              <SignOutButton />
            </div>
          </div>

          {/* User Name */}
          <CreateUserName initialUsername={user?.username ?? ""} />
        </div>
      </div>
    </>
  );
}