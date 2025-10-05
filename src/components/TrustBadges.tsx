import { Shield, Award, ThumbsUp, Clock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "5-10 Year Warranty" },
    { icon: ThumbsUp, text: "100% Satisfaction" },
    { icon: Clock, text: "Fast Installation" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
            <badge.icon className="w-4 h-4 text-primary" />
          </div>
          <span className="font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
