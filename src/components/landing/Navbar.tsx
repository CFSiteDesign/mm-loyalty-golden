import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import madMonkeyLogo from '@/assets/madmonkey-logo.svg';

const navLinks = [
  
  { label: 'Our Story', href: 'https://madmonkeyhostels.com/our-story' },
  { label: 'Sleep', href: 'https://madmonkeyhostels.com/sleep' },
  { label: 'Experience', href: 'https://madmonkeyhostels.com/experience' },
  { label: 'Mad Loyalty', href: 'https://madmonkeyhostels.com/madloyalty' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <a href="https://madmonkeyhostels.com" target="_blank" rel="noopener noreferrer">
          <img src={madMonkeyLogo} alt="Mad Monkey" className="h-8 sm:h-10" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full text-sm font-semibold transition-colors text-foreground/70 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://madmonkeyhostels.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
          >
            Login
          </a>
          <a
            href="https://madmonkeyhostels.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <a href="https://madmonkeyhostels.com/login" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground/70">Login</a>
            <a href="https://madmonkeyhostels.com/book" target="_blank" rel="noopener noreferrer" className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-bold text-center">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
