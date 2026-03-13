import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <img src={madMonkeyLogo} alt="Mad Monkey" className="h-8 sm:h-10" />
        <button className="bg-accent text-foreground px-4 sm:px-5 py-2 rounded-xl font-display text-xs sm:text-sm uppercase tracking-wider shadow-[0_3px_0_0_hsl(var(--mad-dark))] hover:shadow-[0_1px_0_0_hsl(var(--mad-dark))] hover:translate-y-[2px] transition-all border-2 border-foreground">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}
