import { FiArrowUpRight } from 'react-icons/fi';

export default function SingleExperience({ children, company, location, title, dates, skills, url }) {
  const inner = (
    <>
      <div className="resume-job-title-row">
        <h3 className="resume-job-company">
          {company}
          {url && <FiArrowUpRight className="resume-job-arrow" aria-hidden="true" />}
        </h3>
        <span className="resume-job-location">{location}</span>
      </div>
      <div className="resume-job-role-row">
        <p className="resume-job-role">{title}</p>
        <span className="resume-job-dates">{dates}</span>
      </div>
      <div className="resume-job-body">
        {children}
      </div>
      {skills?.length > 0 && (
        <ul className="resume-job-pills">
          {skills.map((skill) => (
            <li key={skill} className="resume-job-pill">{skill}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="resume-job resume-job--link">
        {inner}
      </a>
    );
  }

  return <div className="resume-job">{inner}</div>;
}
