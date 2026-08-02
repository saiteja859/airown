import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Compass, BatteryCharging, Zap, Gauge, Lock, Cpu, Eye, CloudRain, Radio, Anchor, Layers, Check, X } from 'lucide-react';

interface TechFeature {
  id: string;
  icon: any;
  title: string;
  desc: string;
}

export default function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLImageElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const featuresLeft: TechFeature[] = [
    {
      id: 'flight-sys',
      icon: Cpu,
      title: 'Autonomous Flight System',
      desc: 'Triple-redundant computers tracking flight vectors.',
    },
    {
      id: 'gps',
      icon: Compass,
      title: 'GPS Precision',
      desc: 'RTK satellite arrays for sub-centimeter accuracy.',
    },
    {
      id: 'payload',
      icon: Layers,
      title: 'High Payload Capacity',
      desc: 'Active cargo stabilizer carrying up to 4.5kg.',
    },
    {
      id: 'endurance',
      icon: Gauge,
      title: 'Long Flight Endurance',
      desc: 'Aerodynamic battery density supplying 45km range.',
    },
    {
      id: 'obstacle',
      icon: Eye,
      title: 'Obstacle Detection',
      desc: '360-degree dual LiDAR scanning for obstacles.',
    },
    {
      id: 'lock',
      icon: Lock,
      title: 'Secure Delivery Lock',
      desc: 'Biometric locked vault releasing on verified arrival.',
    },
  ];

  const featuresRight: TechFeature[] = [
    {
      id: 'carbon-body',
      icon: ShieldCheck,
      title: 'Carbon Fiber Body',
      desc: 'Aerospace-grade autoclaved carbon strength structure.',
    },
    {
      id: 'motors',
      icon: Zap,
      title: 'High Efficiency Motors',
      desc: 'Brushless low-noise high-torque motor propulsion.',
    },
    {
      id: 'landing',
      icon: Anchor,
      title: 'Smart Landing System',
      desc: 'Optic and ultrasound touchdown surface scanning.',
    },
    {
      id: 'weather',
      icon: CloudRain,
      title: 'Weather Resistant Design',
      desc: 'Sealed IP67 envelope withstanding rain & storms.',
    },
    {
      id: 'battery',
      icon: BatteryCharging,
      title: 'Modular Battery System',
      desc: 'Pneumatic fast-swap battery locking terminals.',
    },
    {
      id: 'monitoring',
      icon: Radio,
      title: 'Real-Time Flight Monitoring',
      desc: 'Encrypted status data streams direct to logistics control.',
    },
  ];

  const comparison = [
    { metric: 'Average Transit Time', road: '45 - 60 Mins (Road Traffic)', sky: '8 - 12 Mins (Direct Flight)' },
    { metric: 'Local Carbon Footprint', road: '120g CO2 per km', sky: '0.00g CO2 (100% Electric)' },
    { metric: 'Traffic Congestion Delay', road: 'High & Unpredictable', sky: 'Zero (Sky Corridor)' },
    { metric: 'Cargo Temperature Hold', road: 'Passive Thermal Bags', sky: 'Active Vacuum Carbon Vault' },
  ];

  return (
    <section id="technologies" className="relative py-16 md:py-20 bg-white overflow-hidden border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-2 block">
            Hardware Engineering
          </span>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-luxury-dark leading-tight">
            An Uncompromising <span className="font-semibold text-gradient-metallic">Masterpiece of Tech</span>
          </h2>
        </div>

        {/* Symmetric 3-Column Layout: Text - Drone (Scaled Down) - Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
          
          {/* Left Column (6 features, width 4/12) */}
          <div className="lg:col-span-4 space-y-3.5 order-2 lg:order-1">
            {featuresLeft.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="p-3.5 rounded-2xl border-2 border-gray-300 bg-white shadow-sm transition-all duration-300 hover:border-luxury-gold"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-300 text-luxury-gold">
                      <Icon size={14} strokeWidth={2} />
                    </div>
                    <h4 className="font-bold text-luxury-dark text-xs leading-tight">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-[10px] font-light text-luxury-graphite leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Drone (Decreased footprint, width 4/12) */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-4 relative flex items-center justify-center h-[280px] sm:h-[350px] order-1 lg:order-2 rounded-3xl bg-gray-50 border-2 border-gray-300 shadow-sm p-4 mx-auto w-full max-w-[320px] sm:max-w-full"
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                ref={droneRef}
                src="/assets/drone.png"
                alt="Airown Drone"
                className="max-h-[190px] sm:max-h-[220px] w-auto object-contain select-none pointer-events-none drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Column (6 features, width 4/12) */}
          <div className="lg:col-span-4 space-y-3.5 order-3">
            {featuresRight.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="p-3.5 rounded-2xl border-2 border-gray-300 bg-white shadow-sm transition-all duration-300 hover:border-luxury-gold"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-300 text-luxury-gold">
                      <Icon size={14} strokeWidth={2} />
                    </div>
                    <h4 className="font-bold text-luxury-dark text-xs leading-tight">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-[10px] font-light text-luxury-graphite leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Comparative Performance Matrix */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border-2 border-gray-300 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-widest block mb-1">
              PERFORMANCE BENCHMARK
            </span>
            <h3 className="text-xl font-semibold text-luxury-dark">
              Traditional Ground Courier vs. Airown Skyway
            </h3>
          </div>

          <div className="divide-y divide-gray-300">
            {comparison.map((item, idx) => (
              <div key={idx} className="py-3.5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <span className="text-xs font-bold text-luxury-dark">{item.metric}</span>
                <div className="flex items-center gap-2 text-xs text-red-600 font-light">
                  <X size={14} />
                  <span>{item.road}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-luxury-gold font-semibold">
                  <Check size={14} />
                  <span>{item.sky}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
