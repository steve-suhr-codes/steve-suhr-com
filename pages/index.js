import FixedHeader from '../components/FixedHeader';  
import PinnedHeader from "../components/PinnedHeader";
import HelloSection from '../components/HelloSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';  
import EducationSection from '../components/EducationSection';

export default function Home() {
  
  return (
    <div className="relative">
      <FixedHeader />
      <main>

        <div className="relative h-screen mt-[100vh]">
          <HelloSection />
          <PinnedHeader text="SKILLS" pinnedId="skills-header" />
        </div>
        <SkillsSection />

        <div className="relative h-screen -mt-[100vh]">
          <PinnedHeader text="JOB EXPERIENCE" pinnedId="experience-header" />
        </div>

        <div className="relative h-screen mt-[100vh]">
          <ExperienceSection />
        </div>

        <div className="relative h-screen mt-[100vh]">
          <PinnedHeader text="EDUCATION" pinnedId="education-header" />
        </div>

        <div className="relative h-screen mt-[100vh]">
          <EducationSection />
        </div>

        <div className="relative h-screen">
        </div>

      </main>
    </div>
  );
}