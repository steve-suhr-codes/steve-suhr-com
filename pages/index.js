import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';  
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    (async () => {

      const gsapModule = await import('gsap');
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;

      gsapModule.gsap.registerPlugin(ScrollTrigger);

      // Pin the second section
      ScrollTrigger.create({
        trigger: "#pinned-section",
        start: "top top",
        pin: true,
        pinSpacing: false
      });

    })();
  }, []);  
  
  
  return (
    <div className="relative">
      
      <Header />

      <div className="relative h-screen mt-[100vh]">

        <section className="absolute inset-0 z-20 bg-gray-100">
          <AnimatedSection>
            <div className="h-full bg-yellow-500">
              <h2 className="text-center w-full text-3xl font-semibold mb-2">Hello! I'm Steve</h2>
              <p className="text-center">I'm a professional software developer with nearly two decades of experience. Most of my expertise is in backend development with a focus in C# and MSSQL. However, I am a full stack developer with experience in HTML, CSS, and JavaScript as well. My projects have been focused on APIs, Web Development, and Web Scraping. I have been involved in hosting my work in the cloud using both Azure and AWS.</p>
            </div>
          </AnimatedSection>
        </section>

        <section className="absolute inset-0 z-10 h-screen w-full bg-blue-500" id="pinned-section">
          <div className="w-full h-full flex justify-center items-center text-white text-3xl">
            Testing TWO
          </div>
        </section>

      </div>

      <div className="relative z-30 h-screen">
      </div>

      {/* <main>

        <section className="bg-gray-100 mt-[100vh] h-screen relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold mb-2">Hello! I'm Steve</h2>
            <p>I'm a professional software developer with nearly two decades of experience. Most of my expertise is in backend development with a focus in C# and MSSQL. However, I am a full stack developer with experience in HTML, CSS, and JavaScript as well. My projects have been focused on APIs, Web Development, and Web Scraping. I have been involved in hosting my work in the cloud using both Azure and AWS.</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-semibold mb-2">Scroll-Triggered Animations</h2>
            <p>GSAP + ScrollTrigger give you smooth, performant animations triggered exactly when you want.</p>
          </AnimatedSection>

          <div className="pb-40">
            <AnimatedSection>
              <h2 className="text-3xl font-semibold mb-2">Modern Developer Experience</h2>
              <p>With Next.js and Tailwind, development is fast, fun, and scalable for the future.</p>
            </AnimatedSection>
          </div>
        </section>

      </main> */}
    </div>
  );
}