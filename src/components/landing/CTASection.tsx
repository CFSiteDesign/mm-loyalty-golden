import { motion } from 'motion/react';
import ctaBackground from '@/assets/cta-background.jpg';
import PatternOverlay from './PatternOverlay';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-mad-blue min-h-[60vh] flex items-center justify-center">
      <PatternOverlay className="opacity-10" />
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Backpackers with wristbands at a tropical beach party"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-mad-blue/30 mix-blend-multiply" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-8xl text-primary-foreground mb-4 sm:mb-6 drop-shadow-lg"
        >
          READY TO WEAR THE BAND?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-primary-foreground/80 font-medium mb-8 sm:mb-12"
        >
          No points. No apps. Just show the band and get the hookup.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-accent text-foreground font-display text-xl sm:text-2xl md:text-3xl px-10 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-[0_8px_0_0_hsl(var(--mad-dark))] hover:shadow-[0_4px_0_0_hsl(var(--mad-dark))] hover:translate-y-[4px] transition-all border-4 border-foreground uppercase tracking-wider"
        >
          Sign Up For Free
        </motion.button>
      </div>
    </section>
  );
}
