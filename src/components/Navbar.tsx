import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface NavbarProps {
  onEstimateClick: () => void;
}

const Navbar = ({ onEstimateClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PBD</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Patio Blinds Direct</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/how-it-works") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              How it Works
            </Link>
            <Link
              to="/commercial"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/commercial") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Commercial
            </Link>
            <Link
              to="/locations"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/locations") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Locations
            </Link>
            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/faq") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:6264304003" className="hidden sm:flex items-center gap-2 text-sm font-medium">
              <Phone className="w-4 h-4" />
              (626) 430-4003
            </a>
            <Button onClick={onEstimateClick} size="sm" className="font-medium">
              Contact Us — FREE Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
