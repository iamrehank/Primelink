import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-surface-container shadow-sm shadow-primary/5">
      <nav className="flex justify-between items-center px-4 md:px-8 py-3 max-w-[1280px] mx-auto" aria-label="Main navigation">

        {/* Logo — desktop uses logo.png, mobile uses nav_logo.png */}
        <Link to="/" id="logo" aria-label="Primelink Marketing Home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Primelink Marketing Solution LLC"
            width={160}
            height={40}
            className="hidden md:block h-15 w-auto object-contain"
          />
          <img
            src="/nav_logo.png"
            alt="Primelink Marketing Solution LLC"
            width={40}
            height={40}
            className="block md:hidden h-15 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-${item.label.toLowerCase()}`}
                aria-current={isActive ? 'page' : undefined}
                className={`text-label-bold transition-colors relative pb-1 ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:block bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-label-bold hover:opacity-90 transition-opacity"
          id="btn-get-started"
          onClick={() => navigate('/contact')}
          aria-label="Get started with Primelink"
        >
          Get Started
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-surface-container"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`text-left px-4 py-3 rounded-lg text-label-bold transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNav('/contact')}
                className="mt-2 bg-primary-container text-on-primary px-6 py-3 rounded-lg text-label-bold hover:opacity-90 transition-opacity text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
