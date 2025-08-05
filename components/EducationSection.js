import { useEffect, useRef } from "react";


export default function EducationSection() {
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
          { 
            opacity: 0, 
            y: 100 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              // markers: true
            },
          }
        );
      }, ref);
    })();

    return () => ctx && ctx.revert(); // cleanup on unmount
  }, []);
  

  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-100 min-h-screen relative z-20 py-12 px-6 flex items-center justify-center">
        <div ref={ref} className="flex flex-col p-8 justify-center items-center rounded-xl shadow-lg max-w-2xl mx-auto bg-white">
          <div className="max-w-3xl w-full">
            <h2 className="text-2xl font-bold text-gray-800">
              Virginia Polytechnic Institute and State University
            </h2>
            <div className="flex flex-wrap justify-between text-gray-600 mt-1">
              <span className="italic">Blacksburg, VA</span>
              <span className="italic">August 2002 – June 2006</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Bachelor of Science, Computer Engineering
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Minored in Computer Science and Mathematics. Participated in
              undergraduate research with e-textiles/wearable embedded systems,
              AES encryption timing attacks, and feedback-driven e-commerce research.
            </p>
          </div>
        </div>
    </section>
  );
}