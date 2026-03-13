import { motion } from 'motion/react';
import {
  Sparkles, Scissors, Utensils, Palmtree, Dumbbell, ShoppingBag,
} from 'lucide-react';
import PatternOverlay from './PatternOverlay';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const categories = [
  { icon: Sparkles, label: "Recovery Zones", desc: "Spas & Massage Studios", color: "bg-mad-pink" },
  { icon: Scissors, label: "Fresh Fades", desc: "Barber Shops", color: "bg-mad-purple" },
  { icon: Utensils, label: "Local Eats", desc: "Restaurants & Cafés", color: "bg-mad-blue" },
  { icon: Palmtree, label: "Sunset Sessions", desc: "Beach Bars & Nightlife", color: "bg-mad-green" },
  { icon: Dumbbell, label: "Sweat Units", desc: "Wellness & Fitness Studios", color: "bg-mad-pink" },
  { icon: ShoppingBag, label: "Style Spots", desc: "Lifestyle & Retail Stores", color: "bg-mad-purple" },
];

export default function VIPSection() {
  return (
    <section className="py-16 sm:py-24 bg-mad-dark text-mad-light px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <PatternOverlay className="opacity-10" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mad-purple/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mad-pink/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeIn} className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">
            Your Wristband =<br className="sm:hidden" /> Instant VIP Status
          </h2>
          <p className="text-base sm:text-xl text-mad-light/60 font-medium max-w-2xl mx-auto">
            Whether you need to recover from last night or gear up for this evening, your MM Loyalty Wristband unlocks curated deals at our favorite:
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center bg-card/5 backdrop-blur-sm border border-border/10 rounded-2xl p-4 sm:p-8 hover:bg-card/10 hover:border-mad-pink/30 transition-all group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <div className="sm:mt-2">
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-mad-light block">{item.label}</span>
                <span className="text-mad-light/50 text-xs sm:text-sm mt-0.5 block">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
