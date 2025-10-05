import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQProps {
  onEstimateClick: () => void;
}

const FAQ = ({ onEstimateClick }: FAQProps) => {
  const heroAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const faqs = [
    {
      question: "What's the difference between Level 1 and Level 2 blinds?",
      answer:
        "Level 2 Zip Track blinds feature side tracks that create a 100% windproof seal and can span up to 30 feet. They're ideal for exposed patios and high-wind areas. Level 1 Wire Secured blinds use discrete wire guides for a cleaner look, perfect for alumawood pergolas where the roller tube hides between ridges. Both offer excellent wind resistance and can be manual or motorized.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most residential installs are completed in 1-2 days, depending on the number of blinds and complexity. Commercial projects vary based on scope but typically take 3-7 days. We schedule around your availability and minimize disruption.",
    },
    {
      question: "Can I control the blinds with my smartphone?",
      answer:
        "Yes! Our motorized blinds can integrate with smart home systems including Alexa, Google Home, and Apple HomeKit. You can control them via app, voice commands, or set automated schedules based on time, temperature, or wind conditions.",
    },
    {
      question: "What fabrics are available?",
      answer:
        "We offer sunscreen fabrics (90-95% UV block with see-through visibility), blackout fabrics (100% light block), and mesh options for airflow with privacy. All fabrics are UV-resistant and designed for outdoor use. Custom colors and patterns are available for commercial projects.",
    },
    {
      question: "How do the blinds handle wind?",
      answer:
        "Level 2 Zip Track blinds are wind-rated to 60+ mph thanks to their side track system. Level 1 Wire Secured blinds also provide excellent wind resistance. Both systems can be equipped with wind sensors that automatically retract the blinds if wind speeds exceed your set threshold.",
    },
    {
      question: "Do you offer warranties?",
      answer:
        "Yes, we provide comprehensive warranties covering materials and workmanship. Residential installations typically include a 5-year warranty, while commercial projects can receive 5-10 year warranties depending on the system. We also offer lifetime craftsmanship support.",
    },
    {
      question: "How much do patio blinds cost?",
      answer:
        "Pricing varies based on size, system type (Level 1 vs Level 2), fabric choice, and control options (manual vs motorized). We offer bundle discounts: 3+ blinds save 5%, 5+ save 10%, and 10+ save 15%. Contact us for a free on-site estimate and exact pricing.",
    },
    {
      question: "Can you install on existing structures?",
      answer:
        "Absolutely! We install on existing alumawood pergolas, stucco patios, wood structures, and more. During our free site visit, we assess your structure and recommend the best mounting approach to ensure long-term durability.",
    },
    {
      question: "Do I need building permits?",
      answer:
        "Most residential patio blind installations don't require permits, but regulations vary by city. For commercial projects, permits are typically required. We handle all permit applications and ensure full code compliance as part of our service.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all of Southern California including Los Angeles County, Orange County, San Diego County, Riverside County, San Bernardino County, Ventura County, and Santa Barbara County. Check our Locations page for specific cities or call to confirm service in your area.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroAnimation.elementRef}
        className={`py-12 lg:py-16 px-4 transition-all duration-700 ${
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our patio blinds, installation, and service.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        ref={faqAnimation.elementRef}
        className={`py-12 px-4 transition-all duration-700 ${
          faqAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-xl px-6 bg-white hover:border-primary card-hover"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 px-4 bg-gradient-to-br from-slate-50 to-white border-t">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 lg:p-12 text-center bg-white border-2 shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Patio?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get expert advice and a free estimate. Most projects completed in 2-3 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-lg">
                <a href="tel:6264304003">Call (626) 430-4003</a>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform border-2">
                Request Free Estimate
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
