import { motion } from 'motion/react';
import {
  Sparkles, Scissors, Utensils, Palmtree, Dumbbell, ShoppingBag,
} from 'lucide-react';
import PatternOverlay from './PatternOverlay';

const colorMap = {
  "mad-pink": { num: "text-mad-pink", bg: "bg-mad-pink/20", bgHover: "group-hover:bg-mad-pink", icon: "text-mad-pink" },
  "mad-purple": { num: "text-mad-purple", bg: "bg-mad-purple/20", bgHover: "group-hover:bg-mad-purple", icon: "text-mad-purple" },
  "mad-blue": { num: "text-mad-blue", bg: "bg-mad-blue/20", bgHover: "group-hover:bg-mad-blue", icon: "text-mad-blue" },
  "mad-green": { num: "text-mad-green", bg: "bg-mad-green/20", bgHover: "group-hover:bg-mad-green", icon: "text-mad-green" },
} as const;

type ColorKey = keyof typeof colorMap;

const categories = [
  { icon: Sparkles, label: "Recovery Zones", desc: "Spas & Massage Studios", color: "mad-pink" as ColorKey, num: "01" },
  { icon: Scissors, label: "Fresh Fades", desc: "Barber Shops", color: "mad-purple" as ColorKey, num: "02" },
  { icon: Utensils, label: "Local Eats", desc: "Restaurants & Cafés", color: "mad-blue" as ColorKey, num: "03" },
  { icon: Palmtree, label: "Sunset Sessions", desc: "Beach Bars & Nightlife", color: "mad-green" as ColorKey, num: "04" },
  { icon: Dumbbell, label: "Sweat Units", desc: "Wellness & Fitness Studios", color: "mad-pink" as ColorKey, num: "05" },
  { icon: ShoppingBag, label: "Style Spots", desc: "Lifestyle & Retail Stores", color: "mad-purple" as ColorKey, num: "06" },
];

const tickerText = "SHOW THE BAND · SCORE THE GOODS · ";

export default function VIPSection() {
  return (
    <section className="bg-mad-dark text-mad-light relative overflow-hidden">
      <PatternOverlay className="opacity-5" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mad-purple/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mad-pink/20 blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-8xl mb-3 sm:mb-4 leading-[0.9]"
          >
            Your Wristband =<br />
            <span className="text-transparent bg-clip-text gradient-mad bg-gradient-to-r from-mad-gradient-start to-mad-gradient-end">Instant VIP Status</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y border-mad-light/10 py-3 sm:py-4 mb-10 sm:mb-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-mad-light/40 mx-0">
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* Categories — pill tag cloud */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-mad-light/50 font-medium text-center mb-8 sm:mb-12 max-w-lg mx-auto"
        >
          Whether you need to recover from last night or gear up for tonight — your wristband unlocks curated deals at:
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 200 }}
              className={`group relative px-5 py-3 sm:px-7 sm:py-4 rounded-full border-2 border-${item.color}/40 hover:border-${item.color} bg-${item.color}/10 hover:bg-${item.color}/20 cursor-default transition-all duration-300 hover:scale-105 hover:-rotate-1`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorMap[item.color].icon}`} />
                <span className="font-display text-base sm:text-xl text-mad-light tracking-wide">{item.label}</span>
              </div>
              <span className="block text-[10px] sm:text-xs text-mad-light/40 font-medium mt-0.5 text-center tracking-wider uppercase">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
