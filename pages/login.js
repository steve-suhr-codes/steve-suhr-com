import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

export default function Login({ isAuthed }) {

  const router = useRouter();
  useEffect(() => {
    if (isAuthed) {
      router.replace("/account");
    }
  }, [isAuthed, router]);

  const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Steve Suhr - Log In</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[calc(100svh-4rem)]">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Continue with Google
        </button>
      </div>
    </>
  );
}
