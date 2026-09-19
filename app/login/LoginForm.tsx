'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const sp = useSearchParams();
  const callbackUrl = sp?.get('callbackUrl') ?? '/account';

  return (
    <div className="resume-page">
      <div className="resume-wrap">
        <div className="resume-login">
          <h1>Sign In</h1>
          <p>Access your account to continue.</p>
          <button
            onClick={() => signIn('google', { callbackUrl })}
            className="resume-login-btn"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
