import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [bgImage, setBgImage] = useState("url('/assets/hero.png')");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgImage("url('/assets/mobilehero1.png')");
      } else {
        setBgImage("url('/assets/hero1.png')");
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-screen h-screen flex flex-col items-center overflow-hidden bg-white border-b border-gray-200"
      style={{
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      {/* Responsive layout: split top/bottom on mobile, grouped at bottom on desktop */}
      <div className="relative z-10 w-full h-full max-w-4xl px-6 flex flex-col justify-between sm:justify-end sm:gap-4 items-center text-center pt-28 pb-10 sm:pt-0">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-luxury-dark leading-tight bg-white/40 backdrop-blur-[2px] rounded-2xl px-6 py-2 border border-white/40"
        >
          The Future Doesn't Drive.
          <br />
          <span className="font-semibold text-gradient-gold">It Flies.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-medium text-luxury-graphite max-w-md leading-relaxed bg-white/60 backdrop-blur-[2px] rounded-xl p-3 border border-gray-300"
        >
          Airown bypasses street congestion with direct-to-destination trajectories designed for the modern world.
        </motion.p>

      </div>
    </section>
  );
}
