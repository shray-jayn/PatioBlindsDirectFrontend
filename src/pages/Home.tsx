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
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-12 lg:pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF78]/10 to-transparent opacity-50 -z-10" />
        
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              ref={heroAnimation.elementRef}
              className={`space-y-6 transition-all duration-700 ${
                heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#D4AF78]/10 border border-[#D4AF78]/30">
                <span className="text-sm font-semibold text-[#1A2332]">
                  🏆 #1 Rated Patio Blind Installer in Southern California
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Premium Windproof Patio Blinds,{" "}
                <span className="gradient-text">Built to Last</span>
              </h1>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">
                  Choose our <span className="font-semibold text-foreground">Level 2 Zip Track</span> (100% windproof, up to 30 ft) or{" "}
                  <span className="font-semibold text-foreground">Level 1 Wire Secured</span> blinds ideal for alumawood covers.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Manual cordless, motorized & smart-home ready
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Fast local install. Lifetime craftsmanship support
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Serving cities across Southern California
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" onClick={onEstimateClick} className="transition-transform hover:scale-105 shadow-lg">
                  Contact Us — FREE Estimate
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToLocations}
                  className="transition-transform hover:scale-105 border-2"
                >
                  See Locations <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                ✓ Free on-site consultation  ✓ 2-3 day installation  ✓ Lifetime support
              </p>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Modern patio with windproof blinds"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <Card className="absolute bottom-4 right-4 left-4 lg:left-auto lg:w-80 p-6 surface-card border-2 border-[#D4AF78] animate-slide-up">
                <h3 className="font-bold text-lg mb-2">Bundle & Save</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Order 3+ save 5% • 5+ save 10% • 10+ save 15%
                </p>
                <Button variant="default" size="sm" className="w-full">
                  Calculate Savings →
                </Button>
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
        className={`py-12 lg:py-20 px-4 transition-all duration-700 ${
          productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Two Proven Systems, One Perfect Fit</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every patio is different. We'll recommend the best system for your space, goals, and wind exposure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="overflow-hidden group border-2 hover:border-primary card-hover">
              <img
                src={level2Image}
                alt="Level 2 Zip Track blinds"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-4">Level 2 Zip Track</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>100% windproof seal with side tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Spans up to 30 feet in a single run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Best for stucco & exposed patios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manual or motorized (smart-home ready)</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden group border-2 hover:border-primary card-hover">
              <img
                src={level1Image}
                alt="Level 1 Wire Secured blinds"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-4">Level 1 Wire Secured</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Discrete wire guides, clean look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ideal for alumawood roll hides between ridges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Excellent wind resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manual cordless or motorized</span>
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
        className={`py-12 lg:py-20 px-4 bg-white transition-all duration-700 ${
          processAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">A Smooth, 4-Step Experience</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="p-6 border-2 hover:border-primary card-hover bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section
        ref={calculatorAnimation.elementRef}
        className={`py-12 lg:py-20 px-4 transition-all duration-700 ${
          calculatorAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 lg:p-12 bg-white border-2 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Estimate Your Bundle Savings</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="blind-count" className="block text-sm font-medium mb-2">
                  How many blinds are you ordering?
                </label>
                <Input
                  id="blind-count"
                  type="number"
                  min="1"
                  value={blindCount}
                  onChange={(e) => setBlindCount(parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>
              <div style={{ background: 'var(--bg-secondary)' }} className="p-6 rounded-xl border-2 border-[#D4AF78]/30">
                <p className="text-2xl font-bold mb-2">
                  Your discount: <span className="gradient-text font-bold">{discount}%</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Final pricing provided after a free on-site estimate.
                </p>
              </div>
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
