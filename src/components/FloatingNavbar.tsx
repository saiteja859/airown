import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState('');
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setPastHero(window.scrollY > heroBottom - 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 transition-all duration-500">
      <div
        className={`w-full max-w-4xl rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${pastHero || menuOpen
          ? 'bg-white/70 backdrop-blur-lg border border-white/60 shadow-lg shadow-black/5'
          : 'bg-transparent border-transparent shadow-none'
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/assets/logo2.png"
            alt="Airown Logo"
            className="h-16 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden sm:flex items-center gap-1 md:gap-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === item.href
                ? 'text-luxury-dark bg-luxury-gold/10 font-bold border border-luxury-gold/30'
                : pastHero
                  ? 'text-luxury-dark hover:text-luxury-dark hover:bg-gray-100/60'
                  : 'text-luxury-graphite hover:text-luxury-dark hover:bg-white/10'
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex sm:hidden p-2 rounded-full border border-gray-300 bg-white/95 text-luxury-dark hover:border-luxury-gold transition-all duration-300`}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="w-full max-w-4xl mt-2 bg-white/95 backdrop-blur-lg border border-white/60 shadow-lg rounded-3xl p-4 flex flex-col gap-1 sm:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleScrollTo(e, item.href);
                  setMenuOpen(false);
                }}
                className={`w-full text-center py-3 text-sm font-semibold rounded-2xl transition-all duration-300 ${activeSection === item.href
                  ? 'text-luxury-dark bg-luxury-gold/10 border border-luxury-gold/30'
                  : 'text-luxury-graphite hover:text-luxury-dark hover:bg-gray-100/60'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
