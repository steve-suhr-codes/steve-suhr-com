import HelloSection from '../components/HelloSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

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
              <div className="resume-intro">
                <p>For now a placeholder TODO list made with Next.js and PostgreSQL.</p>
                <p><a href="/todo">View the TODO list →</a></p>
              </div>
            </section>
          </main>
        </div>

      </div>
    </div>
  );
}
