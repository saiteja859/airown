import { motion } from 'framer-motion';
import { Target, Zap, Clock, Leaf, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  const metrics = [
    { label: 'Autonomous Flights', value: '10+', icon: Zap, color: 'text-luxury-blue' },
    { label: 'Avg. Delivery Speed', value: '8.4 Mins', icon: Clock, color: 'text-luxury-blue' },
    { label: 'Carbon Emissions', value: '0.00%', icon: Leaf, color: 'text-luxury-blue' },
    { label: 'System Reliability', value: '99.99%', icon: ShieldCheck, color: 'text-luxury-blue' },
  ];

  return (
    <section id="about-us" className="relative py-16 md:py-20 overflow-hidden bg-gray-50 border-b border-gray-200">

      {/* Decorative gradients */}
      <div className="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-radial-gradient from-luxury-platinum/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Tag */}
        <div className="text-center mb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-luxury-blue mb-2 block">
            Core Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-luxury-dark">
            Our Mission & <span className="font-semibold text-gradient-metallic">System Telemetry</span>
          </h2>
        </div>

        {/* Combined Mission & Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full bg-white rounded-[32px] border-2 border-gray-300 shadow-sm p-8 md:p-12 transition-all duration-300 hover:border-luxury-blue"
        >
          {/* Mission Content */}
          <div className="flex flex-col items-center text-center mb-10 pb-8 border-b border-gray-200">
            <div className="mb-4 p-3.5 rounded-2xl bg-luxury-blue/5 border-2 border-luxury-blue/30 text-luxury-blue flex items-center justify-center">
              <Target size={24} strokeWidth={2} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-luxury-dark mb-4 tracking-tight leading-snug">
              We Don't Just Deliver Products. We Deliver the Future.
            </h3>

            <p className="text-sm sm:text-base font-light text-luxury-graphite leading-relaxed max-w-xl">
              Our mission is to establish the world's most advanced autonomous aerial logistics system. By elevating transportation to the skies, we remove street congestion, bypass infrastructure limits, and make delivery instantaneous, quiet, safe, and effortless.
            </p>
          </div>

          {/* Stats / Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`mb-2 p-2 rounded-xl bg-gray-50 border border-gray-200 ${metric.color}`}>
                    <Icon size={14} strokeWidth={2} />
                  </div>
                  <span className="text-lg md:text-xl font-light text-luxury-dark tracking-tight font-sans">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-luxury-titanium mt-0.5">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
