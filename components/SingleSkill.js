import { useEffect, useRef } from 'react';

export default function AnimatedSection({ title, children }) {
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
    <div ref={ref} className="my-10 p-4 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="">
        <h2 className="items-center justify-center pb-2 text-3xl font-semibold border-b border-black">{title}</h2>
        <div className="pl-2 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
