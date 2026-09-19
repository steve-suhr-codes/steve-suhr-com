export default function SingleExperience({ children, company, location, title, dates }) {
  return (
    <div className="resume-job">
      <div className="resume-job-title-row">
        <h3 className="resume-job-company">{company}</h3>
        <span className="resume-job-location">{location}</span>
      </div>
      <div className="resume-job-role-row">
        <p className="resume-job-role">{title}</p>
        <span className="resume-job-dates">{dates}</span>
      </div>
      <div className="resume-job-body">
        {children}
      </div>
    </div>
  );
}
