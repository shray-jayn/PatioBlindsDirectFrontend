import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield } from "lucide-react";

interface GuaranteeProps {
  onEstimateClick: () => void;
}

const Guarantee = ({ onEstimateClick }: GuaranteeProps) => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Promise to You</h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            We stand behind every installation with comprehensive warranties and lifetime craftsmanship support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Quality Guarantee",
              points: [
                "Premium materials only",
                "Expert installation",
                "No shortcuts taken",
              ],
            },
            {
              title: "Warranty Coverage",
              points: [
                "5-10 year warranty",
                "Parts & labor included",
                "Hassle-free claims",
              ],
            },
            {
              title: "Lifetime Support",
              points: [
                "Free consultations",
                "Maintenance guidance",
                "Priority service",
              ],
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="font-bold text-xl mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={onEstimateClick}
            className="bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl"
          >
            Get Your Free Estimate Now
          </Button>
          <p className="text-sm text-indigo-100 mt-4">
            ✓ No obligation  ✓ Free on-site visit  ✓ Same-day quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
