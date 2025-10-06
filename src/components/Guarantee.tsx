import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield } from "lucide-react";

interface GuaranteeProps {
  onEstimateClick: () => void;
}

const Guarantee = ({ onEstimateClick }: GuaranteeProps) => {
  return (
    <section
      className="relative py-12 lg:py-20 px-4"
      // LIGHT sand/ivory gradient + subtle gold glow (distinct from dark footer)
      style={{
        background:
          "radial-gradient(1000px 500px at 12% -10%, rgba(216,184,120,.18), transparent 60%), linear-gradient(180deg,#FBFAF8 0%,#F3EFE6 58%,#EDE6DA 100%)",
      }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black/5 rounded-2xl mb-4 shadow-sm">
            <Shield className="w-8 h-8 text-[#B99155]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#1F2A3A]">
            Our Promise to You
          </h2>
          <p className="text-[#5E6672] text-lg max-w-2xl mx-auto">
            We stand behind every installation with comprehensive warranties and
            lifetime craftsmanship support
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
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
            <Card
              key={index}
              className="p-6 rounded-2xl bg-white border border-[#E7E1D7] shadow-[0_10px_30px_rgba(18,20,23,.06)] hover:shadow-[0_30px_80px_rgba(18,20,23,.12)] transition-shadow"
            >
              <h3 className="font-bold text-xl mb-4 text-[#1F2A3A]">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#424A56]"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#B99155]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={onEstimateClick}
            className="rounded-xl px-6 py-6 bg-[#1F2A3A] hover:bg-[#2A3A52] text-white shadow-xl hover:shadow-2xl transition-all"
          >
            Get Your Free Estimate Now
          </Button>
          <p className="text-sm text-[#6E7782] mt-4">
            ✓ No obligation &nbsp; ✓ Free on-site visit &nbsp; ✓ Same-day quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
