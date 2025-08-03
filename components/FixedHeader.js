import { useEffect, useRef } from "react";
import Icons from './Icons';

export default function FixedHeader() {

  const picRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const iconsRef = useRef();

  useEffect(() => {
    (async () => {

      const { gsap } = await import('gsap');

      gsap.from(picRef.current, {
        opacity: 0,
        y: -window.innerHeight,
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
        y: window.innerHeight,
        duration: 3,
        ease: "power4.inOut"
      });

    })();
  }, []);


  return (
    <header className="fixed inset-0 z-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-500 text-white">
      <img ref={picRef} src="/images/Steve.jpeg" alt="Steve Suhr Profile Image" className="w-64 rounded-xl" />
      <h1 ref={nameRef} className="text-5xl font-bold mt-4 mx-10">Steve Suhr</h1>
      <p ref={titleRef} className="my-4 text-xl">Senior Software Engineer</p>
      <div ref={iconsRef} className="flex">
        <Icons />
      </div>
    </header>
  );
}