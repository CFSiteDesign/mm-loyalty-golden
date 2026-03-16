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
        <div className="max-w-7xl mx-auto text-center mb-4 sm:mb-6">
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

        {/* Body text from hero — moved here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-4 sm:mb-8"
        >
          <p className="text-sm sm:text-lg text-mad-light/70 leading-relaxed font-medium">
            Welcome to the Mad Monkey Loyalty Program, your all‑access pass to the best of our backyard.
            We've teamed up with our favorite local legends to make sure that as long as you're wearing that wristband, you're treated like royalty <span className="text-mad-light/40 italic">(the fun kind, not the stuffy kind).</span>
          </p>
          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-transparent to-mad-pink/60" />
            <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.25em] text-mad-purple whitespace-nowrap">
              No points · No apps · Just show the band
            </p>
            <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-l from-transparent to-mad-pink/60" />
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y border-mad-light/10 py-2 sm:py-4 mb-8 sm:mb-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-mad-light/40 px-4">
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
                className={`group relative cursor-default transition-shadow duration-300`}
              >
                <div className="relative overflow-visible">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 260" preserveAspectRatio="none" overflow="visible">
                    <path
                      d="M 8 0 L 192 0 Q 200 0 200 8 L 200 108 C 192 108 186 118 186 130 C 186 142 192 152 200 152 L 200 252 Q 200 260 192 260 L 8 260 Q 0 260 0 252 L 0 152 C 8 152 14 142 14 130 C 14 118 8 108 0 108 L 0 8 Q 0 0 8 0 Z"
                      fill="hsl(var(--mad-light) / 0.04)"
                      stroke="hsl(var(--mad-light) / 0.12)"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  <div className="relative"
                    style={{
                      clipPath: `polygon(
                        0% 0%, 100% 0%, 100% 41.5%,
                        96.5% 43%, 93% 47%, 93% 50%, 93% 53%, 96.5% 57%, 100% 58.5%,
                        100% 100%, 0% 100%,
                        0% 58.5%, 3.5% 57%, 7% 53%, 7% 50%, 7% 47%, 3.5% 43%, 0% 41.5%
                      )`
                    }}
                  >
                    <div className={`h-1.5 sm:h-2 w-full ${styles.accent}`} />
                    <div className="px-5 py-4 sm:px-6 sm:py-6 text-center">
                      <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full ${styles.accent}/15 flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                        <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${styles.text}`} />
                      </div>
                      <h3 className="font-display text-sm sm:text-lg text-mad-light tracking-wide leading-tight uppercase">
                        {item.label}
                      </h3>
                      <p className="text-[9px] sm:text-xs text-mad-light/35 font-medium mt-1 tracking-wider uppercase">
                        {item.desc}
                      </p>
                    </div>
                    <div className="border-t border-dashed border-mad-light/10 mx-5 sm:mx-6" />
                    <div className="py-2 sm:py-3 flex items-center justify-center">
                      <span className={`text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}/70`}>🎫 VIP Access</span>
                    </div>
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
