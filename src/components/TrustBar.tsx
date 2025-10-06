import { Star, Shield, Award, Users } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#1F2A3A] text-white py-2.5 px-4 text-center border-b border-[#D8B878]/20 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-[#D8B878] text-[#D8B878]" />
          <span className="font-bold">4.9/5 Stars</span>
          <span className="text-white/60">· 500+ Reviews</span>
        </div>
        <div className="hidden sm:block text-[#D8B878]/30">|</div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#D8B878]" />
          <span className="font-bold">15+ Years Excellence</span>
        </div>
        <div className="hidden sm:block text-[#D8B878]/30">|</div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#D8B878]" />
          <span className="font-bold">1,000+ Installations</span>
        </div>
        <div className="hidden sm:block text-[#D8B878]/30">|</div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#D8B878]" />
          <span className="font-bold">Licensed & Insured</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
