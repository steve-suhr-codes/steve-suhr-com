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
    <div className="resume-page">
      <div className="resume-wrap">
        <div className="resume-login">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session.user?.image ?? '/default-avatar.png'}
            alt={session.user?.name ?? 'Profile Picture'}
            className="resume-account-avatar"
          />
          <h1>{session.user?.name}</h1>
          <p>{session.user?.email}</p>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
