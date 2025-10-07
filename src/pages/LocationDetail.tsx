import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, ArrowLeft, CheckCircle2, MapPin, Mail } from "lucide-react";
import { getLocationBySlug } from "@/data/locations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import level2Image from "@/assets/Blind2.png";
import level1Image from "@/assets/Blind1.png";

interface LocationDetailProps {
  onEstimateClick: () => void;
}

const LocationDetail = ({ onEstimateClick }: LocationDetailProps) => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();
  const heroAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();

  const location = city ? getLocationBySlug(city) : undefined;

  if (!location) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find information for this location.
          </p>
          <Button asChild>
            <Link to="/locations">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Locations
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-12">
      {/* Back button */}
      <div className="container mx-auto px-4 mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/locations")}
          className="hover:bg-[#D4AF78]/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Locations
        </Button>
      </div>

      {/* Hero Section */}
      <section
        ref={heroAnimation.elementRef}
        className={`pb-12 px-4 transition-all duration-700 ${
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF78]/10 border border-[#D4AF78]/30 mb-4">
              <MapPin className="w-4 h-4 text-[#1A2332]" />
              <span className="text-sm font-semibold text-[#1A2332]">
                {location.county}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Patio Blinds in <span className="gradient-text">{location.name}</span>
            </h1>
          </div>

          {/* Contact CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <a href={`tel:${location.phone.replace(/\D/g, '')}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {location.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onEstimateClick}
              className="border-2 hover:scale-105 transition-transform"
            >
              Request Free Estimate
            </Button>
          </div>

          {/* Description */}
          <Card className="p-8 bg-white border-2 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Why Patio Blinds in {location.name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {location.description}
            </p>
          </Card>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Common Patio Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {location.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        ref={productsAnimation.elementRef}
        className={`py-12 px-4 transition-all duration-700 ${
          productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Level 2 */}
            <Card className="overflow-hidden group border-2 hover:border-primary card-hover">
              <img
                src={level2Image}
                alt="Level 2 Zip Track blinds"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Level 2 Zip Track — Maximum Protection</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">100% windproof seal using side tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Spans up to 30 feet per run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Excellent for exposed or corner patios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Manual or motorized with smart-home integration</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Level 1 */}
            <Card className="overflow-hidden group border-2 hover:border-primary card-hover">
              <img
                src={level1Image}
                alt="Level 1 Wire Secured blinds"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Level 1 Wire Secured — Minimal Look for Alumawood</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Discreet stainless wire guides for a minimal look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ideal for alumawood—roll can hide between ridges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Excellent wind resistance for most homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Manual cordless or motorized options</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsAnimation.elementRef}
        className={`py-12 px-4 bg-white transition-all duration-700 ${
          testimonialsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Local Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {location.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-2">
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">
                  — {testimonial.author} — {testimonial.location}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-[#D4AF78]/10 to-white border-2 border-[#D4AF78]/30">
            <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call for a quick consult or request a free on‑site estimate. We confirm measurements, finalize fabrics, and schedule a clean, warrantied install.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="hover:scale-105 transition-transform">
                <a href={`tel:${location.phone.replace(/\D/g, '')}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {location.phone}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onEstimateClick}
                className="border-2 hover:scale-105 transition-transform"
              >
                Request Free Estimate
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-[#1A2332] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Patio Blinds Direct in {location.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <CheckCircle2 className="w-12 h-12 text-[#D4AF78] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Factory‑direct quality</h3>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-[#D4AF78] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Wind‑tested engineering</h3>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-[#D4AF78] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Clean, warrantied installs</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LocationDetail;
