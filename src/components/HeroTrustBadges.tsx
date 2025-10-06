import { Shield, Award, Users, TrendingUp } from "lucide-react";

const HeroTrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      subtitle: "CA License #1234567",
    },
    {
      icon: Users,
      title: "1,000+ Installations",
      subtitle: "Across Southern California",
    },
    {
      icon: Award,
      title: "15+ Years",
      subtitle: "Industry Excellence",
    },
    {
      icon: TrendingUp,
      title: "Top-Rated",
      subtitle: "4.9/5 Star Reviews",
    },
  ];

  return (
    <div className="bg-dusk py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="icon-medallion mb-4">
                <badge.icon className="w-7 h-7 md:w-8 md:h-8 text-[#D8B878]" />
              </div>
              <h3 className="text-white font-black text-base md:text-lg mb-2 tracking-tight">
                {badge.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTrustBadges;
