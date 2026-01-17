import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-strawberry-red-950 font-sans antialiased selection:bg-strawberry-red-100 selection:text-strawberry-red-700 noise-overlay">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <LeadForm />
      <Footer />
    </div>
  );
}
