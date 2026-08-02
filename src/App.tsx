import { useEffect } from 'react';
import Lenis from 'lenis';
import FloatingNavbar from './components/FloatingNavbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Technologies from './components/Technologies';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FBFBFC] text-[#121212] overflow-x-hidden">
      <FloatingNavbar />
      <main className="relative z-10">
        <HeroSection />
        <Technologies />
        <HowItWorks />
        <WhyChooseUs />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
