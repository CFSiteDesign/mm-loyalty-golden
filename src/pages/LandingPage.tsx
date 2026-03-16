import Navbar from '@/components/landing/Navbar';
import VIPSection from '@/components/landing/VIPSection';
import StepsSection from '@/components/landing/StepsSection';
import TiersSection from '@/components/landing/TiersSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="pt-14 sm:pt-16" /> {/* spacer for fixed nav */}
      <VIPSection />
      <StepsSection />
      <TiersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
