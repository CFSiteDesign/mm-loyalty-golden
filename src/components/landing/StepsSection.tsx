import { motion } from 'motion/react';
import { Search, Hand, Trophy } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const steps = [
  { step: "01", icon: Search, title: "Scope the Offers", desc: "Browse our partner spots in your current location.", color: "bg-mad-blue" },
  { step: "02", icon: Hand, title: "Flex the Wrist", desc: "Show your Mad Monkey Loyalty Wristband before you order or pay.", color: "bg-mad-purple" },
  { step: "03", icon: Trophy, title: "Claim the Win", desc: "Walk away with exclusive discounts, freebies, and members-only deals.", color: "bg-mad-green" },
];

export default function StepsSection() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden relative">
      {/* Side image on larger screens */}
      <img
        src={heroBackground}
        alt=""
        className="hidden lg:block absolute right-0 top-0 h-full w-auto max-w-[40%] object-cover object-center pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeIn} className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-5xl md:text-7xl text-foreground mb-2">How to Live the Dream</h2>
          <p className="text-xs sm:text-lg text-muted-foreground font-medium">
            Getting your perks is easier than finding the hostel bar.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-12 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 border-t-4 border-dashed border-border z-0" />

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center"
            >
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-mad-purple/30 to-transparent z-0" />
              )}

              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24 ${item.color} text-primary-foreground rounded-full flex items-center justify-center font-display text-lg sm:text-xl md:text-4xl flex-shrink-0 shadow-xl border-4 border-card relative z-10`}>
                {item.step}
              </div>

              <div className="flex-1 pb-8 md:pb-0">
                <h3 className="text-lg sm:text-xl md:text-3xl mb-1 md:mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-lg font-medium max-w-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
