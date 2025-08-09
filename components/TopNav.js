import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-gray-900 text-white z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
        <Link href="/" className="font-semibold">Resume</Link>
        <Link href="/login" className="font-semibold">Log In</Link>
      </div>
    </nav>
  );
}
