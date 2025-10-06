import { Star, Shield, Award, Users } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#1A2332] text-white py-2 px-4 text-center border-b border-white/10">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-[#D4AF78] text-[#D4AF78]" />
          <span className="font-medium">4.9/5 Stars</span>
          <span className="text-white/60">· 500+ Reviews</span>
        </div>
        <div className="hidden sm:block text-white/30">|</div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-[#D4AF78]" />
          <span className="font-medium">15+ Years Excellence</span>
        </div>
        <div className="hidden sm:block text-white/30">|</div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4 text-[#D4AF78]" />
          <span className="font-medium">1,000+ Installations</span>
        </div>
        <div className="hidden sm:block text-white/30">|</div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-[#D4AF78]" />
          <span className="font-medium">Licensed & Insured</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
