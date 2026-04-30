import { motion } from 'motion/react';

export type Page = 'home' | 'services' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface-container shadow-sm shadow-primary/5">
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1280px] mx-auto">
        <div 
          className="text-xl font-extrabold tracking-tight text-primary cursor-pointer"
          onClick={() => onPageChange('home')}
          id="logo"
        >
          Primelink Marketing
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-label-bold transition-colors relative pb-1 ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <button 
          className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-label-bold hover:opacity-90 transition-opacity"
          id="btn-get-started"
          onClick={() => onPageChange('contact')}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
