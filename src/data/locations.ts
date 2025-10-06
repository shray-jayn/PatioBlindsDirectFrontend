export interface Location {
  name: string;
  slug: string;
  county: string;
  phone: string;
  description: string;
  challenges: string[];
  testimonials: {
    quote: string;
    author: string;
    location: string;
  }[];
}

export const locations: Location[] = [
  {
    name: "Artesia",
    slug: "artesia",
    county: "Los Angeles County",
    phone: "(555) 010-1002",
    description: "Homes in Artesia deal with sunny backyard gatherings most of the year. We design patio blinds for alumawood patio covers and pergolas that block wind and dust while preserving the view. Expect factory-direct pricing and measured-to-fit panels. We've completed installs across neighborhoods in and around Artesia, balancing shade, airflow, and clear sightlines.",
    challenges: [
      "Gusty evenings that make dining outdoors uncomfortable",
      "Dust and pollen drifting across the patio",
      "Glare and heat on west-facing sliders",
      "Furniture damage from wind-driven debris",
      "HOA-friendly solutions needed for alumawood covers"
    ],
    testimonials: [
      {
        quote: "Motorized blinds + scenes changed our routine. Dinner outside again!",
        author: "S. Patel",
        location: "Artesia"
      },
      {
        quote: "The 30‑ft span looks seamless and blocks dust from the alley.",
        author: "M. Johnson",
        location: "Artesia"
      }
    ]
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Los Angeles patios face diverse challenges from coastal winds to urban dust. Our patio blinds are engineered for the unique LA climate, providing protection from Santa Ana winds while maintaining your view. We serve all neighborhoods across LA with custom solutions for every type of outdoor space.",
    challenges: [
      "Strong Santa Ana winds disrupting outdoor spaces",
      "Urban dust and pollution settling on patios",
      "Intense afternoon sun exposure",
      "Privacy concerns in dense neighborhoods",
      "Need for modern aesthetic matching LA architecture"
    ],
    testimonials: [
      {
        quote: "These blinds transformed our Venice patio. Wind protection without losing the ocean breeze!",
        author: "R. Martinez",
        location: "Los Angeles"
      },
      {
        quote: "Perfect for our Hollywood Hills home. Sleek design and bulletproof construction.",
        author: "K. Chen",
        location: "Los Angeles"
      }
    ]
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Pasadena's classic architecture meets modern outdoor living with our custom patio blinds. Whether you have a historic Craftsman or contemporary home, we provide windproof solutions that complement your style while protecting from the area's notorious winds and sun.",
    challenges: [
      "Hot summer temperatures requiring effective shade",
      "Wind funnels between buildings in older neighborhoods",
      "Maintaining historic home aesthetics",
      "Debris from mature trees",
      "Balancing ventilation with wind protection"
    ],
    testimonials: [
      {
        quote: "They matched our Craftsman aesthetic perfectly. Quality installation from start to finish.",
        author: "D. Thompson",
        location: "Pasadena"
      },
      {
        quote: "Our courtyard is finally usable year-round. Smart home integration works flawlessly.",
        author: "L. Park",
        location: "Pasadena"
      }
    ]
  },
  {
    name: "Irvine",
    slug: "irvine",
    county: "Orange County",
    phone: "(626) 430-4003",
    description: "Irvine homes demand premium quality and modern design. Our patio blinds meet strict HOA requirements while providing superior wind and sun protection. We understand the unique needs of Irvine's planned communities and deliver solutions that enhance property value.",
    challenges: [
      "Strict HOA design guidelines and approvals",
      "Coastal winds from nearby Newport Beach",
      "Need for clean, contemporary aesthetics",
      "High sun exposure in summer months",
      "Desire for smart home integration"
    ],
    testimonials: [
      {
        quote: "HOA approved immediately. The motorized system is exactly what we needed.",
        author: "A. Wilson",
        location: "Irvine"
      },
      {
        quote: "Premium quality that matches our home's modern design. Worth every penny.",
        author: "J. Lee",
        location: "Irvine"
      }
    ]
  },
  {
    name: "San Diego",
    slug: "san-diego",
    county: "San Diego County",
    phone: "(626) 430-4003",
    description: "San Diego's coastal climate requires specialized patio solutions. Our blinds stand up to salt air, coastal winds, and intense sun while maintaining the indoor-outdoor lifestyle San Diego is famous for. Perfect for everything from beach homes to inland communities.",
    challenges: [
      "Salt air corrosion near the coast",
      "Strong coastal winds year-round",
      "UV damage from consistent sunshine",
      "Privacy needs for close-set homes",
      "Maintaining ocean views while blocking wind"
    ],
    testimonials: [
      {
        quote: "Living near the beach, we needed something durable. These blinds handle the salt air perfectly.",
        author: "M. Anderson",
        location: "San Diego"
      },
      {
        quote: "Finally can enjoy our patio during those strong evening winds. Game changer!",
        author: "C. Rodriguez",
        location: "San Diego"
      }
    ]
  }
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(loc => loc.slug === slug);
};

// Helper to get all location slugs (useful for generating routes)
export const getAllLocationSlugs = (): string[] => {
  return locations.map(loc => loc.slug);
};
