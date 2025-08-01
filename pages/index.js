import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    // <div>Hello World</div>
    <div className="bg-gray-100 min-h-screen">
      <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <h1 className="text-5xl font-bold">Wix-Style Scroll Animation Demo</h1>
        <p className="mt-4 text-xl">Built with Next.js, Tailwind CSS, and GSAP</p>
      </header>

      <AnimatedSection>
        <h2 className="text-3xl font-semibold mb-2">Beautifully Responsive</h2>
        <p>Tailwind CSS makes it easy to build fully responsive layouts without leaving your HTML.</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-semibold mb-2">Scroll-Triggered Animations</h2>
        <p>GSAP + ScrollTrigger give you smooth, performant animations triggered exactly when you want.</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-semibold mb-2">Modern Developer Experience</h2>
        <p>With Next.js and Tailwind, development is fast, fun, and scalable for the future.</p>
      </AnimatedSection>
    </div>
  );
}