import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Guarantee from "@/components/Guarantee";
import HeroTrustBadges from "@/components/HeroTrustBadges";
import level2Image from "@/assets/level-2-zip-track.jpg";
import level1Image from "@/assets/level-1-wire-secured.jpg";
import heroImage from "@/assets/hero-patio.png";

interface HomeProps {
  onEstimateClick: () => void;
}

const Home = ({ onEstimateClick }: HomeProps) => {
  const [blindCount, setBlindCount] = useState(3);
  const heroAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const calculatorAnimation = useScrollAnimation();

  const calculateDiscount = (count: number) => {
    if (count >= 10) return 15;
    if (count >= 5) return 10;
    if (count >= 3) return 5;
    return 0;
  };

  const discount = calculateDiscount(blindCount);

  const scrollToLocations = () => {
    const element = document.getElementById("locations-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-4 relative overflow-hidden bg-dawn">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              ref={heroAnimation.elementRef}
              className={`space-y-8 transition-all duration-700 ${
                heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="trust-badge">
                <span className="text-sm font-bold tracking-wide">
                  #1 Rated in Southern California
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
                Premium Windproof Patio Blinds,{" "}
                <span className="gradient-text">Built to Last</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-xl">
                Choose our <span className="font-bold text-foreground">Level 2 Zip Track</span> (100% windproof, up to 30 ft) or{" "}
                <span className="font-bold text-foreground">Level 1 Wire Secured</span> blinds—ideal for alumawood covers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-base lg:text-lg text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0" />
                  Manual cordless, motorized & smart-home ready
                </li>
                <li className="flex items-center gap-3 text-base lg:text-lg text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0" />
                  Fast local install. Lifetime craftsmanship support
                </li>
                <li className="flex items-center gap-3 text-base lg:text-lg text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0" />
                  Serving cities across Southern California
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 pt-6">
                <Button size="lg" onClick={onEstimateClick} className="pulse-ring hover-scale">
                  Contact Us — FREE Estimate
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToLocations}
                  className="hover-scale"
                >
                  See Locations <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8F74]" />
                  Free consultation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8F74]" />
                  2-3 day install
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8F74]" />
                  Lifetime support
                </span>
              </div>
            </div>

            <div className="relative parallax-slow">
              <div className="relative overflow-hidden rounded-[24px] border-2 border-[#E6E1D8] shadow-[0_30px_80px_rgba(18,20,23,0.16)]">
                <img
                  src={heroImage}
                  alt="Modern patio with windproof blinds"
                  className="w-full h-auto"
                />
              </div>
              <Card className="absolute bottom-6 right-6 left-6 lg:left-auto lg:w-[340px] p-6 glass-card border-2 border-[#D8B878]/30 backdrop-blur-lg animate-float">
                <div className="space-y-4">
                  <h3 className="font-black text-xl tracking-tight">Bundle & Save</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Order 3+ save 5% • 5+ save 10% • 10+ save 15%
                  </p>
                  <Button variant="gold" size="sm" className="w-full">
                    Calculate Savings →
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <HeroTrustBadges />

      {/* Stats */}
      <Stats />

      {/* Benefits */}
      <Benefits />

      {/* Products Section */}
      <section
        ref={productsAnimation.elementRef}
        className={`py-20 lg:py-32 px-4 bg-white transition-all duration-700 ${
          productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
              Two Proven Systems, One Perfect Fit
            </h2>
            <p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Every patio is different. We'll recommend the best system for your space, goals, and wind exposure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <Card className="overflow-hidden group border-2 border-border hover:border-[#D8B878] hover:shadow-[0_30px_80px_rgba(18,20,23,0.16)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative overflow-hidden h-80">
                <img
                  src={level2Image}
                  alt="Level 2 Zip Track blinds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-3xl font-black mb-6 tracking-tight">Level 2 Zip Track</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">100% windproof seal with side tracks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Spans up to 30 feet in a single run</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Best for stucco & exposed patios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Manual or motorized (smart-home ready)</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden group border-2 border-border hover:border-[#D8B878] hover:shadow-[0_30px_80px_rgba(18,20,23,0.16)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative overflow-hidden h-80">
                <img
                  src={level1Image}
                  alt="Level 1 Wire Secured blinds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-3xl font-black mb-6 tracking-tight">Level 1 Wire Secured</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Discrete wire guides, clean look</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Ideal for alumawood—roll hides between ridges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Excellent wind resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D8B878] flex-shrink-0 mt-0.5" />
                    <span className="text-base">Manual cordless or motorized</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Process Section */}
      <section
        ref={processAnimation.elementRef}
        className={`py-20 lg:py-32 px-4 bg-dawn transition-all duration-700 ${
          processAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
              A Smooth, 4-Step Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D8B878] to-[#C9A86A] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Call or Request Free Estimate",
                description: "Speak with a specialist or send photos & rough measurements.",
              },
              {
                number: "2",
                title: "On-Site Measure & Design",
                description: "We confirm details, choose fabric/colors, and finalize layout.",
              },
              {
                number: "3",
                title: "Precision Manufacture",
                description: "Built to spec for wind stability and smooth operation.",
              },
              {
                number: "4",
                title: "Pro Installation",
                description: "Clean install, final walkthrough, and smart-home pairing if selected.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`p-8 border-2 border-border bg-white hover:border-[#D8B878] hover:shadow-[0_30px_80px_rgba(18,20,23,0.16)] hover:-translate-y-1 transition-all duration-500 scroll-reveal stagger-${index + 1}`}
              >
                <div className="timeline-badge mb-6">
                  {step.number}
                </div>
                <h3 className="font-black text-xl mb-3 tracking-tight">{step.title}</h3>
                <p className="text-base text-muted leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section
        ref={calculatorAnimation.elementRef}
        className={`py-20 lg:py-32 px-4 bg-white transition-all duration-700 ${
          calculatorAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-3xl">
          <Card className="p-10 lg:p-16 border-2 border-[#D8B878] shadow-[0_30px_80px_rgba(18,20,23,0.16)]">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                Estimate Your Bundle Savings
              </h2>
              <p className="text-lg text-muted">
                The more you order, the more you save
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <label htmlFor="blind-count" className="block text-base font-bold mb-4">
                  How many blinds are you ordering?
                </label>
                <Input
                  id="blind-count"
                  type="number"
                  min="1"
                  value={blindCount}
                  onChange={(e) => setBlindCount(parseInt(e.target.value) || 0)}
                  className="text-xl h-14 rounded-[14px] border-2"
                />
              </div>
              <div className="bg-gradient-to-br from-[#D8B878]/10 to-[#C9A86A]/5 p-8 rounded-[18px] border-2 border-[#D8B878]/40">
                <p className="text-3xl font-black mb-3">
                  Your discount: <span className="gradient-text">{discount}%</span>
                </p>
                <p className="text-base text-muted">
                  Final pricing provided after a free on-site estimate.
                </p>
              </div>
              <Button variant="gold" size="lg" className="w-full" onClick={onEstimateClick}>
                Get Your Free Estimate
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <Guarantee onEstimateClick={onEstimateClick} />

      {/* Locations anchor for scroll */}
      <div id="locations-section" />
    </div>
  );
};

export default Home;
