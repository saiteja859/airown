import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Order from Your Mobile',
    desc: 'Browse nearby restaurants, customize your meal, and place your order instantly through the Airown mobile app.',
    detail: 'Order placed successfully.',
    image: '/assets/1.png',
  },
  {
    num: '02',
    icon: Send,
    title: 'Drone Picks Up Your Order',
    desc: 'Once the restaurant prepares your meal, an Airown drone securely collects the package and begins its delivery journey.',
    detail: 'Order picked up and en route.',
    image: '/assets/2.png',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Delivered to Your Location',
    desc: 'The drone navigates to your selected destination and safely delivers your order with precision and real-time tracking.',
    detail: 'Delivery completed successfully.',
    image: '/assets/3.png',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

export default function HowItWorks() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (activeSlide >= steps.length - 1) return;
    setDirection(1);
    setActiveSlide((prev) => prev + 1);
  };

  const goPrev = () => {
    if (activeSlide <= 0) return;
    setDirection(-1);
    setActiveSlide((prev) => prev - 1);
  };

  const step = steps[activeSlide];
  const Icon = step.icon;

  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-20 overflow-hidden border-b border-gray-200 bg-gradient-to-b from-gray-50 via-luxury-goldLight/10 to-gray-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-1 block">
            The Journey
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-luxury-dark">
            How Delivery{' '}
            <span className="font-semibold text-gradient-metallic">Takes Flight</span>
          </h2>
        </div>

        {/* Slide area + Arrow buttons */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={goPrev}
            disabled={activeSlide === 0}
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-sm transition-all duration-200 hover:border-luxury-gold hover:text-luxury-gold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Slide Viewport */}
          <div className="flex-1 relative overflow-hidden rounded-3xl h-[550px] sm:h-[420px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                {/* Unified Card */}
                <div
                  className={`h-full bg-white rounded-3xl border-2 border-gray-300 shadow-sm overflow-hidden flex flex-col sm:flex-row ${activeSlide % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                >
                  {/* Image — compact portrait */}
                  <div className="w-full h-[200px] sm:h-full sm:w-[280px] flex-shrink-0">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 px-6 py-6 sm:px-12 sm:py-12 flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold mb-2 block">
                      Step {step.num}
                    </span>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-luxury-graphite">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-luxury-dark mb-3 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-light text-luxury-graphite leading-relaxed mb-5 max-w-md">
                      {step.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-luxury-graphite w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold animate-pulse" />
                      {step.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            disabled={activeSlide === steps.length - 1}
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-sm transition-all duration-200 hover:border-luxury-gold hover:text-luxury-gold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Pill progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > activeSlide ? 1 : -1); setActiveSlide(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-8 bg-luxury-gold' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
