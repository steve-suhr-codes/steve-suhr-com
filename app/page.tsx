import HelloSection from '../components/HelloSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = { title: 'Steve Suhr - Resume' };

export default function Home() {
  return (
    <div className="resume-page">
      <div className="resume-wrap">

        <header className="resume-masthead">
          <p className="resume-eyebrow">Resume · Software Engineering</p>
          <div className="resume-masthead-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Steve.jpeg"
              alt="Steve Suhr"
              className="resume-photo"
            />
            <div>
              <h1>Steve Suhr</h1>
              <p className="resume-standfirst">Senior Software Engineer</p>
              <div className="resume-meta">
                <span>Phoenix, AZ</span>
                <span className="resume-meta-links">
                  <a
                    href="https://www.linkedin.com/in/stevesuhr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/steve-suhr-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    GitHub
                  </a>
                  <a
                    href="/SteveSuhrResume.pdf"
                    download
                  >
                    <MdFileDownload style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="resume-body">
          <nav className="resume-toc">
            <p className="resume-toc-label">Sections</p>
            <ol>
              <li><a href="#intro">Intro</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Job Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
            </ol>
          </nav>

          <main className="resume-main">
            <section id="intro" className="resume-section">
              <h2>Intro</h2>
              <HelloSection />
            </section>

            <section id="skills" className="resume-section">
              <h2>Skills</h2>
              <SkillsSection />
            </section>

            <section id="experience" className="resume-section">
              <h2>Job Experience</h2>
              <ExperienceSection />
            </section>

            <section id="education" className="resume-section">
              <h2>Education</h2>
              <EducationSection />
            </section>

            <section id="projects" className="resume-section">
              <h2>Projects</h2>
              <Link href="/projects/this-site" className="resume-job resume-job--link">
                <div className="resume-job-title-row">
                  <h3 className="resume-job-company">
                    This site
                    <FiArrowRight className="resume-job-arrow" aria-hidden="true" />
                  </h3>
                  <span className="resume-job-location">stevesuhr.com</span>
                </div>
                <div className="resume-job-role-row">
                  <p className="resume-job-role">Case study: how I built it</p>
                  <span className="resume-job-dates">Aug 2025 – Present</span>
                </div>
                <div className="resume-job-body">
                  <p>
                    Rebuilt my Wix resume by hand as a showcase and a sandbox. Covers the stack
                    choices, the move from a flashy v1 to a document-style v2, and the design
                    decisions behind the layout.
                  </p>
                </div>
                <ul className="resume-job-pills">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Postgres', 'Prisma', 'NextAuth', 'Vercel'].map((skill) => (
                    <li key={skill} className="resume-job-pill">{skill}</li>
                  ))}
                </ul>
              </Link>

              <Link href="/todo" className="resume-job resume-job--link">
                <div className="resume-job-title-row">
                  <h3 className="resume-job-company">
                    To-do list
                    <FiArrowRight className="resume-job-arrow" aria-hidden="true" />
                  </h3>
                  <span className="resume-job-location">stevesuhr.com/todo</span>
                </div>
                <div className="resume-job-role-row">
                  <p className="resume-job-role">Full-stack sandbox app</p>
                  <span className="resume-job-dates">Aug 2025</span>
                </div>
                <div className="resume-job-body">
                  <p>
                    A small per-user to-do list that exercises the whole path: Google sign-in,
                    Postgres through Prisma, server actions, and ownership checks on every write.
                    Sign in with Google to try it.
                  </p>
                </div>
                <ul className="resume-job-pills">
                  {['Next.js', 'Server Actions', 'Prisma', 'Postgres', 'NextAuth'].map((skill) => (
                    <li key={skill} className="resume-job-pill">{skill}</li>
                  ))}
                </ul>
              </Link>
            </section>
          </main>
        </div>

      </div>
    </div>
  );
}
