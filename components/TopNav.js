'use client';

import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';
import AuthLink from './AuthLink';

export default function TopNav() {
  return (
    <nav id="top-nav" className="resume-topnav fixed top-0 w-full h-16 z-50">
      <div className="h-full flex items-center gap-3 px-6" style={{ maxWidth: '1180px', margin: '0 auto', width: '100%' }}>
        <Link href="/" className="resume-topnav-brand">
          Steve Suhr
        </Link>
        <a
          href="https://www.linkedin.com/in/stevesuhr/"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-topnav-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/steve-suhr-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-topnav-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="/SteveSuhrResume.pdf"
          download
          className="resume-topnav-icon"
          aria-label="Download Resume PDF"
        >
          <MdFileDownload />
        </a>

        {/* Desktop links — commented out, replaced by section nav on the resume page */}
        {/* <div className="hidden md:flex">
          <Link href="/" className="font-semibold pl-4 p-2 hover:underline hover:decoration-white">
            Resume
          </Link>
        </div> */}
        {/* <div className="hidden md:flex">
          <Link href="/todo" className="font-semibold p-2 hover:underline hover:decoration-white">
            To Do
          </Link>
        </div> */}

        <div className="ml-auto">
          <AuthLink />
        </div>
      </div>
    </nav>
  );
}
