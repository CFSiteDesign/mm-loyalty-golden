import { motion } from 'motion/react';
import {
  Sparkles, Scissors, Utensils, Palmtree, Dumbbell, ShoppingBag,
} from 'lucide-react';
import PatternOverlay from './PatternOverlay';

const colorMap = {
  "mad-pink": { icon: "text-mad-pink", border: "border-mad-pink/40 hover:border-mad-pink", bg: "bg-mad-pink/10 hover:bg-mad-pink/20" },
  "mad-purple": { icon: "text-mad-purple", border: "border-mad-purple/40 hover:border-mad-purple", bg: "bg-mad-purple/10 hover:bg-mad-purple/20" },
  "mad-blue": { icon: "text-mad-blue", border: "border-mad-blue/40 hover:border-mad-blue", bg: "bg-mad-blue/10 hover:bg-mad-blue/20" },
  "mad-green": { icon: "text-mad-green", border: "border-mad-green/40 hover:border-mad-green", bg: "bg-mad-green/10 hover:bg-mad-green/20" },
} as const;

type ColorKey = keyof typeof colorMap;

const categories = [
  { icon: Sparkles, label: "Recovery Zones", desc: "Spas & Massage Studios", color: "mad-pink" as ColorKey },
  { icon: Scissors, label: "Fresh Fades", desc: "Barber Shops", color: "mad-purple" as ColorKey },
  { icon: Utensils, label: "Local Eats", desc: "Restaurants & Cafés", color: "mad-blue" as ColorKey },
  { icon: Palmtree, label: "Sunset Sessions", desc: "Beach Bars & Nightlife", color: "mad-green" as ColorKey },
  { icon: Dumbbell, label: "Sweat Units", desc: "Wellness & Fitness Studios", color: "mad-pink" as ColorKey },
  { icon: ShoppingBag, label: "Style Spots", desc: "Lifestyle & Retail Stores", color: "mad-purple" as ColorKey },
];

const tickerText = "SHOW THE BAND · SCORE THE GOODS · ";

export default function VIPSection() {
  return (
    <section className="bg-mad-dark text-mad-light relative overflow-hidden">
      <PatternOverlay className="opacity-5" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mad-purple/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mad-pink/20 blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 pt-12 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-6xl md:text-8xl mb-2 sm:mb-4 leading-[0.9]"
          >
            Your Wristband =<br />
            <span className="text-transparent bg-clip-text gradient-mad bg-gradient-to-r from-mad-gradient-start to-mad-gradient-end">Instant VIP Status</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y border-mad-light/10 py-2 sm:py-4 mb-8 sm:mb-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-mad-light/40 mx-0">
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* Categories — pill tag cloud */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-base text-mad-light/50 font-medium text-center mb-6 sm:mb-12 max-w-lg mx-auto"
        >
          Whether you need to recover from last night or gear up for tonight — your wristband unlocks curated deals at:
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 200 }}
              className={`group relative px-3.5 py-2.5 sm:px-7 sm:py-4 rounded-full border-2 ${colorMap[item.color].border} ${colorMap[item.color].bg} cursor-default transition-all duration-300 hover:scale-105 hover:-rotate-1`}
            >
              <div className="flex items-center gap-1.5 sm:gap-3">
                <item.icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${colorMap[item.color].icon}`} />
                <span className="font-display text-sm sm:text-xl text-mad-light tracking-wide">{item.label}</span>
              </div>
              <span className="block text-[9px] sm:text-xs text-mad-light/40 font-medium mt-0.5 text-center tracking-wider uppercase">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
