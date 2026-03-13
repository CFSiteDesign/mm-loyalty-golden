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

      {/* Category rows — menu-board style */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-mad-light/50 font-medium text-center mb-8 sm:mb-12 max-w-lg mx-auto"
        >
          Whether you need to recover from last night or gear up for tonight — your wristband unlocks curated deals at:
        </motion.p>

        <div className="space-y-0">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group border-b border-mad-light/10 first:border-t"
            >
              <div className="flex items-center gap-3 sm:gap-5 py-4 sm:py-5 cursor-default hover:pl-2 transition-all duration-300">
                {/* Number */}
                <span className={`font-display text-lg sm:text-2xl text-mad-light/20 group-hover:${colorMap[item.color].num} transition-colors w-8 sm:w-10 shrink-0`}>
                  {item.num}
                </span>

                {/* Icon pill */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colorMap[item.color].bg} ${colorMap[item.color].bgHover} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorMap[item.color].icon} group-hover:text-primary-foreground transition-colors`} />
                </div>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <span className="font-display text-xl sm:text-3xl md:text-4xl text-mad-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-mad-gradient-start group-hover:to-mad-gradient-end transition-all block leading-tight truncate">
                    {item.label}
                  </span>
                </div>

                {/* Description */}
                <span className="hidden sm:block text-xs sm:text-sm text-mad-light/30 group-hover:text-mad-light/60 transition-colors font-medium uppercase tracking-wider shrink-0">
                  {item.desc}
                </span>

                {/* Arrow */}
                <span className="text-mad-light/10 group-hover:text-mad-light/60 transition-all group-hover:translate-x-1 text-xl sm:text-2xl shrink-0">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
