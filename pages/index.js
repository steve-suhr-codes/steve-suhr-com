import FixedHeader from '../components/FixedHeader';  
import ParallaxHeader from "../components/ParallaxHeader";
import HelloSection from '../components/HelloSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';  
import EducationSection from '../components/EducationSection';

import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {

    (async () => {

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // gsap.to(`#heading-panes`, {
      //   y: "90%", 
      //   ease: "none", 
      //   scrollTrigger: {
      //     trigger: `#heading-panes`,
      //     start: "top bottom", 
      //     // end: "bottom top", 
      //     scrub: true 
      //   }
      // });

      // gsap.fromTo(`#skills-header`, {
      //   y: "0%"
      // }, {
      //   y: "-50%", 
      //   ease: "none", 
      //   scrollTrigger: {
      //     trigger: `#hello-section`,
      //     start: "top top", 
      //     // end: "+=400%", 
      //     scrub: true 
      //   }
      // });

      gsap.fromTo(
        "#skills-header-bg",         // TARGET: background image div
        { y: "0%" },
        { 
          y: "-50%",            // move upward slower than the page
          ease: "none",
          scrollTrigger: {
            trigger: "#skills-header", // TRIGGER: entire section
            start: "top bottom",  // start when section enters viewport
            end: "bottom top",    // end when section leaves viewport
            scrub: true
          }
        }
      );

      gsap.fromTo(
        "#jobs-header-bg",         // TARGET: background image div
        { y: "0%" },
        { 
          y: "-50%",            // move upward slower than the page
          ease: "none",
          scrollTrigger: {
            trigger: "#jobs-header", // TRIGGER: entire section
            start: "top bottom",  // start when section enters viewport
            end: "bottom top",    // end when section leaves viewport
            scrub: true
          }
        }
      );

    })();
  }, []);  

  return (
    <div className="relative">
      <FixedHeader />
      <main>

        <div className="relative h-screen mt-[100vh] z-20">
          <HelloSection />
        </div>

        <div id="skills-header" className="relative h-[25vh] z-10">
          <div id="skills-header-bg" className="absolute inset-0 h-[200%] bg-[url('/images/glass-background.avif')] bg-cover bg-center z-5"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-5xl font-bold">SKILLS</h1>
          </div>
        </div>

        <div id="skills-section" className="relative z-20">
          <SkillsSection />
        </div>

        <div id="jobs-header" className="relative h-[25vh] z-10">
          <div id="jobs-header-bg" className="absolute inset-0 h-[200%] bg-[url('/images/glass-background.avif')] bg-cover bg-center z-5"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-5xl font-bold">JOB EXPERIENCE</h1>
          </div>
        </div>

        <div id="experience-section" className="relative z-20">
          <ExperienceSection />
        </div>

        <ParallaxHeader containerId="education-header" bgId="education-header-bg" text="EDUCATION" />

        <div id="education-section" className="relative z-20">
          <EducationSection />
        </div>

        <div className="relative h-screen">
        </div>

      </main>
    </div>
  );
}