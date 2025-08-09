import Head from 'next/head';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading…</p>;

  if (session) {
    return (
      <div className="p-6">
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Sign in</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Continue with Google
      </button>
    </div>
  );
  // return (
  //   <>
  //     <Head>
  //       <title>Steve Suhr - Log In</title>
  //     </Head>
  //     <div className="flex flex-col items-center justify-center min-h-[calc(100svh-4rem)]">
  //       <h1 className="text-2xl font-semibold">Log In</h1>
  //     </div>
  //   </>
  //);
}
