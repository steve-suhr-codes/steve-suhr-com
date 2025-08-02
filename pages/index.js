import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-500 text-white z-0">
        <p><img src="/images/Steve.jpeg" alt="Steve Suhr Profile Image" className="w-64 rounded-xl" /></p>
        <h1 className="text-5xl font-bold mt-4 mx-10">Steve Suhr</h1>
        <p className="mt-4 text-xl">Senior Software Engineer</p>
      </header>
      <main className="bg-gray-100 mt-[100vh] pt-1 relative z-10 ">
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
      </main>

    </div>
  );
}