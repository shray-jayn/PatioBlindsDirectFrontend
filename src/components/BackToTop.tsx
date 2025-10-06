import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      size="lg"
      variant="outline"
      className={`fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center
        rounded-full w-12 h-12 glass-panel glow-accent transition-all duration-500
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default BackToTop;
