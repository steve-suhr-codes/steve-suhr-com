import Head from "next/head";
import MainHeader from '../components/MainHeader';  
import ParallaxHeader from "../components/ParallaxHeader";
import HelloSection from '../components/HelloSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';  
import EducationSection from '../components/EducationSection';
import MainFooter from '../components/MainFooter';
import { useEffect } from "react";

export default function Home() {
  
  // useEffect(() => {

  //   (async () => {

  //     const { gsap } = await import('gsap');
  //     const { ScrollTrigger } = await import('gsap/ScrollTrigger');

  //     gsap.registerPlugin(ScrollTrigger);

  //   })();
  // }, []);  

  return (    
    <>
      <Head>
        <title>Steve Suhr - Resume</title>
        <link
          rel="preload"
          as="image"
          href="/images/building-background.jpeg"
        />
      </Head>

      <div className="relative">

        <header>
          <MainHeader />
        </header>
        
        <main>

          <div id="hello-section" className="relative w-full z-20">
            <HelloSection />
          </div>

          <ParallaxHeader containerId="skills-header" bgId="skills-header-bg" text="SKILLS" />

          <div id="skills-section" className="relative z-20">
            <SkillsSection />
          </div>

          <ParallaxHeader containerId="jobs-header" bgId="jobs-header-bg" text="JOB EXPERIENCE" />

          <div id="experience-section" className="relative z-20">
            <ExperienceSection />
          </div>

          <ParallaxHeader containerId="education-header" bgId="education-header-bg" text="EDUCATION" />

          <div id="education-section" className="relative z-20">
            <EducationSection />
          </div>

        </main>

        <footer className="bg-gray-900 text-white py-6">
          <MainFooter />
        </footer>

      </div>
    </>
  );
}