"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductSwitcher from "@/components/product-switcher";
import Features from "@/components/features";
import AIHighlight from "@/components/ai-highlight";
import DashboardPreview from "@/components/dashboard-preview";
import Integrations from "@/components/integrations";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#FAFAFC]">
      <Navbar />
      <Hero />
      <ProductSwitcher />
      <AIHighlight />
      <Features />
      <DashboardPreview />
      <Integrations />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
