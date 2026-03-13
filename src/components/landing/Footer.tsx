import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

export default function Footer() {
  return (
    <footer className="bg-mad-dark text-mad-light/50 py-10 sm:py-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 brightness-0 invert mb-4" />
          <p className="font-medium uppercase tracking-widest text-sm mb-3 text-mad-light/70">Mad Monkey Hostels</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Mad Monkey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
