import Link from 'next/link';
import type { ReactNode } from 'react';

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  effectiveDate: string;
  otherPage: { href: string; label: string };
  sections: LegalSection[];
};

/** Document-style layout for app legal pages (privacy policy, terms), matching the case-study pages. */
export default function LegalPage({ eyebrow, title, standfirst, effectiveDate, otherPage, sections }: Props) {
  return (
    <div className="resume-page">
      <div className="resume-wrap">
        <header className="resume-masthead">
          <p className="resume-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="resume-standfirst">{standfirst}</p>
          <div className="resume-meta">
            <span>Effective {effectiveDate}</span>
            <span className="resume-meta-links">
              <Link href={otherPage.href}>{otherPage.label}</Link>
            </span>
          </div>
        </header>

        <div className="resume-body">
          <nav className="resume-toc">
            <p className="resume-toc-label">Sections</p>
            <ol>
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <main className="resume-main">
            {sections.map(({ id, title, body }) => (
              <section key={id} id={id} className="resume-section">
                <h2>{title}</h2>
                <div className="resume-job-body">{body}</div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
