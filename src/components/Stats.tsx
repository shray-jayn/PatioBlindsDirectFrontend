import { Award, Users, MapPin, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "5,000+", label: "Happy Customers" },
    { icon: MapPin, value: "40+", label: "Cities Served" },
    { icon: Clock, value: "2-3", label: "Day Installation" },
  ];

  return (
    <section className="py-12 lg:py-16 px-4 border-y border-border bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C6A66B]/20 rounded-full mb-3">
              <stat.icon className="w-6 h-6 text-[#2B3856]" />
            </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#2B3856] mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
