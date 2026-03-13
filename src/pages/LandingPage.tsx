import React from 'react';
import { motion } from 'motion/react';
import { 
  Ticket, 
  MapPin, 
  Beer, 
  Coffee, 
  Scissors, 
  Dumbbell, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

const categories = [
  { icon: Sparkles, label: "Spas & Massage" },
  { icon: Beer, label: "Nightlife & Bars" },
  { icon: Coffee, label: "Cafés & Eats" },
  { icon: Scissors, label: "Barbers" },
  { icon: Dumbbell, label: "Gyms & Wellness" },
  { icon: Ticket, label: "Experiences" },
  { icon: MapPin, label: "Tours" },
  { icon: CheckCircle2, label: "Lifestyle Stores" },
];

const steps = [
  { step: "01", title: "Scope the Offers", desc: "Browse partner spots in your location." },
  { step: "02", title: "Flex the Wrist", desc: "Show your loyalty wristband before paying." },
  { step: "03", title: "Claim the Win", desc: "Unlock discounts, freebies and exclusive perks." },
];

const tiers = [
  {
    gradient: "linear-gradient(135deg, #4ADE80, #2DD4BF, #06B6D4)",
    label: "Member Monkey",
    tierName: "MEMBER",
    tierNameColor: "text-mad-dark",
    madMonkeyColor: "text-mad-dark",
    desc: "For new sign-ups who have NOT made a booking since signing up / completed website check-out as a GUEST / booked through an OTA.",
  },
  {
    gradient: "linear-gradient(135deg, #A78BFA, #C084FC, #E879F9)",
    label: "Mad Monkey",
    tierName: "MAD",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-mad-dark",
    desc: "Unlocked after completing direct stays with Mad Monkey.",
  },
  {
    gradient: "linear-gradient(135deg, #60A5FA, #818CF8, #E879F9)",
    label: "Madder Monkey",
    tierName: "MADDER",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-mad-dark",
    desc: "For frequent guests staying across multiple locations.",
  },
  {
    gradient: "linear-gradient(135deg, #F472B6, #EC4899, #F59E0B)",
    label: "Maddest Monkey",
    tierName: "MADDEST",
    tierNameColor: "text-yellow-300",
    madMonkeyColor: "text-yellow-300",
    desc: "Top tier travellers who stay the most and unlock premium perks.",
  },
];

const partners = [
  { name: "Zen Recovery Spa", offer: "10% off recovery massages", tag: "Massage Studios", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" },
  { name: "Sunset Beach Club", offer: "Free shot with any cocktail", tag: "Beach Bars", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop" },
  { name: "Nomad Coffee Co.", offer: "Free upgrade to large", tag: "Cafés", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" },
  { name: "Iron Paradise", offer: "Free day pass with band", tag: "Gyms", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { name: "The Local Cut", offer: "15% off all haircuts", tag: "Barbers", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Mama's Kitchen", offer: "Free side with main meal", tag: "Restaurants", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-mad-light overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-mad-dark rounded-full flex items-center justify-center">
              <span className="text-mad-light font-display text-xl leading-none mt-1">M</span>
            </div>
            <span className="font-display text-2xl tracking-wide mt-1">MAD MONKEY</span>
          </div>
          <button className="gradient-mad text-primary-foreground px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Sign Up For Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/90 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=3182&auto=format&fit=crop" 
            alt="Backpackers partying" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6 px-4 py-1.5 bg-yellow-400 text-mad-dark font-bold uppercase tracking-widest text-sm rounded-full transform -rotate-2"
          >
            The Golden Ticket (On Your Wrist)
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-9xl text-primary-foreground mb-6 leading-[0.85] tracking-tight"
          >
            SHOW YOUR BAND.<br />
            <span className="text-gradient-hero">
              SCORE THE GOODS.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-medium"
          >
            Welcome to the Mad Monkey Loyalty Program, your all-access pass to the best of our backyard. We've teamed up with our favorite local legends to make sure that as long as you're wearing that wristband, you're treated like royalty — the fun kind.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="gradient-mad text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
              Sign Up For Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Explore Perks
            </button>
          </motion.div>
        </div>
      </section>

      {/* VIP Status Section */}
      <section className="py-24 bg-mad-dark text-mad-light px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-mad-purple/20 blur-[120px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mad-pink/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6">Instant VIP Status</h2>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              No points. No apps. No tracking. Just flash the band and unlock the city.
            </p>
            <div className="mt-8 inline-block px-6 py-3 border border-white/20 rounded-full text-lg font-bold uppercase tracking-widest text-mad-pink transform rotate-1">
              Recover from last night. Gear up for tonight.
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {categories.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
              >
                <item.icon className="w-10 h-10 mb-4 text-gray-400 group-hover:text-mad-light transition-colors" />
                <span className="font-bold uppercase tracking-wider text-sm">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl text-foreground">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 z-0" />
            {steps.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-mad-dark text-mad-light rounded-full flex items-center justify-center font-display text-4xl mb-6 shadow-xl border-4 border-card">
                  {item.step}
                </div>
                <h3 className="text-3xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wristband Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-mad-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl text-foreground mb-4">Choose Your Weapon</h2>
            <p className="text-xl text-muted-foreground font-medium">Four tiers. Endless chaos. Level up by staying with us.</p>
          </motion.div>

          <div className="space-y-6">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Tier label */}
                <p className="text-sm font-bold text-foreground mb-2 ml-2">
                  <span className="mr-1">●</span> {tier.label}:
                </p>
                {/* Wristband */}
                <div 
                  className="w-full h-16 sm:h-20 rounded-lg sm:rounded-full flex items-center overflow-hidden shadow-lg transform transition-transform group-hover:scale-[1.02] cursor-pointer relative px-6 sm:px-10"
                  style={{ background: tier.gradient }}
                >
                  {/* Fabric texture overlay */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h1v1H0zm2 2h1v1H2z\' fill=\'%23000\' fill-opacity=\'.3\'/%3E%3C/svg%3E")' }} />
                  
                  {/* Left: "mad monkey" */}
                  <span className={`font-display text-2xl sm:text-4xl ${tier.madMonkeyColor} tracking-wider flex-1`}>
                    mad monkey
                  </span>

                  {/* Center: Monkey logo placeholder */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-mad-dark/20 flex items-center justify-center mx-4 sm:mx-8 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">🐵</span>
                  </div>

                  {/* Right: Tier name */}
                  <span className={`font-display text-3xl sm:text-5xl ${tier.tierNameColor} tracking-wider text-right flex-1`}>
                    {tier.tierName}
                  </span>
                </div>

                {/* Description on hover */}
                <p className="text-sm text-muted-foreground mt-1 ml-2 italic opacity-0 group-hover:opacity-100 transition-opacity">
                  {tier.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Locations Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl text-foreground mb-4">The Hit List</h2>
              <p className="text-xl text-muted-foreground font-medium">Where to flash your band.</p>
            </div>
            <button className="text-foreground font-bold uppercase tracking-wider border-b-2 border-foreground pb-1 hover:text-mad-purple hover:border-mad-purple transition-colors self-start md:self-auto">
              View All Partners
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-secondary border border-border hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={partner.img} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {partner.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{partner.name}</h3>
                  <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md font-bold text-sm">
                    {partner.offer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-mad-dark">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3174&auto=format&fit=crop" 
            alt="Party crowd" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mad-dark via-mad-dark/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl text-mad-light mb-6"
          >
            READY TO WEAR THE BAND?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-12"
          >
            Join Mad Loyalty and start unlocking perks across the Mad Monkey universe.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="gradient-mad text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,0,214,0.3)]">
              Sign Up For Free
            </button>
            <button className="bg-transparent border-2 border-mad-light text-mad-light px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors">
              See All Partner Deals
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mad-dark text-gray-400 py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-12 h-12 bg-mad-light rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-mad-dark font-display text-2xl leading-none mt-1">M</span>
          </div>
          <p className="font-medium uppercase tracking-widest text-sm mb-4">Mad Monkey Hostels</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Mad Monkey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
