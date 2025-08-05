import { useEffect } from "react";

export default function PinnedHeader({ text, pinnedId }) {

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
    <section className="absolute inset-0 z-10 h-screen w-full bg-[url('/images/glass-background.avif')] bg-cover bg-center" id={pinnedId}>
      <div className="w-full h-full flex justify-center items-center text-white text-3xl">

            <div className="flex h-full w-full justify-center items-center bg-gradient-to-r from-blue-900/75 to-blue-500/75">
              <h1 className="text-5xl font-bold my-4 mx-10 opacity-100">{text}</h1>
            </div>

      </div>
    </section>
  );
}