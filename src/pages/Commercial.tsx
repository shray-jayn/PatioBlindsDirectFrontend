import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CommercialProps {
  onEstimateClick: () => void;
}

const Commercial = ({ onEstimateClick }: CommercialProps) => {
  const heroAnimation = useScrollAnimation();
  const casesAnimation = useScrollAnimation();
  const specsAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroAnimation.elementRef}
        className={`py-12 lg:py-20 px-4 transition-all duration-700 ${
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-center">Commercial Patio Blinds</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Restaurants, hotels, resorts, and commercial properties trust our systems for reliable wind protection,
            flexible climate control, and seamless smart-home integration.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Large spans up to 30 ft per blind",
              "Off-hours installs to minimize disruption",
              "Smart controls & scheduling",
              "Durable commercial-grade fabrics",
              "Volume pricing & project management",
              "Full design consultation & site survey",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={onEstimateClick} className="transition-transform hover:scale-105">
              Get a Bid
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="transition-transform hover:scale-105 border-2"
            >
              <a href="tel:6578955989">
                <Phone className="w-4 h-4 mr-2" />
                Call Sales
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={casesAnimation.elementRef}
        className={`py-12 lg:py-20 px-4 bg-secondary/50 transition-all duration-700 ${
          casesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">Recent Projects</h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Rooftop Bar, Downtown LA",
                scope: "8 x Level 2 Zip Track (14 ft wide each)",
                integration: "Integrated with building automation",
                install: "Weekend install with minimal downtime",
                results: "Extended usable season, +30% guest capacity",
              },
              {
                title: "Beachfront Restaurant, Santa Monica",
                scope: "12 x Level 2 Zip Track on oceanfront deck",
                integration: "Wind sensor auto-close at 25 mph",
                install: "Completed during off-season",
                results: "Reduced HVAC costs, year-round outdoor dining",
              },
              {
                title: "Resort Cabanas, Palm Springs",
                scope: "20 x Level 1 Wire Secured for poolside",
                integration: "Mobile app control per cabana",
                install: "Phased install over 2 weeks",
                results: "Premium guest experience, easy staff operation",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="p-6 border-2 hover:border-primary card-hover bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Scope:</span> {project.scope}
                  </div>
                  <div>
                    <span className="font-semibold">Integration:</span> {project.integration}
                  </div>
                  <div>
                    <span className="font-semibold">Install:</span> {project.install}
                  </div>
                  <div>
                    <span className="font-semibold">Results:</span> {project.results}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Options */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Specs & Options</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 hover:border-primary card-hover bg-white">
              <h3 className="font-bold text-lg mb-4">Control Options</h3>
              <ul className="space-y-2 text-sm">
                <li>• Manual cordless operation</li>
                <li>• Motorized with remote</li>
                <li>• Smart-home integration (Alexa, Google, HomeKit)</li>
                <li>• Building automation system (BACnet, Modbus)</li>
                <li>• Wind/sun sensors</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-primary card-hover bg-white">
              <h3 className="font-bold text-lg mb-4">Fabric & Finish</h3>
              <ul className="space-y-2 text-sm">
                <li>• Sunscreen (90-95% UV block, see-through)</li>
                <li>• Blackout (100% light block)</li>
                <li>• Mesh (airflow + privacy)</li>
                <li>• Custom colors & patterns</li>
                <li>• Fire-rated options for commercial code</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-primary card-hover bg-white">
              <h3 className="font-bold text-lg mb-4">Hardware</h3>
              <ul className="space-y-2 text-sm">
                <li>• Powder-coated aluminum tracks</li>
                <li>• Stainless steel fasteners (coastal grade)</li>
                <li>• UV-resistant components</li>
                <li>• Wind-rated to 60+ mph (Level 2)</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-primary card-hover bg-white">
              <h3 className="font-bold text-lg mb-4">Service & Support</h3>
              <ul className="space-y-2 text-sm">
                <li>• Commercial warranty (5-10 years)</li>
                <li>• 24/7 emergency service available</li>
                <li>• Staff training on operation</li>
                <li>• Preventive maintenance plans</li>
                <li>• Rapid replacement parts stock</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 px-4 bg-gradient-to-br from-slate-50 to-white border-t">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 lg:p-12 text-center bg-white border-2 shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready for Premium Patio Blinds?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Large-scale projects, off-hours installation, and dedicated project management available.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-lg">
                <a href="tel:6264304003">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Commercial Sales
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={onEstimateClick} className="hover:scale-105 transition-transform border-2">
                Request Bid
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
