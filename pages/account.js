import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Account({ isAuthed }) {

  const router = useRouter();
  useEffect(() => {
    if (!isAuthed) {
      router.replace("/login");
    }
  }, [isAuthed, router]);
  if (!isAuthed) return null; // 🚀 No flicker

  const { data: session, status } = useSession();
  
  if (status === "loading") return <p>Loading…</p>;

  return (
    <>
      <Head>
        <title>Steve Suhr - My Account</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100svh-4rem)]">
        <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-6 min-w-[300px]">
          {/* Profile Image */}
          <img
            src={session.user?.image || "/default-avatar.png"}
            alt={session.user?.name || "Profile Picture"}
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />

          {/* User Info */}
          <div>
            <h1 className="text-xl font-semibold">{session.user?.name}</h1>
            <p className="text-gray-500">{session.user?.email}</p>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
