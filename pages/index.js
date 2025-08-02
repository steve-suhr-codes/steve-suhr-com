import { useEffect } from "react";
import Header from '../components/Header';  
import SkillsHeader from '../components/SkillsHeader';  
import SkillsSection from '../components/SkillsSection';
import ExperienceHeader from '../components/ExperienceHeader';  
import ExperienceSection from '../components/ExperienceSection';  

export default function Home() {
  
  return (
    <div className="relative">      
      <Header />
      <main>
        <div className="relative h-screen mt-[100vh]">

          <section className="absolute inset-0 z-20 bg-gradient-to-r from-gray-700 to-gray-500">
            <div className="h-screen p-20 flex justify-center items-center">
              <div className="flex flex-col p-8 justify-center items-center rounded-xl shadow-lg max-w-2xl mx-auto bg-white">

                <h2 className="text-center w-full text-3xl font-semibold mb-8">Hello! I'm Steve</h2>
                <p className="text-center leading-loose">
                  I'm a professional software developer with nearly two decades of experience. Most of my expertise is in backend development with a focus in C# and MSSQL. However, I am a full stack developer with experience in HTML, CSS, and JavaScript as well. My projects have been focused on APIs, Web Development, and Web Scraping. I have been involved in hosting my work in the cloud using both Azure and AWS.
                </p>
              
              </div>
            </div>
          </section>
          <SkillsHeader />
        </div>
        <SkillsSection />

        <div className="relative h-screen -mt-[100vh]">

          <ExperienceHeader />

        </div>

        <div className="relative h-screen mt-[100vh]">

          <ExperienceSection />
          {/* <section className="absolute inset-0 z-20 bg-gradient-to-r from-gray-700 to-gray-500">
            <div className="h-screen p-20 flex justify-center items-center">
              <div className="flex flex-col p-8 justify-center items-center rounded-xl shadow-lg max-w-2xl mx-auto bg-white">

                <h2 className="text-center w-full text-3xl font-semibold mb-8">Job Experience</h2>
                <p className="text-center leading-loose">
                  TODO
                </p>
              
              </div>
            </div>
          </section> */}

        </div>

        <div className="relative h-screen mt-[100vh]">

        </div>
      </main>
    </div>
  );
}