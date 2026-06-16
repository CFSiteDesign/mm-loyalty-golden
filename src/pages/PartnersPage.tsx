import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ExternalLink, ChevronDown, ArrowLeft, Instagram, Phone } from 'lucide-react';
import { areas, type Area, type Partner } from '@/data/partners';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PatternOverlay from '@/components/landing/PatternOverlay';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-mad-light/[0.03] border border-mad-light/10 rounded-xl p-4 sm:p-5 hover:border-mad-purple/40 hover:bg-mad-light/[0.06] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-mad-light leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {partner.name}
          </h4>
          {partner.location && (
            <div className="flex items-center gap-1 mt-1.5">
              <MapPin className="w-3 h-3 text-mad-pink shrink-0" />
              <span className="text-xs text-mad-light/50 font-medium">{partner.location}</span>
            </div>
          )}
        </div>

        {partner.link && (
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-8 h-8 rounded-full bg-mad-light/10 flex items-center justify-center text-mad-light/60 hover:bg-mad-purple/30 hover:text-mad-purple transition-colors"
            aria-label={`Visit ${partner.name}`}
          >
            {partner.linkType === 'instagram' ? <Instagram className="w-4 h-4" /> :
             partner.linkType === 'facebook' ? <FacebookIcon className="w-4 h-4" /> :
             <ExternalLink className="w-3.5 h-3.5" />}
          </a>
        )}
      </div>

      {partner.offer && (
        <div className="mt-3 pt-3 border-t border-mad-light/[0.06]">
          <div className="px-3 py-2 rounded-lg bg-mad-green/15 text-mad-green text-[11px] sm:text-xs font-bold tracking-wide leading-relaxed break-words">
            🎫 {partner.offer}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function AreaAccordion({ area, isOpen, onToggle }: { area: Area; isOpen: boolean; onToggle: () => void }) {
  const partnerCount = area.partners.length;
  const offersCount = area.partners.filter(p => p.offer).length;

  return (
    <div className="border border-mad-light/10 rounded-2xl overflow-hidden bg-mad-light/[0.02] hover:border-mad-light/20 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left group"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-mad-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {area.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-mad-light/40 font-medium mt-0.5">
              {partnerCount} partner{partnerCount !== 1 ? 's' : ''}{offersCount > 0 ? ` · ${offersCount} offer${offersCount !== 1 ? 's' : ''}` : ''}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-3"
        >
          <ChevronDown className="w-5 h-5 text-mad-light/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-5 sm:pb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.partners.map((partner, i) => (
                  <PartnerCard key={i} partner={partner} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PartnersPage() {
  const [openArea, setOpenArea] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPartners = areas.reduce((sum, a) => sum + a.partners.length, 0);

  return (
    <div className="min-h-screen bg-mad-dark overflow-hidden">
      <Navbar />
      <div className="pt-14 sm:pt-16" />

      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <PatternOverlay className="opacity-5" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-mad-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-mad-pink/15 blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Back link */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-mad-light/50 hover:text-mad-light transition-colors mb-6 sm:mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.a>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-mad-light mb-3 sm:mb-4 leading-[1.1]">
              Where Your Band{' '}
              <span className="text-transparent bg-clip-text gradient-mad bg-gradient-to-r from-mad-gradient-start to-mad-gradient-end">Works</span>
            </h1>
            <p className="text-sm sm:text-base text-mad-light/50 font-medium max-w-md mx-auto">
              {totalPartners} local partners across {areas.length} locations in the Philippines. Tap an area to reveal your perks.
            </p>
          </motion.div>

          {/* Area list */}
          <div className="space-y-3 sm:space-y-4">
            {areas.map((area, i) => (
              <motion.div
                key={area.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <AreaAccordion
                  area={area}
                  isOpen={openArea === area.code}
                  onToggle={() => setOpenArea(prev => prev === area.code ? null : area.code)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
