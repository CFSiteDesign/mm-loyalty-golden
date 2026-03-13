import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import VIPSection from '@/components/landing/VIPSection';
import StepsSection from '@/components/landing/StepsSection';
import TiersSection from '@/components/landing/TiersSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <VIPSection />
      <StepsSection />
      <TiersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
