import { useEffect, useRef } from 'react';

export default function SingleExperience({ children, company, location, title, dates }) {
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
    <div
      ref={ref}
      className="my-16 p-8 bg-white rounded-xl shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl font-bold text-gray-900">{company}</h2>
        <span className="text-gray-600">{location}</span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <span className="text-gray-500">{dates}</span>
      </div>

      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </div>
  );
}
