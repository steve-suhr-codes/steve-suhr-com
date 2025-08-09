import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[calc(100svh-4rem)]">
        <h1 className="text-2xl font-semibold">Log In</h1>
      </div>
    </>
  );
}
