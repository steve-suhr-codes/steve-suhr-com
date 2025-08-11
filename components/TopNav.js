import { useState } from "react";
import Link from "next/link";

export default function TopNav({ isAuthed }) {
  const [open, setOpen] = useState(false);

  return (
    <nav id="top-nav" className="fixed top-0 w-full h-16 bg-gray-900 text-white z-50">
      <div className="mx-auto h-full flex items-center justify-between px-4">
        {/* Left: Brand (always visible) + desktop links */}
        <div className="flex items-center gap-0">
          <Link 
            href="/" 
            className="text-xl font-semibold md:border-r md:border-white p-2 pr-4"
            onClick={() => setOpen(false)}
          >
            Steve Suhr
          </Link>

          {/* Desktop links (hidden on small screens) */}
          <div className="hidden md:flex">
            <Link href="/" className="font-semibold pl-4 p-2 hover:underline hover:decoration-white">
              Resume
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/todo" className="font-semibold p-2 hover:underline hover:decoration-white">
              To Do
            </Link>
          </div>
        </div>

        {/* Right: Desktop auth link */}
        <div className="hidden md:block">
          <Link href={isAuthed ? "/account" : "/login"} className="font-semibold hover:underline hover:decoration-white">
            {isAuthed ? "My Account" : "Log In"}
          </Link>
        </div>

        {/* Mobile hamburger (shown on small screens) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Open main menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger / X icon */}
          <svg
            className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top transition-all duration-200 ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gray-900 border-t border-white/10 px-4 py-2 space-y-1">
          <Link
            href="/"
            className="block font-semibold py-2 hover:underline hover:decoration-white"
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/todo"
            className="block font-semibold py-2 hover:underline hover:decoration-white"
            onClick={() => setOpen(false)}
          >
            To Do
          </Link>
          <Link
            href={isAuthed ? "/account" : "/login"}
            className="block font-semibold py-2 hover:underline hover:decoration-white"
            onClick={() => setOpen(false)}
          >
            {isAuthed ? "My Account" : "Log In"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
