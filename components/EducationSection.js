import { FiArrowUpRight } from 'react-icons/fi';

export default function EducationSection() {
  return (
    <a
      href="https://www.vt.edu"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-edu resume-edu--link"
    >
      <h3 className="resume-edu-school">
        Virginia Polytechnic Institute and State University
        <FiArrowUpRight className="resume-job-arrow" aria-hidden="true" />
      </h3>
      <div className="resume-edu-meta">
        <span>Blacksburg, VA</span>
        <span>August 2002 – June 2006</span>
      </div>
      <p className="resume-edu-degree">
        Bachelor of Science, Computer Engineering
      </p>
      <p className="resume-edu-body">
        Minored in Computer Science and Mathematics. Participated in
        undergraduate research with e-textiles/wearable embedded systems,
        AES encryption timing attacks, and feedback-driven e-commerce research.
      </p>
    </a>
  );
}
