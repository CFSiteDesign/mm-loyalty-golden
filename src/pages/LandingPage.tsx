import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Beer, Utensils, Gem, Hotel, Gift, Percent, Clock, PartyPopper } from 'lucide-react';
import bandMember from '@/assets/band-member.png';
import bandMad from '@/assets/band-mad.png';
import bandMadder from '@/assets/band-madder.png';
import bandMaddest from '@/assets/band-maddest.png';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const tiers = [
  {
    gradient: "linear-gradient(135deg, #4ADE80, #2DD4BF, #06B6D4)",
    label: "Member Monkey",
    tierName: "MEMBER",
    tierNameColor: "text-mad-dark",
    madMonkeyColor: "text-mad-dark",
    bandImg: bandMember,
    badgeImg: "https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmember_loyalty_badge.png&w=64&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6",
    levelUp: "Create an account to unlock Member level and perks",
  },
  {
    gradient: "linear-gradient(135deg, #A78BFA, #C084FC, #E879F9)",
    label: "Mad Monkey",
    tierName: "MAD",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-mad-dark",
    bandImg: bandMad,
    badgeImg: "https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmad_loyalty_badge.png&w=64&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6",
    levelUp: "Book 1 property to unlock the Mad level and perks",
  },
  {
    gradient: "linear-gradient(135deg, #60A5FA, #818CF8, #E879F9)",
    label: "Madder Monkey",
    tierName: "MADDER",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-mad-dark",
    bandImg: bandMadder,
    badgeImg: "https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmadder_loyalty_badge.png&w=64&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6",
    levelUp: "Book 3 properties to unlock the Madder level and perks",
  },
  {
    gradient: "linear-gradient(135deg, #F472B6, #EC4899, #F59E0B)",
    label: "Maddest Monkey",
    tierName: "MADDEST",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-yellow-300",
    bandImg: bandMaddest,
    badgeImg: "https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmaddest_loyalty_badge.png&w=64&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6",
    levelUp: "Book 5 properties to unlock the Maddest level and perks",
  },
];

const perksData: Record<string, Record<string, { icon: React.ElementType; title: string; desc: string }[]>> = {
  "Southeast Asia": {
    "Member Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
    ],
    "Mad Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
    ],
    "Madder Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
      { icon: Hotel, title: "Free first night in the next country you visit!", desc: "Get a free first night at any Mad Monkey when you visit a new country." },
      { icon: Gift, title: "Free Birthday Stay", desc: "Celebrate your special day with a free night on us." },
    ],
    "Maddest Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
      { icon: Percent, title: "10% Off All Food", desc: "Dig in and save with 10% off all food items." },
      { icon: Hotel, title: "Two free nights in the next country you visit!", desc: "Get 2 free nights at any Mad Monkey when you visit a new country." },
      { icon: Gift, title: "Free Birthday Stay", desc: "Celebrate big with 2 free nights on your birthday." },
      { icon: Clock, title: "Early Check-In & Late Check-Out", desc: "Whether you're nursing a hangover or just want more sleep, we've got your back." },
      { icon: PartyPopper, title: "Free Pub Crawl Each Month", desc: "Yup, we're serious. Let's get weird, one bar at a time." },
    ],
  },
  "Australia": {
    "Member Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
    ],
    "Mad Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
    ],
    "Madder Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
      { icon: Hotel, title: "Free first night in the next country you visit!", desc: "Get a free first night at any Mad Monkey when you visit a new country." },
    ],
    "Maddest Monkey": [
      { icon: Beer, title: "Extended Happy Hour", desc: "More time to sip, mingle, and keep the party going!" },
      { icon: Utensils, title: "All-Access F&B Offers", desc: "Your status grants you access to every current food and drink promotion." },
      { icon: Gem, title: "VIP Perks + Insider Info", desc: "Be the first to know all the goss, updates, and exclusive offers." },
      { icon: Percent, title: "10% Off All Food", desc: "Dig in and save with 10% off all food items." },
      { icon: Hotel, title: "Two free nights in the next country you visit!", desc: "Get 2 free nights at any Mad Monkey when you visit a new country." },
      { icon: Gift, title: "Free Birthday Stay", desc: "Celebrate big with 2 free nights on your birthday." },
    ],
  },
};

