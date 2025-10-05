import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onEstimateClick: () => void;
}

const Footer = ({ onEstimateClick }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0b0f] to-[#111318] text-foreground border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get a FREE On-Site Estimate</h2>
            <p className="text-muted-foreground mb-6">
              Call us now or request your visit. Most installs completed in days, not weeks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all glow-accent"
              >
                <a href="tel:6264304003">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (626) 430-4003
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onEstimateClick}
                className="glass-panel hover:glow-secondary transition-all hover:scale-105"
              >
                Request Free Estimate
              </Button>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 lg:p-8 glow-secondary">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Zip Track blinds up to 30 ft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>100% windproof sealing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Wire-secured option for alumawood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Manual cordless & motorized</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Smart-home connectivity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </h3>
              <p className="text-sm text-muted-foreground">
                Serving all Southern California
              </p>
              <Link to="/locations" className="text-sm text-primary hover:text-secondary transition-colors underline hover:no-underline">
                See all locations
              </Link>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </h3>
              <p className="text-sm text-muted-foreground">
                Phone: <a href="tel:6264304003" className="text-primary hover:text-secondary transition-colors hover:underline">(626) 430-4003</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Email: <a href="mailto:hello@patioblindsdirect.com" className="text-primary hover:text-secondary transition-colors hover:underline">hello@patioblindsdirect.com</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
                <Link to="/commercial" className="text-muted-foreground hover:text-primary transition-colors">
                  Commercial
                </Link>
                <Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">
                  Locations
                </Link>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Patio Blinds Direct. All rights reserved.</p>
            <p className="mt-1">patioblindsdirect.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
