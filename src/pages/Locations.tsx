import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

// Get cities from locations data and add additional cities without detail pages
const cities = [
  ...locations.map(loc => ({ name: loc.name, county: loc.county, slug: loc.slug })),
  { name: "Glendale", county: "Los Angeles County", slug: "" },
  { name: "Burbank", county: "Los Angeles County", slug: "" },
  { name: "Santa Monica", county: "Los Angeles County", slug: "" },
  { name: "Beverly Hills", county: "Los Angeles County", slug: "" },
  { name: "West Hollywood", county: "Los Angeles County", slug: "" },
  { name: "Culver City", county: "Los Angeles County", slug: "" },
  { name: "Torrance", county: "Los Angeles County", slug: "" },
  { name: "Long Beach", county: "Los Angeles County", slug: "" },
  { name: "Anaheim", county: "Orange County", slug: "" },
  { name: "Costa Mesa", county: "Orange County", slug: "" },
  { name: "Newport Beach", county: "Orange County", slug: "" },
  { name: "Huntington Beach", county: "Orange County", slug: "" },
  { name: "Carlsbad", county: "San Diego County", slug: "" },
  { name: "Encinitas", county: "San Diego County", slug: "" },
  { name: "La Jolla", county: "San Diego County", slug: "" },
  { name: "Del Mar", county: "San Diego County", slug: "" },
  { name: "Riverside", county: "Riverside County", slug: "" },
  { name: "Corona", county: "Riverside County", slug: "" },
  { name: "Temecula", county: "Riverside County", slug: "" },
  { name: "Murrieta", county: "Riverside County", slug: "" },
  { name: "Palm Springs", county: "Riverside County", slug: "" },
  { name: "Palm Desert", county: "Riverside County", slug: "" },
  { name: "Rancho Mirage", county: "Riverside County", slug: "" },
  { name: "Indio", county: "Riverside County", slug: "" },
  { name: "La Quinta", county: "Riverside County", slug: "" },
  { name: "Coachella", county: "Riverside County", slug: "" },
  { name: "San Bernardino", county: "San Bernardino County", slug: "" },
  { name: "Redlands", county: "San Bernardino County", slug: "" },
  { name: "Fontana", county: "San Bernardino County", slug: "" },
  { name: "Chino", county: "San Bernardino County", slug: "" },
  { name: "Ontario", county: "San Bernardino County", slug: "" },
  { name: "Santa Barbara", county: "Santa Barbara County", slug: "" },
  { name: "Ventura", county: "Ventura County", slug: "" },
  { name: "Oxnard", county: "Ventura County", slug: "" },
  { name: "Thousand Oaks", county: "Ventura County", slug: "" },
  { name: "Simi Valley", county: "Ventura County", slug: "" },
];

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const heroAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();

  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroAnimation.elementRef}
        className={`py-12 lg:py-16 px-4 transition-all duration-700
          ${
            heroAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "sm:opacity-0 sm:translate-y-10" /* Always visible on mobile */
          }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 gold-badge rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            40+ Cities Served
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Serving All of{" "}
            <span className="gradient-text">Southern California</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fast local service, professional installation, and lifetime support
            across Los Angeles, Orange County, San Diego, Inland Empire, and
            beyond.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by city or county..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg shadow-lg border-2 focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section
        ref={gridAnimation.elementRef}
        className={`py-12 px-4 transition-all duration-700
          ${
            gridAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "sm:opacity-0 sm:translate-y-10" /* Always visible on mobile */
          }`}
      >
        <div className="container mx-auto">
          {/* Results count */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {filteredCities.length}{" "}
              {filteredCities.length === 1 ? "location" : "locations"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCities.map((city, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {city.county}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-[#D4AF78]/20 rounded-full flex items-center justify-center group-hover:bg-[#D4AF78] group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5 text-[#1A2332] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="tel:6578955989"
                      className="block text-sm font-semibold text-[#D4AF78] hover:text-[#D4AF78]/80 transition-colors mb-3"
                    >
                      <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                      (657) 895-5989
                    </a>
                    <Button
                      size="sm"
                      className="w-full hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href="tel:6578955989">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    {city.slug ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-2 hover:bg-[#D4AF78]/10"
                        asChild
                      >
                        <Link to={`/locations/${city.slug}`}>
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-2 hover:bg-[#D4AF78]/10"
                        asChild
                      >
                        <a href="tel:6264304003">
                          Call for Info
                          <Phone className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF78]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-lg text-muted-foreground mb-2">
                No cities found matching "{searchQuery}"
              </p>
              <p className="text-sm text-muted-foreground">
                Try searching by city or county name
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-12 lg:py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Complete Southern California Coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Los Angeles County", cities: "15+ cities" },
              { name: "Orange County", cities: "5+ cities" },
              { name: "San Diego County", cities: "5+ cities" },
              { name: "Riverside County", cities: "10+ cities" },
              { name: "San Bernardino County", cities: "5+ cities" },
              { name: "Ventura & Santa Barbara", cities: "4+ cities" },
            ].map((county, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2">{county.name}</h3>
                <p className="text-sm text-muted-foreground">{county.cities}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See Your City?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We serve throughout Southern California. Contact us to confirm
              service availability in your area and get a free, no-obligation
              estimate.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                size="lg"
                asChild
                className="hover:scale-105 transition-transform"
              >
                <a href="tel:6264304003">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (626) 430-4003
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform border-2"
              >
                Request Free Estimate
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Locations;
