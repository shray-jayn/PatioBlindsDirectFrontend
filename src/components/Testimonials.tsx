import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const animation = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Absolutely love our new patio blinds! The Level 2 system is windproof even during Santa Ana winds. Installation was quick and professional.",
    },
    {
      name: "Michael Chen",
      location: "San Diego, CA",
      rating: 5,
      text: "Best investment for our outdoor space. The motorized blinds are perfect, and the smart home integration works flawlessly. Highly recommend!",
    },
    {
      name: "Emily Rodriguez",
      location: "Pasadena, CA",
      rating: 5,
      text: "From estimate to installation, everything was seamless. Our alumawood patio looks amazing with the Level 1 wire-secured blinds. Worth every penny!",
    },
  ];

  return (
    <section
      ref={animation.elementRef}
      className={`py-12 lg:py-20 px-4 bg-slate-50 transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            5.0 Average Rating
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Loved by California Homeowners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about their patio transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 card-hover bg-white border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
