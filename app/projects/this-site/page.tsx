import Link from 'next/link';

export const metadata = {
  title: 'How I Built This Site - Steve Suhr',
  description: 'Stack choices and design decisions behind stevesuhr.com.',
};

const stack = [
  {
    name: 'Next.js 15 + React 19',
    why: 'App Router, server components, and server actions. The resume page is prerendered as static HTML; the side projects render on the server per request.',
  },
  {
    name: 'TypeScript',
    why: 'Used for everything new. The original resume components are still plain JavaScript and get converted when I touch them.',
  },
  {
    name: 'Tailwind CSS + CSS custom properties',
    why: 'Tailwind for layout utilities, plus a small set of hand-written design tokens for color and type so light and dark mode come from one place.',
  },
  {
    name: 'NextAuth (Google sign-in)',
    why: 'Real authentication for the side projects without storing passwords myself.',
  },
  {
    name: 'Prisma + Postgres on Neon',
    why: 'A typed ORM over serverless Postgres. Sessions and user data live in the same database as the projects that use them.',
  },
  {
    name: 'Vercel',
    why: 'Hosting and deploys from GitHub. Every pull request gets a preview build.',
  },
];

export default function ThisSiteCaseStudy() {
  return (
    <div className="resume-page">
      <div className="resume-wrap">

        <header className="resume-masthead">
          <p className="resume-eyebrow">Project · Case study</p>
          <h1>How I built this site</h1>
          <p className="resume-standfirst">
            From a Wix template to a hand-built Next.js app, and the design decisions along the way.
          </p>
          <div className="resume-meta">
            <span>August 2025 – present</span>
            <span className="resume-meta-links">
              <a
                href="https://github.com/steve-suhr-codes/steve-suhr-com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source on GitHub
              </a>
              <Link href="/">Back to resume</Link>
            </span>
          </div>
        </header>

        <div className="resume-body">
          <nav className="resume-toc">
            <p className="resume-toc-label">Sections</p>
            <ol>
              <li><a href="#why">Why rebuild it</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#evolution">How it evolved</a></li>
              <li><a href="#design">Design decisions</a></li>
              <li><a href="#tools">Tools</a></li>
            </ol>
          </nav>

          <main className="resume-main">
            <section id="why" className="resume-section">
              <h2>Why rebuild it</h2>
              <div className="resume-intro">
                <p>
                  The first version of stevesuhr.com was a Wix site. It did the job, but I didn&apos;t
                  own any of it. For a software engineer&apos;s resume, the site itself should be
                  evidence. So I rebuilt it by hand, with two goals: a showcase I could point people
                  to, and a sandbox for learning Next.js and Postgres on a real deployed app instead
                  of a tutorial.
                </p>
              </div>
            </section>

            <section id="stack" className="resume-section">
              <h2>Stack</h2>
              <dl className="case-stack">
                {stack.map(({ name, why }) => (
                  <div key={name} className="case-stack-row">
                    <dt>{name}</dt>
                    <dd>{why}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="evolution" className="resume-section">
              <h2>How it evolved</h2>

              <div className="resume-job">
                <div className="resume-job-role-row">
                  <h3 className="resume-job-company">v1: the flashy version</h3>
                  <span className="resume-job-dates">Aug 2025</span>
                </div>
                <div className="resume-job-body">
                  <p>
                    A full-screen hero with a parallax background, GSAP scroll animations, and
                    gradient cards for each job. It was a good way to learn the framework, and it
                    looked like a lot of other developer portfolios.
                  </p>
                </div>
              </div>

              <div className="resume-job">
                <div className="resume-job-role-row">
                  <h3 className="resume-job-company">Sandbox features</h3>
                  <span className="resume-job-dates">Aug 2025</span>
                </div>
                <div className="resume-job-body">
                  <p>
                    Added Google sign-in, then Postgres through Prisma, then a small signed-in{' '}
                    <Link href="/todo">to-do app</Link> to exercise the whole path: auth, database,
                    server actions, and per-user data access checks.
                  </p>
                  <p>
                    Midway through I migrated from the Pages Router to the App Router and upgraded
                    to Next.js 15. Running both routers side by side for a while made the tradeoffs
                    concrete, especially around where session data gets loaded.
                  </p>
                </div>
              </div>

              <div className="resume-job">
                <div className="resume-job-role-row">
                  <h3 className="resume-job-company">v2: the document redesign</h3>
                  <span className="resume-job-dates">Sep 2026</span>
                </div>
                <div className="resume-job-body">
                  <p>
                    I replaced the hero, parallax, and animations with a layout that reads like a
                    well-edited document: a masthead, a sticky table of contents, and numbered
                    sections. The content is the same; it&apos;s just much easier to skim.
                  </p>
                </div>
              </div>
            </section>

            <section id="design" className="resume-section">
              <h2>Design decisions</h2>
              <div className="resume-job-body case-decisions">
                <ul>
                  <li>
                    <strong>Built for skimming.</strong> Most people give a resume under a minute.
                    Numbered sections and a table of contents let a reader jump straight to
                    experience, and the numbers come from CSS counters, so adding or hiding a section
                    never means renumbering by hand.
                  </li>
                  <li>
                    <strong>Three typefaces, three jobs.</strong> Serif for names and headings, sans
                    for body copy, and monospace for metadata like dates, locations, and skills. You
                    can tell what a line is before you read it.
                  </li>
                  <li>
                    <strong>One set of color tokens.</strong> Warm neutrals with a single amber
                    accent, defined once as CSS variables and redefined for dark mode. Secondary text
                    meets WCAG AAA contrast (7:1) in both themes, after feedback that the gray was
                    hard to read on a phone in bright light.
                  </li>
                  <li>
                    <strong>Static where it can be.</strong> The layout used to read the session on
                    every request, which forced the resume to render dynamically. Moving the auth
                    check into a client component let the resume be prerendered as static HTML,
                    while the signed-in projects still render on the server.
                  </li>
                  <li>
                    <strong>Motion only where it helps.</strong> The scroll animations are gone.
                    What&apos;s left is small hover feedback on links, and it turns off for anyone
                    with reduced motion enabled.
                  </li>
                  <li>
                    <strong>Mobile first-class.</strong> Below 900px the two-column layout collapses,
                    and the table of contents becomes a compact grid at the top instead of a sidebar.
                  </li>
                </ul>
              </div>
            </section>

            <section id="tools" className="resume-section">
              <h2>Tools</h2>
              <div className="resume-intro">
                <p>
                  I used AI coding assistants (OpenAI Codex and Anthropic&apos;s Claude) for parts
                  of the work, like the App Router migration and the v2 restyle. I made the design
                  and architecture calls and reviewed every change before it merged, the same way I
                  would with a teammate&apos;s pull request.
                </p>
              </div>
            </section>
          </main>
        </div>

      </div>
    </div>
  );
}
