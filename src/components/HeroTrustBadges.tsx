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
    <div className="bg-[#1A2332] py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4AF78]/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#D4AF78]/20 group-hover:scale-110">
                <badge.icon className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF78]" />
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                {badge.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTrustBadges;
