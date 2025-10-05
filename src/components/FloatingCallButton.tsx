import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:6264304003"
      className={`fixed bottom-6 right-6 z-50 md:hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-2xl glow-accent hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default FloatingCallButton;
