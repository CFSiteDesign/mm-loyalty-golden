import { motion } from 'motion/react';
import {
  Sparkles, Scissors, Utensils, Palmtree, Dumbbell, ShoppingBag,
} from 'lucide-react';
import PatternOverlay from './PatternOverlay';

const categories = [
  { icon: Sparkles, label: "Recovery Zones", desc: "Spas & Massage Studios", color: "mad-pink" as const, rotate: "-2deg" },
  { icon: Scissors, label: "Fresh Fades", desc: "Barber Shops", color: "mad-purple" as const, rotate: "1.5deg" },
  { icon: Utensils, label: "Local Eats", desc: "Restaurants & Cafés", color: "mad-blue" as const, rotate: "-1deg" },
  { icon: Palmtree, label: "Sunset Sessions", desc: "Beach Bars & Nightlife", color: "mad-green" as const, rotate: "2deg" },
  { icon: Dumbbell, label: "Sweat Units", desc: "Wellness & Fitness Studios", color: "mad-pink" as const, rotate: "-1.5deg" },
  { icon: ShoppingBag, label: "Style Spots", desc: "Lifestyle & Retail Stores", color: "mad-purple" as const, rotate: "1deg" },
];

const colorStyles = {
  "mad-pink": { accent: "bg-mad-pink", text: "text-mad-pink", glow: "shadow-[0_0_20px_hsl(var(--mad-pink)/0.4)]" },
  "mad-purple": { accent: "bg-mad-purple", text: "text-mad-purple", glow: "shadow-[0_0_20px_hsl(var(--mad-purple)/0.4)]" },
  "mad-blue": { accent: "bg-mad-blue", text: "text-mad-blue", glow: "shadow-[0_0_20px_hsl(var(--mad-blue)/0.4)]" },
  "mad-green": { accent: "bg-mad-green", text: "text-mad-green", glow: "shadow-[0_0_20px_hsl(var(--mad-green)/0.4)]" },
} as const;

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

      {/* Categories — wristband stubs */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-base text-mad-light/50 font-medium text-center mb-6 sm:mb-12 max-w-lg mx-auto"
        >
          Whether you need to recover from last night or gear up for tonight — your wristband unlocks curated deals at:
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {categories.map((item, i) => {
            const styles = colorStyles[item.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, rotate: "0deg" }}
                className={`group relative cursor-default transition-shadow duration-300 hover:${styles.glow}`}
              >
                {/* Wristband stub shape */}
                <div className="relative bg-mad-light/[0.04] backdrop-blur-sm border border-mad-light/10 overflow-hidden rounded-sm">
                  {/* Colored top edge — like a wristband stripe */}
                  <div className={`h-1 sm:h-1.5 w-full ${styles.accent}`} />
                  
                  {/* Perforated edge dots */}
                  <div className="absolute top-1 sm:top-1.5 right-0 flex flex-col gap-[3px] pr-1.5 pt-1.5">
                    {[...Array(4)].map((_, d) => (
                      <div key={d} className="w-1 h-1 rounded-full bg-mad-light/10" />
                    ))}
                  </div>

                  <div className="p-3 sm:p-5">
                    {/* Icon */}
                    <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-sm ${styles.accent}/15 flex items-center justify-center mb-2 sm:mb-3`}>
                      <item.icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${styles.text}`} />
                    </div>
                    
                    {/* Label */}
                    <h3 className="font-display text-sm sm:text-lg text-mad-light tracking-wide leading-tight uppercase">
                      {item.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[9px] sm:text-xs text-mad-light/35 font-medium mt-1 tracking-wider uppercase">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom dashed tear line */}
                  <div className="border-t border-dashed border-mad-light/10 mx-3 mb-2 sm:mx-4 sm:mb-3" />
                  <div className="px-3 pb-2 sm:px-4 sm:pb-3 flex items-center justify-between">
                    <span className={`text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}/70`}>VIP Access</span>
                    <span className="text-[8px] sm:text-[10px] text-mad-light/20 font-mono">#{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}