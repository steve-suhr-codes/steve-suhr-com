import Head from 'next/head';
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  
  const session = await getSession(context);

  return { props: { session } };
}

export default function ToDo({ session }) {

  return (
    <>
      <Head>
        <title>To Do Project</title>
      </Head>

      <div className="relative w-full z-0 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="relative flex flex-col z-10 min-h-screen max-w-2xl mx-auto bg-white items-center p-5">
          <h1 className="w-full text-3xl font-semibold">Welcome, {session.user?.name}</h1>
          <p>The To Do Project is still TODO!</p>
        </div>
      </div>
    </>
  );
}

