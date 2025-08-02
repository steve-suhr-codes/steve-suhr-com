import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;

    (async () => {
      // Dynamically import only on the client
      const gsapModule = await import('gsap');
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;

      gsapModule.gsap.registerPlugin(ScrollTrigger);

      ctx = gsapModule.gsap.context(() => {
        gsapModule.gsap.fromTo(
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
      className="my-20 p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      {children}
    </div>
  );
}
