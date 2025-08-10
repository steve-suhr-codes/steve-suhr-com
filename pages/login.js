import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login({ isAuthed }) {
  const router = useRouter();

  useEffect(() => {
    if (isAuthed) {
      router.replace("/account");
    }
  }, [isAuthed, router]);
  if (isAuthed) return null; 

  const sp = useSearchParams();
  const callbackUrl = sp.get("callbackUrl") ?? "/account";

  return (
    <>
      <Head>
        <title>Steve Suhr - Log In</title>
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100svh-4rem)]">
        <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-6 min-w-[300px]">
          <div className="flex flex-col w-full items-center">
            <h1 className="text-xl font-semibold">Sign In</h1>
            <p className="text-gray-500">Access your account</p>
            <button
              onClick={() => signIn("google", { callbackUrl })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
