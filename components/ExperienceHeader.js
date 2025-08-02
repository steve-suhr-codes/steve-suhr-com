import { useEffect } from "react";

export default function ExperienceHeader() {

  useEffect(() => {

    (async () => {

      const gsapModule = await import('gsap');
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;

      gsapModule.gsap.registerPlugin(ScrollTrigger);

      // Pin the second section
      ScrollTrigger.create({
        trigger: "#pinned-experience-section",
        pin: true,
        start: "top top",
        end: "+=200%", // stays pinned for twice the viewport height
        pinSpacing: false
      });

    })();
  }, []);  

  return (
    <section className="absolute inset-0 z-5 h-screen w-full bg-blue-500" id="pinned-experience-section">
      <div className="w-full h-full flex justify-center items-center text-white text-3xl">

        <h1 className="text-5xl font-bold mt-4 mx-10">JOB EXPERIENCE</h1>

      </div>
    </section>
  );
}