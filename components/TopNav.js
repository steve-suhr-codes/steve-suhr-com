import Link from 'next/link';

export default function TopNav({ isAuthed }) {
  return (
    <nav id="top-nav" className="fixed top-0 w-full h-16 bg-gray-900 text-white z-50">
      <div className="mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold border-r border-white p-2">Steve Suhr</Link>
          <Link href="/" className="font-semibold p-2 hover:underline hover:decoration-white">Resume</Link>
        </div>
        <Link href="/login" className="font-semibold hover:underline hover:decoration-white">{isAuthed ? "My Account" : "Log In"}</Link>
      </div>
    </nav>
  );
}
