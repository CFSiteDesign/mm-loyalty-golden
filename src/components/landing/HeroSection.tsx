import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import goldenTicketHero from '@/assets/golden-ticket-hero.png';
import PatternOverlay from './PatternOverlay';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <PatternOverlay className="opacity-15" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mad-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-mad-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.img
          src={goldenTicketHero}
          alt="The Golden Ticket (On Your Wrist) - Show The Band. Score The Goods."
          className="w-[24rem] sm:w-[36rem] md:w-[44rem] lg:w-[54rem] mx-auto -mb-4 sm:-mb-8 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.7, type: "spring" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto px-2 sm:px-0"
        >
          <p className="text-[13px] sm:text-lg md:text-xl text-foreground/80 leading-[1.7] sm:leading-relaxed font-medium tracking-wide text-center">
            Welcome to the Mad Monkey Loyalty Program, your all-access pass to the best of our backyard.
          </p>
          <p className="text-[13px] sm:text-lg md:text-xl text-foreground/80 leading-[1.7] sm:leading-relaxed font-medium tracking-wide text-center mt-3 sm:mt-2">
            We've teamed up with our favorite local legends to make sure that as long as you're wearing that wristband, you're treated like royalty <span className="text-muted-foreground italic">(the fun kind, not the stuffy kind).</span>
          </p>
          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-transparent to-mad-pink/60" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-mad-purple whitespace-nowrap">
              No points · No apps · Just show the band
            </p>
            <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-l from-transparent to-mad-pink/60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex justify-center"
        >
          <a href="https://madmonkeyhostels.com/madloyalty" target="_blank" rel="noopener noreferrer" className="gradient-mad text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
            Sign Up For Free <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
