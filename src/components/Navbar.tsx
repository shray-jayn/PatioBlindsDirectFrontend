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

  /* ===== Scroll style ===== */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Close drawer on route change ===== */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* ===== Lock body scroll when drawer open ===== */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                PBD
              </span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">
              Patio Blinds Direct
            </span>
          </Link>

          {/* Desktop nav */}
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
                isActive("/how-it-works")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              How it Works
            </Link>
            <Link
              to="/commercial"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/commercial")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Commercial
            </Link>
            <Link
              to="/locations"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/locations")
                  ? "text-primary"
                  : "text-muted-foreground"
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

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:6264304003"
              className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 hover:bg-[#D4AF78]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYER (portal-style, fullscreen) ===== */}
      {/* Dim overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sliding drawer panel */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed top-0 right-0 z-[101] md:hidden h-dvh w-screen max-w-sm bg-white shadow-2xl
                    transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 pt-[max(12px,env(safe-area-inset-top))] pb-3 border-b">
          <span className="font-semibold">Menu</span>
          <button
            className="p-2 -mr-2 rounded-lg hover:bg-[#D4AF78]/10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex flex-col h-[calc(100dvh-56px)] overflow-y-auto p-4 gap-2">
          {[
            { to: "/products", label: "Products" },
            { to: "/how-it-works", label: "How it Works" },
            { to: "/commercial", label: "Commercial" },
            { to: "/locations", label: "Locations" },
            { to: "/faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                isActive(item.to)
                  ? "bg-[#D4AF78]/10 text-primary"
                  : "hover:bg-[#D4AF78]/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-border pt-4 mt-2">
            <a
              href="tel:6264304003"
              className="flex items-center gap-2 text-lg font-medium py-3 px-4 rounded-lg hover:bg-[#D4AF78]/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (626) 430-4003
            </a>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onEstimateClick();
              }}
              size="lg"
              className="w-full mt-4 font-medium hover:shadow-lg"
            >
              Contact Us — FREE Estimate
            </Button>
          </div>

          {/* Safe area spacer */}
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
