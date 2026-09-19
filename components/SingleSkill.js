export default function SingleSkill({ title, children }) {
  return (
    <div className="resume-skill-group">
      <h3 className="resume-skill-title">{title}</h3>
      {children}
    </div>
  );
}
