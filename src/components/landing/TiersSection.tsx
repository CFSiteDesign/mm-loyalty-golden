import { motion } from 'motion/react';
import bandMember from '@/assets/band-member.svg';
import bandMad from '@/assets/band-mad.svg';
import bandMadder from '@/assets/band-madder.svg';
import bandMaddest from '@/assets/band-maddest.svg';
import PatternOverlay from './PatternOverlay';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const bands = [
  { img: bandMember, label: "Member Monkey" },
  { img: bandMad, label: "Mad Monkey" },
  { img: bandMadder, label: "Madder Monkey" },
  { img: bandMaddest, label: "Maddest Monkey" },
];

export default function TiersSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden relative">
      <PatternOverlay className="opacity-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div {...fadeIn} className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-foreground mb-3">Level Up Your Wristband</h2>
          <p className="text-base sm:text-xl text-muted-foreground font-medium">Stay longer, unlock more. Each tier drops bigger perks and wilder hookups.</p>
        </motion.div>

        <div className="space-y-3 sm:space-y-5">
          {bands.map((band, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={band.img}
                alt={`${band.label} wristband`}
                className="w-full h-auto hover:scale-[1.02] transition-transform cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
