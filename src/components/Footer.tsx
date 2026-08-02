import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact Us', href: '#contact-us' },
    { name: 'Press Kit', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-luxury-platinum/50 py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/assets/logo1.png"
              alt="Airown Logo"
              className="h-10 w-auto object-contain mb-3"
            />
            <p className="text-sm font-light text-luxury-titanium tracking-widest uppercase">
              MOVING TO FUTURE
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold uppercase tracking-widest text-luxury-graphite hover:text-luxury-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Top Scroll */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-luxury-silver/40 flex items-center justify-center text-luxury-graphite hover:text-luxury-blue hover:bg-white hover:shadow-sm border border-transparent hover:border-luxury-platinum/50 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-luxury-silver/40 flex items-center justify-center text-luxury-graphite hover:text-luxury-blue hover:bg-white hover:shadow-sm border border-transparent hover:border-luxury-platinum/50 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-luxury-silver/40 flex items-center justify-center text-luxury-graphite hover:text-luxury-blue hover:bg-white hover:shadow-sm border border-transparent hover:border-luxury-platinum/50 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <button
              onClick={handleScrollToTop}
              className="w-9 h-9 rounded-full bg-luxury-dark flex items-center justify-center text-white hover:bg-luxury-blue transition-colors duration-300 shadow-sm"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-platinum/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-luxury-titanium font-semibold uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} Airown Technologies Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-luxury-dark transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-dark transition-colors duration-300">Terms of Airown</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
