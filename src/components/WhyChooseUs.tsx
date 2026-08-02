import { motion } from 'framer-motion';
import { PlaneTakeoff, Compass, Leaf, Eye, Lock, RefreshCw, Cpu, Wind } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: PlaneTakeoff,
      title: 'Ultra-Fast Trajectories',
      desc: 'Slicing through airspace at 80 km/h. Direct flights that bypass traditional street grids entirely.',
    },
    {
      icon: Leaf,
      title: '100% Ecological',
      desc: 'Driven by battery power systems. Zero tailpipe emissions and zero contribution to urban pollution.',
    },
    {
      icon: Compass,
      title: 'Precision RTK Navigation',
      desc: 'Sub-centimeter landing accuracy powered by local differential GPS antennas.',
    },
    {
      icon: Eye,
      title: 'Real-Time Tracking',
      desc: 'Watch your delivery glide across local 3D skyway corridors in real time in our application.',
    },
    {
      icon: Lock,
      title: 'Secure Vault Lock',
      desc: 'Aerospace lock systems that release the package capsule only to the receiver\'s facial verification.',
    },
    {
      icon: Wind,
      title: 'Quiet Acoustics',
      desc: 'Propellers custom optimized to generate silent airflows, keeping city sky noise levels minimal.',
    },
    {
      icon: RefreshCw,
      title: 'Redundant Safeguards',
      desc: 'Features backup motors, alternate flight paths, and dual-system failsafes for complete safety.',
    },
    {
      icon: Cpu,
      title: 'Luxury Architecture',
      desc: 'Aerospace carbon fiber, custom-milled platinum frames, and advanced optic arrays.',
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-16 md:py-20 bg-white overflow-hidden border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-luxury-blue mb-2 block">
            Why Airown
          </span>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-luxury-dark leading-tight">
            The Pinnacle of <span className="font-semibold text-gradient-metallic">Aerospace Delivery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                className="group bg-white rounded-3xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-luxury-blue flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 p-3 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-300 text-luxury-blue transition-colors duration-300">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-base font-semibold text-luxury-dark mb-2 group-hover:text-luxury-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm font-light text-luxury-graphite leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-bold tracking-widest text-luxury-titanium uppercase">
                  CLASS 1 AVIONICS
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
