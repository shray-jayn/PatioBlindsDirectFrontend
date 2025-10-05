import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  onEstimateClick: () => void;
}

const Navbar = ({ onEstimateClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-border" : "bg-white/80 backdrop-blur-sm"
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
            <a href="tel:6264304003" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (626) 430-4003
            </a>
            <Button 
              onClick={onEstimateClick} 
              size="sm" 
              className="font-medium hover:shadow-lg hover:scale-105 transition-all hidden md:flex"
            >
              Contact Us — FREE Estimate
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#D4AF78]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 lg:top-20 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 gap-4 overflow-y-auto">
          <Link
            to="/products"
            className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
              isActive("/products") ? "bg-[#D4AF78]/10 text-primary" : "hover:bg-[#D4AF78]/10"
            }`}
          >
            Products
          </Link>
          <Link
            to="/how-it-works"
            className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
              isActive("/how-it-works") ? "bg-[#D4AF78]/10 text-primary" : "hover:bg-[#D4AF78]/10"
            }`}
          >
            How it Works
          </Link>
          <Link
            to="/commercial"
            className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
              isActive("/commercial") ? "bg-[#D4AF78]/10 text-primary" : "hover:bg-[#D4AF78]/10"
            }`}
          >
            Commercial
          </Link>
          <Link
            to="/locations"
            className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
              isActive("/locations") ? "bg-[#D4AF78]/10 text-primary" : "hover:bg-[#D4AF78]/10"
            }`}
          >
            Locations
          </Link>
          <Link
            to="/faq"
            className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
              isActive("/faq") ? "bg-[#D4AF78]/10 text-primary" : "hover:bg-[#D4AF78]/10"
            }`}
          >
            FAQ
          </Link>

          <div className="border-t border-border pt-4 mt-2">
            <a 
              href="tel:6264304003" 
              className="flex items-center gap-2 text-lg font-medium py-3 px-4 hover:bg-[#D4AF78]/10 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              (626) 430-4003
            </a>
            <Button 
              onClick={onEstimateClick} 
              size="lg" 
              className="w-full mt-4 font-medium hover:shadow-lg"
            >
              Contact Us — FREE Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
