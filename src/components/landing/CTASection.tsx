import { motion } from 'motion/react';
import ctaBackground from '@/assets/cta-background.jpg';
import PatternOverlay from './PatternOverlay';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-mad-dark">
      <PatternOverlay className="opacity-10" />
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Backpackers with wristbands at a tropical beach party"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mad-dark via-mad-dark/80 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-6xl md:text-8xl text-mad-light mb-3 sm:mb-6"
        >
          READY TO WEAR THE BAND?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-xl md:text-2xl text-mad-light/70 font-medium mb-6 sm:mb-12"
        >
          No points. No apps. Just show the band and get the hookup.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gradient-mad text-primary-foreground px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,0,214,0.3)] inline-block no-underline"
          href="https://madmonkeyhostels.com/madloyalty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up For Free
        </motion.a>
      </div>
    </section>
  );
}
