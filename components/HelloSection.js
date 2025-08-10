import { useEffect, useRef } from 'react';

export default function HelloSection() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;

    (async () => {
      // Dynamically import only on the client
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 95%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, ref);
    })();

    return () => ctx && ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      {/* Background layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 to-gray-100" />

      {/* Content layer */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20
                      flex items-center justify-center">
        <div ref={ref} className="flex flex-col p-6 sm:p-8 justify-center items-center rounded-xl shadow-lg 
                        max-w-2xl mx-auto bg-white">
          <h2 className="text-center w-full text-3xl font-semibold mb-6 sm:mb-8">
            Hello! I'm Steve
          </h2>
          <p className="text-center leading-loose">
            I'm a professional software developer with nearly two decades of experience. Most of my expertise is in backend development with a focus in C# and MSSQL. However, I am a full stack developer with front end experience as well. I've also been heavily involved in hosting my work in the cloud using both Azure and AWS.
          </p>
        </div>
      </div>
    </>
  );
}