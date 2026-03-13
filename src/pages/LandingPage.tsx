import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Scissors,
  Utensils,
  Palmtree,
  Dumbbell,
  ShoppingBag,
  ArrowRight,
  Search,
  Hand,
  Trophy
} from 'lucide-react';
import bandMember from '@/assets/band-member.svg';
import bandMad from '@/assets/band-mad.svg';
import bandMadder from '@/assets/band-madder.svg';
import bandMaddest from '@/assets/band-maddest.svg';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';
import goldenTicket from '@/assets/golden-ticket.png';
import goldenTicketHero from '@/assets/golden-ticket-hero.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const categories = [
  { icon: Sparkles, label: "Recovery Zones", desc: "Spas & Massage Studios" },
  { icon: Scissors, label: "Fresh Fades", desc: "Barber Shops" },
  { icon: Utensils, label: "Local Eats", desc: "Restaurants & Cafés" },
  { icon: Palmtree, label: "Sunset Sessions", desc: "Beach Bars & Nightlife" },
  { icon: Dumbbell, label: "Sweat Units", desc: "Wellness & Fitness Studios" },
  { icon: ShoppingBag, label: "Style Spots", desc: "Lifestyle & Retail Stores" },
];

const steps = [
  { step: "01", icon: Search, title: "Scope the Offers", desc: "Browse our partner spots in your current location." },
  { step: "02", icon: Hand, title: "Flex the Wrist", desc: "Show your Mad Monkey Loyalty Wristband before you order or pay." },
  { step: "03", icon: Trophy, title: "Claim the Win", desc: "Walk away with exclusive discounts, freebies, and members-only deals." },
];

const bands = [
  { img: bandMember, label: "Member Monkey" },
  { img: bandMad, label: "Mad Monkey" },
  { img: bandMadder, label: "Madder Monkey" },
  { img: bandMaddest, label: "Maddest Monkey" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-mad-light overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <img src={madMonkeyLogo} alt="Mad Monkey" className="h-8 sm:h-10" />
          <button className="gradient-mad text-primary-foreground px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/90 mix-blend-multiply z-10" />
          <img
            src="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?q=80&w=3174&auto=format&fit=crop"
            alt="Backpackers at a tropical hostel pool party"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.img
            src={goldenTicketHero}
            alt="The Golden Ticket (On Your Wrist) - Show The Band. Score The Goods."
            className="w-80 sm:w-[28rem] md:w-[34rem] lg:w-[42rem] mx-auto -mb-6 sm:-mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.7, type: "spring" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 space-y-3"
          >
            <p className="text-sm sm:text-base text-gray-100 font-medium leading-relaxed">
              Your all-access pass to the best of our backyard. We've teamed up with local legends so that as long as you're wearing that wristband, you're treated like royalty <span className="text-gray-300 italic">(the fun kind, not the stuffy kind).</span>
            </p>
            <p className="text-xs sm:text-sm text-mad-pink font-bold uppercase tracking-wider">
              No points · No apps · Just show the band
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <button className="gradient-mad text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
              Sign Up For Free <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Your Wristband = Instant VIP Status */}
      <section className="py-16 sm:py-24 bg-mad-dark text-mad-light px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mad-purple/20 blur-[120px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mad-pink/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">
              Your Wristband =<br className="sm:hidden" /> Instant VIP Status
            </h2>
            <p className="text-base sm:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
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
                className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-8 hover:bg-white/10 hover:border-mad-pink/30 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-mad-pink/20 to-mad-purple/20 flex items-center justify-center flex-shrink-0 group-hover:from-mad-pink/30 group-hover:to-mad-purple/30 transition-all">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-mad-pink group-hover:text-mad-light transition-colors" />
                </div>
                <div className="sm:mt-2">
                  <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-mad-light block">{item.label}</span>
                  <span className="text-gray-400 text-xs sm:text-sm mt-0.5 block">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Live the Dream */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-7xl text-foreground mb-3">How to Live the Dream</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              Getting your perks is easier than finding the hostel bar.
            </p>
          </motion.div>

          <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-mad-pink/40 via-mad-purple/40 to-mad-pink/40 z-0" />

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

                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24 bg-mad-dark text-mad-light rounded-full flex items-center justify-center font-display text-lg sm:text-xl md:text-4xl flex-shrink-0 shadow-lg border-2 md:border-4 border-card relative z-10">
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

      {/* Wristband Tiers */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-mad-light overflow-hidden">
        <div className="max-w-5xl mx-auto">
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

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-mad-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3174&auto=format&fit=crop"
            alt="Party crowd"
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
            className="text-4xl sm:text-6xl md:text-8xl text-mad-light mb-4 sm:mb-6"
          >
            READY TO WEAR THE BAND?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 font-medium mb-8 sm:mb-12"
          >
            No points. No apps. Just show the band and get the hookup.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gradient-mad text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,0,214,0.3)]"
          >
            Sign Up For Free
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mad-dark text-gray-400 py-10 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 brightness-0 invert mb-4" />
            <p className="font-medium uppercase tracking-widest text-sm mb-3">Mad Monkey Hostels</p>
            <p className="text-xs">&copy; {new Date().getFullYear()} Mad Monkey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
