import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import LoginForm from './LoginForm';

export const metadata = { title: 'Steve Suhr - Log In' };

export default async function LoginPage() {
  const session = await getServerSession(authOptions as any);
  if (session) redirect('/account');

  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
