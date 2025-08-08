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
      <main className="w-full">

        <div className="relative w-full mt-[100vh] z-20">
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

        <div className="relative h-screen">
        </div> 

      </main>
    </div>
  );
}