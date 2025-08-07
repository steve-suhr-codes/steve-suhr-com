import { useEffect } from "react";

export default function PinnedHeader({ text, pinnedId }) {

  useEffect(() => {

    (async () => {

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // ScrollTrigger.create({
      //   trigger: `#${pinnedId}`,
      //   pin: true,
      //   start: "top top",
      //   end: "+=200%", // stays pinned for twice the viewport height
      //   pinSpacing: false
      // });

      // gsap.to(`#${pinnedId}`, {
      //   y: "-30%", // move upward slower than the scroll
      //   ease: "none", // keep it linear
      //   scrollTrigger: {
      //     trigger: `#${pinnedId}`,
      //     start: "top bottom", // start when section enters viewport
      //     end: "bottom top", // end when it leaves
      //     scrub: true // ties animation to scroll
      //   }
      // });

      gsap.fromTo(`#${pinnedId}`, {
        y: "0"
      }, {
        y: "90%", 
        ease: "none", 
        scrollTrigger: {
          trigger: `#${pinnedId}`,
          start: "top bottom", 
          // end: "bottom top", 
          scrub: true 
        }
      });

    })();
  }, []);  

  return (
    <section className="absolute inset-0 z-10 h-screen w-full bg-[url('/images/glass-background.avif')] bg-cover bg-center" id={pinnedId}>
      <div className="w-full h-full flex justify-center items-center text-white text-3xl">

            <div className="flex h-full w-full justify-center items-center bg-gradient-to-r from-blue-900/75 to-blue-500/75">
              <h1 className="text-5xl font-bold my-4 mx-10 opacity-100">{text}</h1>
            </div>

      </div>
    </section>
  );
}