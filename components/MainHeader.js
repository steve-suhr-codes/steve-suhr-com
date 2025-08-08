import { useEffect, useRef } from "react";
import Icons from './Icons';

export default function FixedHeader() {

  const picRef = useRef(null);
  const picScrollRef = useRef(null);
  const nameRef = useRef(null);
  const nameScrollRef = useRef(null);
  const titleRef = useRef(null);
  const titleScrollRef = useRef(null);
  const iconsRef = useRef(null);
  const iconsScrollRef = useRef(null);

  useEffect(() => {
    (async () => {

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // On Load Animations
      gsap.from(picRef.current, {
        opacity: 0,
        y: -window.innerHeight / 2,
        duration: 3,
        ease: "power4.inOut"
      });

      gsap.from(nameRef.current, {
        opacity: 0,
        x: -window.innerWidth / 2,
        duration: 3,
        ease: "power4.inOut"
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        x: window.innerWidth / 2,
        duration: 3,
        ease: "power4.inOut"
      });

      gsap.from(iconsRef.current, {
        opacity: 0,
        y: window.innerHeight / 2,
        duration: 3,
        ease: "power4.inOut"
      });

      // Background Parallax Animation
      gsap.fromTo(
        "#header-background",         // TARGET: background image div
        { y: "0%" },
        { 
          y: "-50%",            // move upward slower than the page
          ease: "none",
          scrollTrigger: {
            trigger: "#header-container", // TRIGGER: entire section
            start: "top bottom",  // start when section enters viewport
            end: "bottom top",    // end when section leaves viewport
            scrub: true
          }
        }
      );

      // Fade Out Animations
      gsap.to(
        picScrollRef.current,         
        { 
          y: "-50%",            
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#header-container", 
            start: "bottom 85%",  
            end: "bottom 70%",    
            scrub: true
          }
        }
      );

      gsap.to(
        nameScrollRef.current,         
        { 
          y: "-50%",            
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#header-container", 
            start: "bottom 85%",  
            end: "bottom 65%",    
            scrub: true
          }
        }
      );

      gsap.to(
        titleScrollRef.current,         
        { 
          y: "-50%",            
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#header-container", 
            start: "bottom 80%",  
            end: "bottom 60%",    
            scrub: true
          }
        }
      );

      gsap.to(
        iconsScrollRef.current,         
        { 
          y: "-50%",            
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#header-container", 
            start: "bottom 75%",  
            end: "bottom 55%",    
            scrub: true
          }
        }
      );

    })();
  }, []);

  useEffect(() => {

    (async () => {

      const { gsap } = await import('gsap');
      const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");

      gsap.registerPlugin(ScrollToPlugin);

      const arrow = document.getElementById("scroll-arrow");
      const nextSection = document.getElementById("hello-section");

      if (arrow && nextSection) {
        const handleClick = () => {
          gsap.to(
            window,         
            { 
              duration: 2,
              scrollTo: "#hello-section",
              ease: "power2.inOut",
            }
          );
        };
        arrow.addEventListener("click", handleClick);

        // Cleanup on unmount
        return () => arrow.removeEventListener("click", handleClick);
      }

    })();
  }, []);

  return (
    <div id="header-container" className="relative h-[100vh] z-0">
      <div 
        id="header-background" 
        className="absolute inset-0 h-[200%] bg-[url('/images/building-background.jpeg')] bg-cover bg-center z-5"
      ></div>
      <div 
        className="absolute inset-0 h-full z-6 bg-gradient-to-r from-blue-900 to-blue-500 opacity-75"
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">

        <div ref={picScrollRef}>
          <img ref={picRef} src="/images/Steve.jpeg" alt="Steve Suhr Profile Image" className="w-64 rounded-xl" />
        </div>
        <div ref={nameScrollRef}>
          <h1 ref={nameRef} className="text-4xl sm:text-5xl font-bold mt-4 mx-10">Steve Suhr</h1>
        </div>
        <div ref={titleScrollRef}>
          <p ref={titleRef} className="my-4 text-xl">Senior Software Engineer</p>
        </div>
        <div ref={iconsScrollRef}>
          <div ref={iconsRef} className="flex">
            <Icons />
          </div>
        </div>

        <div id="scroll-arrow" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </div>
  );
}