import { Card } from "@/components/ui/card";
import { Shield, Zap, Sun, Snowflake, Volume2, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Benefits = () => {
  const animation = useScrollAnimation();

  const benefits = [
    {
      icon: Shield,
      title: "Wind Protection",
      description: "100% windproof seal protects against Santa Ana winds and coastal breezes",
    },
    {
      icon: Sun,
      title: "UV & Heat Control",
      description: "Block up to 95% of harmful UV rays while controlling heat and glare",
    },
    {
      icon: Snowflake,
      title: "Energy Savings",
      description: "Reduce cooling costs by maintaining comfortable outdoor temperatures",
    },
    {
      icon: Volume2,
      title: "Noise Reduction",
      description: "Dampen outside noise for a more peaceful outdoor experience",
    },
    {
      icon: Smartphone,
      title: "Smart Control",
      description: "Alexa, Google, and HomeKit integration for effortless operation",
    },
    {
      icon: Zap,
      title: "Fast Install",
      description: "Most residential projects completed in 1-2 days with minimal disruption",
    },
  ];

  return (
    <section
      ref={animation.elementRef}
      className={`py-12 lg:py-20 px-4 transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Choose Patio Blinds Direct?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium features designed specifically for Southern California living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 card-hover bg-white border-2 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C6A66B]/20 rounded-2xl mb-4">
                <benefit.icon className="w-8 h-8 text-[#2B3856]" />
              </div>
              <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
