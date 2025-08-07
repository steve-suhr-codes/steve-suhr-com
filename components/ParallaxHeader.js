import { useEffect } from "react";

export default function ParallaxHeader({ text, containerId, bgId }) {

  useEffect(() => {

    (async () => {

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        `#${bgId}`,         // TARGET: background image div
        { y: "0%" },
        { 
          y: "-50%",            // move upward slower than the page
          ease: "none",
          scrollTrigger: {
            trigger: `#${containerId}`, // TRIGGER: entire section
            start: "top bottom",  // start when section enters viewport
            end: "bottom top",    // end when section leaves viewport
            scrub: true
          }
        }
      );

    })();
  }, []);  

  return (
    <div id={containerId} className="relative h-[25vh] z-10">
      <div id={bgId} className="absolute inset-0 h-[200%] bg-[url('/images/glass-background.avif')] bg-cover bg-center z-5"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">{text}</h1>
      </div>
    </div>
  );
}