export default function LandingPage() {
  const [activeRegion, setActiveRegion] = useState("Southeast Asia");

  return (
    <div className="min-h-screen bg-mad-light overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src={madMonkeyLogo} alt="Mad Monkey" className="h-8 sm:h-10" />
          </div>
          <button className="gradient-mad text-primary-foreground px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero Section — mobile: stacked, desktop: side by side like reference */}
      <section className="pt-20 sm:pt-24 bg-mad-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-12 lg:py-20">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6"
              >
                a membership for people who love paying less than everyone else
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <button className="w-full max-w-sm gradient-mad text-primary-foreground px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-[1.02] active:scale-95">
                  Sign Up For Free
                </button>
                <p className="text-muted-foreground text-sm">
                  Already have an account? <a href="#" className="text-accent font-semibold hover:underline">LOGIN</a>
                </p>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 w-full"
            >
              <img
                src="https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmadloyalty_hero_banner.png&w=1920&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6"
                alt="Mad Loyalty Hero"
                className="w-full h-auto rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Full-width loyalty banner */}
        <motion.div {...fadeIn} className="w-full mt-4">
          <img
            src="https://madmonkeyhostels.com/_next/image?url=https%3A%2F%2Fmadmonkeyhostels.com%2Fimages%2Fmadloyalty_banner.png&w=1920&q=75&dpl=dpl_EqeCF7V2z3Hy6Fk1taRydYvoXXd6"
            alt="Mad Loyalty Banner"
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* How It Works + Level Up Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column: How It Works image + text */}
            <motion.div {...fadeIn} className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop"
                alt="Backpackers having fun"
                className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-6"
                referrerPolicy="no-referrer"
              />
              <h2 className="text-2xl sm:text-3xl text-foreground mb-3">Mad Loyalty: How It Works</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Stay with us in more destinations to level up. Each new level unlocks bigger discounts and exclusive perks!
              </p>

              {/* Level Up Progression */}
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl text-foreground mb-6">How to Level Up & Unlock Rewards</h3>
                <div className="space-y-4">
                  {tiers.map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50"
                    >
                      <img src={tier.badgeImg} alt={tier.label} className="w-10 h-10 sm:w-12 sm:h-12" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base">{tier.label.split(" ")[0]}</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">{tier.levelUp}</p>
                      </div>
                      {i < tiers.length - 1 && (
                        <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto flex-shrink-0" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column: Perks by Region */}
            <div className="flex-1">
              {/* Region Tabs */}
              <div className="flex rounded-xl overflow-hidden border border-border mb-6">
                {["Southeast Asia", "Australia"].map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`flex-1 py-3 text-sm sm:text-base font-bold uppercase tracking-wider transition-colors ${
                      activeRegion === region
                        ? "gradient-mad text-primary-foreground"
                        : "bg-card text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Perks per tier */}
              <div className="space-y-8">
                {tiers.map((tier) => {
                  const tierPerks = perksData[activeRegion]?.[tier.label] || [];
                  if (tierPerks.length === 0) return null;

                  return (
                    <motion.div
                      key={`${activeRegion}-${tier.label}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">{tier.label.replace("Monkey", "").trim()} Perks</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tierPerks.map((perk, j) => (
                          <div key={j} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <perk.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h5 className="font-bold text-accent text-sm">{perk.title}</h5>
                              <p className="text-muted-foreground text-xs mt-0.5">{perk.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wristband Tiers */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-mad-light">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl text-foreground mb-3">Choose Your Weapon</h2>
            <p className="text-base sm:text-xl text-muted-foreground font-medium">Four tiers. Endless chaos. Level up by staying with us.</p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <img
                  src={tier.bandImg}
                  alt={`${tier.label} wristband`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mad-dark text-gray-400 py-10 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-mad-light rounded-full flex items-center justify-center mb-4">
              <span className="text-mad-dark font-display text-2xl leading-none mt-1">M</span>
            </div>
            <p className="font-display text-xl text-mad-light mb-2">Mad Monkey</p>
            <p className="text-xs">All rights reserved © Mad Monkey. {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
