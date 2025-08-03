import { useEffect } from "react";
import FixedHeader from '../components/FixedHeader';  
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';  
import PinnedHeader from "../components/PinnedHeader";

export default function Home() {
  
  return (
    <div className="relative">
      <FixedHeader />
      <main>
        <div className="relative h-screen mt-[100vh]">

          <section className="absolute inset-0 z-20 bg-gradient-to-r from-gray-200 to-gray-100">
            <div className="h-screen p-20 flex justify-center items-center">
              <div className="flex flex-col p-8 justify-center items-center rounded-xl shadow-lg max-w-2xl mx-auto bg-white">

                <h2 className="text-center w-full text-3xl font-semibold mb-8">Hello! I'm Steve</h2>
                <p className="text-center leading-loose">
                  I'm a professional software developer with nearly two decades of experience. Most of my expertise is in backend development with a focus in C# and MSSQL. However, I am a full stack developer with experience in HTML, CSS, and JavaScript as well. My projects have been focused on APIs, Web Development, and Web Scraping. I have been involved in hosting my work in the cloud using both Azure and AWS.
                </p>
              
              </div>
            </div>
          </section>
          <PinnedHeader pinnedId="skills-header">
            <h1 className="text-5xl font-bold mt-4 mx-10">SKILLS</h1>
          </PinnedHeader>
        </div>
        <SkillsSection />

        <div className="relative h-screen -mt-[100vh]">
          <PinnedHeader pinnedId="experience-header">
            <h1 className="text-5xl font-bold mt-4 mx-10">JOB EXPERIENCE</h1>
          </PinnedHeader>
        </div>

        <div className="relative h-screen mt-[100vh]">
          <ExperienceSection />
        </div>

        <div className="relative h-screen mt-[100vh]">
          <PinnedHeader pinnedId="education-header">
            <h1 className="text-5xl font-bold mt-4 mx-10">EDUCATION</h1>
          </PinnedHeader>
        </div>

        <div className="relative h-screen mt-[100vh]">
          <section className="bg-gray-100 h-screen relative z-20 py-1">
            TESTING TESTING TESTING
          </section>
        </div>

        <div className="relative h-screen">
        </div>

      </main>
    </div>
  );
}