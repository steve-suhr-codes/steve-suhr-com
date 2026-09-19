'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function AuthLink() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (pathname === '/') return null;
  if (status === 'loading') return null;

  if (session) {
    return (
      <button onClick={() => signOut({ callbackUrl: '/login' })} className="resume-topnav-auth">
        Log Out
      </button>
    );
  }

  return (
    <Link href="/login" className="resume-topnav-auth">
      Log In
    </Link>
  );
}
