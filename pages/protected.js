import { getSession } from "next-auth/react";

export default function Protected() {
  return <div className="p-6">Secret stuff</div>;
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  return { props: {} };
}
