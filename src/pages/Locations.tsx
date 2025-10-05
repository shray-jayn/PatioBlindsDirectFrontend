import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Search } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  "Los Angeles", "Pasadena", "Glendale", "Burbank", "Santa Monica",
  "Beverly Hills", "West Hollywood", "Culver City", "Torrance", "Long Beach",
  "Anaheim", "Irvine", "Costa Mesa", "Newport Beach", "Huntington Beach",
  "San Diego", "Carlsbad", "Encinitas", "La Jolla", "Del Mar",
  "Riverside", "Corona", "Temecula", "Murrieta", "Palm Springs",
  "Palm Desert", "Rancho Mirage", "Indio", "La Quinta", "Coachella",
  "San Bernardino", "Redlands", "Fontana", "Chino", "Ontario",
  "Santa Barbara", "Ventura", "Oxnard", "Thousand Oaks", "Simi Valley",
];

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const heroAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroAnimation.elementRef}
        className={`py-12 lg:py-16 px-4 transition-all duration-700 ${
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Serving Southern California</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Fast local service across Los Angeles, Orange County, San Diego, Inland Empire, and beyond.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section
        ref={gridAnimation.elementRef}
        className={`py-12 px-4 transition-all duration-700 ${
          gridAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCities.map((city, index) => (
              <Card
                key={index}
                className="p-6 glass-panel card-tilt glow-accent group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-lg">{city}</h3>
                </div>
                <div className="space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full transition-transform group-hover:scale-105"
                    asChild
                  >
                    <a href="tel:6264304003">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-full text-primary hover:text-primary"
                  >
                    Learn More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No cities found matching "{searchQuery}". Try a different search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Don't See Your City?</h2>
          <p className="text-muted-foreground mb-6">
            We serve throughout Southern California. Contact us to confirm service in your area.
          </p>
          <Button size="lg" asChild className="transition-transform hover:scale-105">
            <a href="tel:6264304003">
              <Phone className="w-4 h-4 mr-2" />
              Call (626) 430-4003
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Locations;
