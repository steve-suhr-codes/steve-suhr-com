import { getServerSession } from 'next-auth';
import type { Session } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import SignOutButton from './SignOutButton';

export const metadata = { title: 'Steve Suhr - My Account' };

export default async function AccountPage() {
  const session = await getServerSession(authOptions as any) as Session | null;
  if (!session) redirect('/login');

  return (
    <div className="flex items-center justify-center min-h-[calc(100svh-4rem)]">
      <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-6 min-w-[300px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={session.user?.image ?? '/default-avatar.png'}
          alt={session.user?.name ?? 'Profile Picture'}
          className="w-24 h-24 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h1 className="text-xl font-semibold">{session.user?.name}</h1>
          <p className="text-gray-500">{session.user?.email}</p>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
