import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext.tsx';
import { useOwnerImage } from '../../context/OwnerImageContext.tsx';
import { OxygenLogo } from '../ui/OxygenLogo.tsx';
import { Menu, X, ArrowRight, Phone, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { ownerImage } = useOwnerImage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Membership', path: '/membership' },
    { label: 'Supplements', path: '/supplements', highlight: true },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/92 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - address removed from navbar as requested */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg p-1 cursor-pointer"
            aria-label="Oxygen Fitness Home"
          >
            <div className="h-9 sm:h-10 text-white flex items-center transition-transform group-hover:scale-102 duration-200">
              <OxygenLogo className="h-8 sm:h-9 w-auto" />
            </div>
          </button>

          {/* Desktop Navigation (large screens 1024px+) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : link.highlight
                      ? 'text-zinc-200 hover:text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-200 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions: Phone number and Join CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:07380303271"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-zinc-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer"
              title="Call Oxygen Fitness Kailahat"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>073803 03271</span>
            </a>

            <button
              onClick={() => handleLinkClick('/join')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-neutral-950 text-sm font-bold tracking-tight transition-all duration-200 shadow-md hover:shadow-zinc-300/10 active:scale-[0.98] cursor-pointer"
            >
              <span>Join from ₹800/mo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile & Tablet Actions (<1024px) */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-2.5">
            {/* Phone button: full number on tablet/large mobile, icon on small mobile */}
            <a
              href="tel:07380303271"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-white text-xs font-medium"
              title="Call Oxygen Fitness Kailahat"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>073803 03271</span>
            </a>
            <a
              href="tel:07380303271"
              className="sm:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-white"
              title="Call Oxygen Fitness"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleLinkClick('/join')}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-200 hover:bg-white text-neutral-950 text-xs font-bold transition-colors shadow-sm"
            >
              Join ₹800
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded-lg bg-neutral-900 border border-neutral-800 cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-xl border-b border-neutral-800 px-4 sm:px-6 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Tablet & Mobile navigation links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white font-semibold border border-neutral-700'
                      : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[10px] uppercase font-bold bg-neutral-800 text-zinc-300 px-2 py-0.5 rounded border border-neutral-700">
                      Store
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 space-y-2.5">
            {/* Owner Contact Preview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 shrink-0">
                  <img src={ownerImage} alt="Arpit Singh" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-bold text-white block text-xs">Arpit Singh</span>
                  <span className="text-[10px] text-zinc-400">Owner & Head Coach · Kailahat</span>
                </div>
              </div>
              <a
                href="https://instagram.com/oygenfitnessofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1.5 rounded transition-colors self-start sm:self-auto"
              >
                <Instagram className="w-3.5 h-3.5 text-zinc-400" />
                <span>@oygenfitnessofficial</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <a
                href="tel:07380303271"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>Call Club: 073803 03271</span>
              </a>

              <button
                onClick={() => handleLinkClick('/join')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-neutral-950 font-bold text-xs tracking-tight shadow-md cursor-pointer"
              >
                <span>Join from ₹800/mo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
