import { useEffect } from "react";

export default function PinnedHeader({ children, pinnedId }) {

  useEffect(() => {

    (async () => {

      const gsapModule = await import('gsap');
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;

      gsapModule.gsap.registerPlugin(ScrollTrigger);

      // Pin the second section
      ScrollTrigger.create({
        trigger: `#${pinnedId}`,
        pin: true,
        start: "top top",
        end: "+=200%", // stays pinned for twice the viewport height
        pinSpacing: false
      });

    })();
  }, []);  

  return (
    <section className="absolute inset-0 z-10 h-screen w-full bg-blue-500" id={pinnedId}>
      <div className="w-full h-full flex justify-center items-center text-white text-3xl">

        {children}
        {/* <h1 className="text-5xl font-bold mt-4 mx-10">SKILLS</h1> */}

      </div>
    </section>
  );
}