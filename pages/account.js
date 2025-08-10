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

  const { data: session, status } = useSession();
  
  // TODO: Show Loading instead of email address
  //  if (status === "loading") return <p>Loading…</p>;

  return (
    <>
      <Head>
        <title>Steve Suhr - My Account</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[calc(100svh-4rem)]">
        <h1 className="text-2xl font-semibold">Signed in as {session.user?.email}</h1>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </div>
    </>
  );
}
