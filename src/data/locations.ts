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
    phone: "(626) 430-4003",
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
  },
  {
    name: "Glendale",
    slug: "glendale",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Glendale patios need protection from intense valley heat and gusty canyon winds. Our patio blinds provide excellent shade and wind resistance while complementing both traditional and modern homes throughout the community.",
    challenges: [
      "Valley heat creating uncomfortable outdoor spaces",
      "Canyon winds sweeping through neighborhoods",
      "Need for UV protection on south-facing patios",
      "Balancing privacy with mountain views",
      "Matching diverse architectural styles"
    ],
    testimonials: [
      {
        quote: "Our patio went from unusable to our favorite room. The motorized system is incredible.",
        author: "T. Garcia",
        location: "Glendale"
      },
      {
        quote: "Perfect wind protection without blocking our mountain view.",
        author: "K. Simons",
        location: "Glendale"
      }
    ]
  },
  {
    name: "Burbank",
    slug: "burbank",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Burbank homeowners value quality and functionality. Our patio blinds deliver both, with windproof designs that stand up to valley conditions while maintaining the clean, professional aesthetic the city is known for.",
    challenges: [
      "Hot summer temperatures in the valley",
      "Dust from nearby studios and construction",
      "Wind gusts during afternoon hours",
      "Need for noise reduction from street traffic",
      "Modern aesthetic for contemporary homes"
    ],
    testimonials: [
      {
        quote: "These blinds cut the heat and noise. Our backyard is finally peaceful.",
        author: "R. Stevens",
        location: "Burbank"
      },
      {
        quote: "Factory-direct pricing saved us thousands. Quality is outstanding.",
        author: "L. Nguyen",
        location: "Burbank"
      }
    ]
  },
  {
    name: "Santa Monica",
    slug: "santa-monica",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Santa Monica's coastal location demands blinds that can handle salt air, ocean winds, and bright sun. Our marine-grade solutions protect your patio while preserving those stunning ocean breezes and views.",
    challenges: [
      "Constant ocean winds year-round",
      "Salt air causing premature wear",
      "Intense UV exposure near the coast",
      "Sand and debris accumulation",
      "Maintaining sleek coastal aesthetic"
    ],
    testimonials: [
      {
        quote: "Built to last in salt air. Two years in and they still look brand new.",
        author: "B. Morrison",
        location: "Santa Monica"
      },
      {
        quote: "Perfect balance of wind protection and ocean breeze. Exactly what we needed.",
        author: "A. Chen",
        location: "Santa Monica"
      }
    ]
  },
  {
    name: "Beverly Hills",
    slug: "beverly-hills",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Beverly Hills demands premium quality and sophisticated design. Our patio blinds deliver luxury-grade materials, precision engineering, and elegant aesthetics that complement the finest homes in Southern California.",
    challenges: [
      "Meeting high aesthetic standards",
      "Integrating with luxury smart home systems",
      "Providing privacy without compromising views",
      "Matching architectural sophistication",
      "Delivering white-glove service expectations"
    ],
    testimonials: [
      {
        quote: "Finally, patio blinds that match the quality of our home. Absolutely stunning.",
        author: "M. Richardson",
        location: "Beverly Hills"
      },
      {
        quote: "Seamless integration with our home automation. True luxury product.",
        author: "D. Foster",
        location: "Beverly Hills"
      }
    ]
  },
  {
    name: "West Hollywood",
    slug: "west-hollywood",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "West Hollywood's modern urban lifestyle meets our contemporary patio solutions. Perfect for rooftop decks, balconies, and patios, our blinds offer style, privacy, and protection in the heart of the city.",
    challenges: [
      "Urban wind tunnels between buildings",
      "Privacy concerns in dense neighborhoods",
      "Limited space requiring compact solutions",
      "Modern aesthetic for contemporary homes",
      "Integration with apartment and condo architecture"
    ],
    testimonials: [
      {
        quote: "Transformed our rooftop deck into a private oasis. Worth every penny.",
        author: "J. Martinez",
        location: "West Hollywood"
      },
      {
        quote: "Sleek design perfect for our modern condo. Installation was flawless.",
        author: "S. Kim",
        location: "West Hollywood"
      }
    ]
  },
  {
    name: "Culver City",
    slug: "culver-city",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Culver City's mix of classic and modern homes requires versatile patio solutions. Our blinds adapt to any architectural style while providing superior wind protection and sun control throughout the year.",
    challenges: [
      "Afternoon winds from the coast",
      "Mix of architectural styles to match",
      "Urban dust and air quality",
      "Need for both shade and airflow",
      "HOA requirements in newer developments"
    ],
    testimonials: [
      {
        quote: "Perfect match for our mid-century home. The quality speaks for itself.",
        author: "P. Anderson",
        location: "Culver City"
      },
      {
        quote: "Finally can use our patio during windy afternoons. Game changer!",
        author: "R. Taylor",
        location: "Culver City"
      }
    ]
  },
  {
    name: "Torrance",
    slug: "torrance",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Torrance enjoys beautiful weather year-round, but coastal winds can disrupt outdoor living. Our patio blinds provide effective wind barriers while maintaining the breezy, relaxed atmosphere South Bay is known for.",
    challenges: [
      "Strong coastal winds in spring",
      "Salt air affecting durability",
      "Need for sun control on west-facing patios",
      "Maintaining views while blocking wind",
      "HOA compliance in planned communities"
    ],
    testimonials: [
      {
        quote: "These blinds handle the coastal wind perfectly. Our patio is usable every day now.",
        author: "M. Williams",
        location: "Torrance"
      },
      {
        quote: "Great quality at factory-direct pricing. Highly recommend!",
        author: "K. Patel",
        location: "Torrance"
      }
    ]
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    county: "Los Angeles County",
    phone: "(626) 430-4003",
    description: "Long Beach's waterfront location requires durable, wind-resistant patio solutions. Our marine-grade blinds withstand coastal conditions while enhancing your outdoor living space with style and functionality.",
    challenges: [
      "Constant ocean winds and gusts",
      "Salt spray and moisture",
      "UV damage from beachfront exposure",
      "Privacy needs in close neighborhoods",
      "Matching diverse coastal architecture"
    ],
    testimonials: [
      {
        quote: "Living by the water, we needed something tough. These blinds exceed expectations.",
        author: "C. Thompson",
        location: "Long Beach"
      },
      {
        quote: "Perfect for our beachfront patio. Wind protection without losing the view.",
        author: "A. Rodriguez",
        location: "Long Beach"
      }
    ]
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    county: "Orange County",
    phone: "(626) 430-4003",
    description: "Anaheim's inland location means hot summers and gusty Santa Ana winds. Our patio blinds provide essential shade and wind protection, making your outdoor space comfortable year-round for family gatherings and entertaining.",
    challenges: [
      "Intense summer heat requiring shade",
      "Santa Ana winds disrupting outdoor activities",
      "Dust from dry conditions",
      "Need for durable, low-maintenance solutions",
      "HOA requirements in residential communities"
    ],
    testimonials: [
      {
        quote: "Our backyard is finally comfortable in summer. The motorized blinds are amazing.",
        author: "T. Johnson",
        location: "Anaheim"
      },
      {
        quote: "Excellent wind protection and easy to operate. Very happy with our choice.",
        author: "L. Martinez",
        location: "Anaheim"
      }
    ]
  },
  {
    name: "Costa Mesa",
    slug: "costa-mesa",
    county: "Orange County",
    phone: "(626) 430-4003",
    description: "Costa Mesa combines coastal breezes with urban living. Our patio blinds strike the perfect balance, blocking harsh winds while allowing gentle ocean air to flow through, all with a modern aesthetic that matches the city's contemporary vibe.",
    challenges: [
      "Coastal winds without direct ocean exposure",
      "Modern aesthetic requirements",
      "Balancing airflow with wind protection",
      "Privacy in dense residential areas",
      "Integration with contemporary architecture"
    ],
    testimonials: [
      {
        quote: "Sleek design and perfect functionality. Our patio is now our favorite space.",
        author: "B. Lee",
        location: "Costa Mesa"
      },
      {
        quote: "Great wind control without feeling closed in. Exactly what we wanted.",
        author: "S. Davis",
        location: "Costa Mesa"
      }
    ]
  },
  {
    name: "Newport Beach",
    slug: "newport-beach",
    county: "Orange County",
    phone: "(626) 430-4003",
    description: "Newport Beach's luxurious coastal lifestyle demands premium patio solutions. Our marine-grade blinds deliver exceptional wind protection and UV resistance while maintaining the sophisticated aesthetic expected in this premier community.",
    challenges: [
      "Harsh salt air and ocean spray",
      "Strong, consistent coastal winds",
      "Extreme UV exposure near the water",
      "High aesthetic and quality standards",
      "Preserving ocean views while blocking wind"
    ],
    testimonials: [
      {
        quote: "Premium quality that stands up to beachfront conditions. Absolutely worth it.",
        author: "R. Anderson",
        location: "Newport Beach"
      },
      {
        quote: "Beautiful design and incredible durability. Perfect for our waterfront home.",
        author: "M. Chen",
        location: "Newport Beach"
      }
    ]
  },
  {
    name: "Huntington Beach",
    slug: "huntington-beach",
    county: "Orange County",
    phone: "(626) 430-4003",
    description: "Huntington Beach's surf culture meets practical outdoor living with our coastal-grade patio blinds. Designed for beach conditions, they protect against wind, salt, and sun while maintaining the relaxed, open feel of coastal California.",
    challenges: [
      "Constant ocean winds year-round",
      "Salt corrosion from sea spray",
      "Sand accumulation on patios",
      "High UV exposure near the beach",
      "Maintaining laid-back coastal aesthetic"
    ],
    testimonials: [
      {
        quote: "Perfect for beach living. Tough enough for the elements but still looks great.",
        author: "J. Wilson",
        location: "Huntington Beach"
      },
      {
        quote: "Finally can enjoy our patio without the wind. Quality construction shows.",
        author: "K. Brown",
        location: "Huntington Beach"
      }
    ]
  },
  {
    name: "Carlsbad",
    slug: "carlsbad",
    county: "San Diego County",
    phone: "(626) 430-4003",
    description: "Carlsbad's coastal elegance requires patio solutions that combine beauty with durability. Our blinds protect against ocean winds and salt air while complementing the area's upscale architectural styles and coastal lifestyle.",
    challenges: [
      "Coastal winds affecting outdoor comfort",
      "Salt air requiring corrosion-resistant materials",
      "Intense sun exposure near the coast",
      "Matching upscale architectural aesthetics",
      "Privacy while maintaining ocean views"
    ],
    testimonials: [
      {
        quote: "Excellent coastal protection and beautiful design. Perfect for our home.",
        author: "D. Miller",
        location: "Carlsbad"
      },
      {
        quote: "Two years in the salt air and still flawless. Great investment.",
        author: "P. Garcia",
        location: "Carlsbad"
      }
    ]
  },
  {
    name: "Encinitas",
    slug: "encinitas",
    county: "San Diego County",
    phone: "(626) 430-4003",
    description: "Encinitas blends surf culture with upscale living. Our patio blinds deliver the durability needed for coastal conditions with a design aesthetic that matches the community's unique character and laid-back sophistication.",
    challenges: [
      "Ocean winds disrupting outdoor spaces",
      "Salt spray and coastal moisture",
      "Preserving ocean views and natural light",
      "Matching eclectic architectural styles",
      "Balancing protection with openness"
    ],
    testimonials: [
      {
        quote: "Perfect for our coastal home. Wind protection without losing the view or breeze.",
        author: "T. Roberts",
        location: "Encinitas"
      },
      {
        quote: "Great quality and the design fits our home's vibe perfectly.",
        author: "A. Johnson",
        location: "Encinitas"
      }
    ]
  },
  {
    name: "La Jolla",
    slug: "la-jolla",
    county: "San Diego County",
    phone: "(626) 430-4003",
    description: "La Jolla's prestigious coastal setting demands the finest in patio solutions. Our premium blinds offer superior wind protection and UV resistance with an elegant design that complements La Jolla's architectural excellence and stunning views.",
    challenges: [
      "Strong coastal winds year-round",
      "Premium aesthetic requirements",
      "Salt air affecting materials",
      "Maximizing ocean views while blocking wind",
      "Integration with luxury home design"
    ],
    testimonials: [
      {
        quote: "Luxury quality that matches our home. The engineering is impressive.",
        author: "W. Harrison",
        location: "La Jolla"
      },
      {
        quote: "Finally, blinds sophisticated enough for La Jolla. Highly recommend.",
        author: "E. Thompson",
        location: "La Jolla"
      }
    ]
  },
  {
    name: "Del Mar",
    slug: "del-mar",
    county: "San Diego County",
    phone: "(626) 430-4003",
    description: "Del Mar's refined coastal lifestyle calls for patio solutions that are both elegant and practical. Our blinds protect against ocean winds and harsh sun while maintaining the sophisticated aesthetic this exclusive community expects.",
    challenges: [
      "Coastal winds affecting patio comfort",
      "High-end aesthetic requirements",
      "Salt air durability concerns",
      "Preserving premium ocean views",
      "Matching luxury home architecture"
    ],
    testimonials: [
      {
        quote: "Exceptional quality and beautiful installation. Perfect for our coastal home.",
        author: "C. Mitchell",
        location: "Del Mar"
      },
      {
        quote: "These blinds are as elegant as they are functional. Very impressed.",
        author: "N. Foster",
        location: "Del Mar"
      }
    ]
  },
  {
    name: "Riverside",
    slug: "riverside",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Riverside's inland location means hot summers and occasional Santa Ana winds. Our patio blinds provide crucial shade and wind protection, making your outdoor space comfortable even during the hottest months.",
    challenges: [
      "Extreme summer heat requiring shade",
      "Santa Ana winds creating dust and debris",
      "UV damage from intense sun exposure",
      "Need for durable, low-maintenance materials",
      "Protecting outdoor furniture from elements"
    ],
    testimonials: [
      {
        quote: "Our patio is finally usable in summer. The shade makes a huge difference.",
        author: "R. Sanchez",
        location: "Riverside"
      },
      {
        quote: "Great wind protection and easy to use. Very satisfied with the quality.",
        author: "M. Lopez",
        location: "Riverside"
      }
    ]
  },
  {
    name: "Corona",
    slug: "corona",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Corona homeowners need reliable shade and wind protection for year-round outdoor enjoyment. Our patio blinds stand up to intense heat and gusty conditions while enhancing your home's value and curb appeal.",
    challenges: [
      "Hot inland temperatures in summer",
      "Strong winds from surrounding hills",
      "Dust and pollen accumulation",
      "HOA requirements in newer communities",
      "Balancing shade with airflow"
    ],
    testimonials: [
      {
        quote: "Finally can enjoy our backyard in summer. The blinds work perfectly.",
        author: "T. Brown",
        location: "Corona"
      },
      {
        quote: "Great quality at reasonable prices. Installation was quick and clean.",
        author: "K. Hernandez",
        location: "Corona"
      }
    ]
  },
  {
    name: "Temecula",
    slug: "temecula",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Temecula's wine country lifestyle deserves patio solutions that match its sophistication. Our blinds provide essential shade and wind protection while complementing the area's elegant homes and outdoor entertainment spaces.",
    challenges: [
      "Hot valley temperatures",
      "Afternoon winds disrupting gatherings",
      "Dust from surrounding vineyards",
      "Need for elegant design aesthetic",
      "Protecting outdoor entertaining areas"
    ],
    testimonials: [
      {
        quote: "Perfect for our wine country entertaining. Guests love the motorized operation.",
        author: "B. Anderson",
        location: "Temecula"
      },
      {
        quote: "Beautiful design and excellent wind control. Our patio is perfect now.",
        author: "S. Williams",
        location: "Temecula"
      }
    ]
  },
  {
    name: "Murrieta",
    slug: "murrieta",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Murrieta's family-friendly communities benefit from durable, practical patio solutions. Our blinds offer reliable wind and sun protection, perfect for active families who want to maximize their outdoor living space.",
    challenges: [
      "Summer heat affecting outdoor comfort",
      "Wind gusts during afternoon hours",
      "Need for child-safe motorized options",
      "HOA compliance in planned communities",
      "Protecting play areas and outdoor furniture"
    ],
    testimonials: [
      {
        quote: "Great for families. The motorized blinds are safe and the kids love using them.",
        author: "J. Davis",
        location: "Murrieta"
      },
      {
        quote: "Our backyard is usable all year now. Excellent quality and service.",
        author: "L. Martinez",
        location: "Murrieta"
      }
    ]
  },
  {
    name: "Palm Springs",
    slug: "palm-springs",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Palm Springs' desert climate demands superior shade and wind protection. Our patio blinds are engineered for extreme conditions, providing crucial relief from intense sun and desert winds while complementing mid-century modern aesthetics.",
    challenges: [
      "Extreme desert heat requiring maximum shade",
      "Strong, dry desert winds",
      "UV damage from intense sun exposure",
      "Matching iconic mid-century design",
      "Protecting outdoor spaces from sandstorms"
    ],
    testimonials: [
      {
        quote: "Essential for desert living. These blinds make our patio usable even at peak heat.",
        author: "R. Foster",
        location: "Palm Springs"
      },
      {
        quote: "Perfect match for our mid-century home. Quality is exceptional.",
        author: "M. Chen",
        location: "Palm Springs"
      }
    ]
  },
  {
    name: "Palm Desert",
    slug: "palm-desert",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Palm Desert's luxury desert lifestyle requires premium patio solutions. Our blinds deliver superior UV protection and wind resistance while maintaining the sophisticated aesthetic expected in this upscale community.",
    challenges: [
      "Intense desert sun year-round",
      "Strong seasonal winds",
      "Sandstorms and dust accumulation",
      "High-end aesthetic requirements",
      "Extreme temperature fluctuations"
    ],
    testimonials: [
      {
        quote: "Premium quality perfect for Palm Desert. The sun protection is outstanding.",
        author: "D. Williams",
        location: "Palm Desert"
      },
      {
        quote: "Elegant design and exceptional durability. Worth every penny.",
        author: "P. Anderson",
        location: "Palm Desert"
      }
    ]
  },
  {
    name: "Rancho Mirage",
    slug: "rancho-mirage",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Rancho Mirage's exclusive desert setting calls for luxury patio solutions. Our premium blinds protect against harsh desert conditions while maintaining the elegant aesthetic this prestigious community demands.",
    challenges: [
      "Extreme heat requiring maximum UV protection",
      "Desert winds carrying sand and dust",
      "Luxury aesthetic standards",
      "Integration with resort-style homes",
      "Protecting high-end outdoor furniture"
    ],
    testimonials: [
      {
        quote: "Luxury quality that matches our home. The engineering is impressive.",
        author: "T. Morrison",
        location: "Rancho Mirage"
      },
      {
        quote: "Perfect for our desert oasis. Beautiful design and flawless function.",
        author: "K. Roberts",
        location: "Rancho Mirage"
      }
    ]
  },
  {
    name: "Indio",
    slug: "indio",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Indio's desert climate requires tough, reliable patio blinds. Our solutions provide essential protection from extreme sun and wind, making outdoor spaces comfortable and functional throughout the year.",
    challenges: [
      "Extreme desert temperatures",
      "Strong winds and sandstorms",
      "UV damage from constant sun",
      "Dust accumulation on patios",
      "Need for durable, low-maintenance solutions"
    ],
    testimonials: [
      {
        quote: "These blinds are built for the desert. Our patio is finally comfortable.",
        author: "G. Martinez",
        location: "Indio"
      },
      {
        quote: "Excellent protection from sun and wind. Very happy with the quality.",
        author: "A. Sanchez",
        location: "Indio"
      }
    ]
  },
  {
    name: "La Quinta",
    slug: "la-quinta",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "La Quinta's resort lifestyle demands patio solutions that blend luxury with functionality. Our blinds protect against desert conditions while enhancing the sophisticated outdoor living spaces this community is known for.",
    challenges: [
      "Desert heat affecting outdoor comfort",
      "Seasonal windstorms",
      "Upscale aesthetic requirements",
      "Golf course living considerations",
      "Integration with luxury architecture"
    ],
    testimonials: [
      {
        quote: "Perfect for our golf course home. Elegant design and excellent function.",
        author: "W. Thompson",
        location: "La Quinta"
      },
      {
        quote: "Great wind and sun protection without compromising the view. Very satisfied.",
        author: "N. Davis",
        location: "La Quinta"
      }
    ]
  },
  {
    name: "Coachella",
    slug: "coachella",
    county: "Riverside County",
    phone: "(626) 430-4003",
    description: "Coachella's desert environment requires robust patio protection. Our blinds stand up to extreme heat and wind while providing the shade and comfort needed to make outdoor spaces enjoyable year-round.",
    challenges: [
      "Intense desert heat",
      "Strong winds and dust storms",
      "UV exposure requiring maximum protection",
      "Budget-conscious solutions",
      "Durable materials for harsh conditions"
    ],
    testimonials: [
      {
        quote: "Great value and excellent quality. Our patio is much more comfortable now.",
        author: "F. Rodriguez",
        location: "Coachella"
      },
      {
        quote: "These blinds handle the desert conditions perfectly. Very pleased.",
        author: "C. Hernandez",
        location: "Coachella"
      }
    ]
  },
  {
    name: "San Bernardino",
    slug: "san-bernardino",
    county: "San Bernardino County",
    phone: "(626) 430-4003",
    description: "San Bernardino's inland location means hot summers and variable winds. Our patio blinds provide essential shade and protection, making your outdoor space comfortable and functional throughout the year.",
    challenges: [
      "Hot valley temperatures in summer",
      "Santa Ana winds creating gusty conditions",
      "UV damage from intense sun",
      "Dust and debris accumulation",
      "Need for affordable, durable solutions"
    ],
    testimonials: [
      {
        quote: "Great quality at reasonable prices. Our backyard is usable year-round now.",
        author: "V. Lopez",
        location: "San Bernardino"
      },
      {
        quote: "Excellent wind protection. The installation was professional and quick.",
        author: "R. Garcia",
        location: "San Bernardino"
      }
    ]
  },
  {
    name: "Redlands",
    slug: "redlands",
    county: "San Bernardino County",
    phone: "(626) 430-4003",
    description: "Redlands' historic charm meets modern outdoor living with our custom patio blinds. We provide solutions that complement the city's beautiful architecture while delivering superior sun and wind protection.",
    challenges: [
      "Hot inland temperatures",
      "Winds from mountain passes",
      "Matching historic home aesthetics",
      "Citrus grove dust and pollen",
      "Balancing ventilation with protection"
    ],
    testimonials: [
      {
        quote: "Perfect for our historic home. The blinds match the architecture beautifully.",
        author: "H. Anderson",
        location: "Redlands"
      },
      {
        quote: "Great shade and wind control. Our patio is our favorite room now.",
        author: "B. Wilson",
        location: "Redlands"
      }
    ]
  },
  {
    name: "Fontana",
    slug: "fontana",
    county: "San Bernardino County",
    phone: "(626) 430-4003",
    description: "Fontana homeowners need reliable patio solutions for the Inland Empire's demanding climate. Our blinds provide excellent shade and wind protection, making outdoor living comfortable even during hot summer months.",
    challenges: [
      "Extreme summer heat",
      "Dust from nearby areas",
      "Strong afternoon winds",
      "HOA requirements in newer communities",
      "Need for family-friendly solutions"
    ],
    testimonials: [
      {
        quote: "Our patio is so much cooler now. The blinds work great and look professional.",
        author: "S. Martinez",
        location: "Fontana"
      },
      {
        quote: "Excellent value and quality. Installation was quick and clean.",
        author: "J. Ramirez",
        location: "Fontana"
      }
    ]
  },
  {
    name: "Chino",
    slug: "chino",
    county: "San Bernardino County",
    phone: "(626) 430-4003",
    description: "Chino's family-oriented communities benefit from practical, durable patio blinds. Our solutions provide reliable protection from sun and wind while complementing a variety of home styles throughout the area.",
    challenges: [
      "Hot valley temperatures",
      "Agricultural dust and pollen",
      "Wind gusts during afternoons",
      "Need for low-maintenance solutions",
      "Protecting family outdoor spaces"
    ],
    testimonials: [
      {
        quote: "Perfect for our family. The kids love using the motorized controls.",
        author: "M. Thompson",
        location: "Chino"
      },
      {
        quote: "Great quality and the service was excellent. Highly recommend!",
        author: "K. Davis",
        location: "Chino"
      }
    ]
  },
  {
    name: "Ontario",
    slug: "ontario",
    county: "San Bernardino County",
    phone: "(626) 430-4003",
    description: "Ontario's central location in the Inland Empire brings hot summers and variable winds. Our patio blinds deliver the protection needed to make outdoor spaces comfortable year-round, with styles to match any home.",
    challenges: [
      "High summer temperatures requiring shade",
      "Urban dust and air quality",
      "Wind from surrounding areas",
      "Diverse architectural styles to match",
      "Budget-conscious quality solutions"
    ],
    testimonials: [
      {
        quote: "Excellent shade and wind protection. Our patio is comfortable all summer now.",
        author: "D. Rodriguez",
        location: "Ontario"
      },
      {
        quote: "Great value and professional installation. Very happy with everything.",
        author: "P. Nguyen",
        location: "Ontario"
      }
    ]
  },
  {
    name: "Santa Barbara",
    slug: "santa-barbara",
    county: "Santa Barbara County",
    phone: "(626) 430-4003",
    description: "Santa Barbara's Mediterranean climate and sophisticated aesthetic require patio blinds that are both elegant and durable. Our solutions protect against coastal winds while complementing the area's iconic architecture.",
    challenges: [
      "Coastal winds year-round",
      "Salt air affecting materials",
      "Matching Spanish Mediterranean style",
      "Preserving ocean views",
      "High aesthetic standards"
    ],
    testimonials: [
      {
        quote: "Beautiful design that matches our Spanish home perfectly. Quality is outstanding.",
        author: "E. Harrison",
        location: "Santa Barbara"
      },
      {
        quote: "Perfect wind protection with elegant style. Exactly what we needed.",
        author: "C. Foster",
        location: "Santa Barbara"
      }
    ]
  },
  {
    name: "Ventura",
    slug: "ventura",
    county: "Ventura County",
    phone: "(626) 430-4003",
    description: "Ventura's coastal location brings strong winds and salt air. Our marine-grade patio blinds provide durable protection while maintaining the relaxed, beachy aesthetic that defines this coastal community.",
    challenges: [
      "Strong coastal winds daily",
      "Salt spray and corrosion",
      "UV exposure near the beach",
      "Matching coastal home styles",
      "Balancing protection with ocean views"
    ],
    testimonials: [
      {
        quote: "Perfect for our coastal home. These blinds handle the wind and salt air perfectly.",
        author: "T. Miller",
        location: "Ventura"
      },
      {
        quote: "Great quality and beautiful design. Our patio is protected but still feels open.",
        author: "A. Brown",
        location: "Ventura"
      }
    ]
  },
  {
    name: "Oxnard",
    slug: "oxnard",
    county: "Ventura County",
    phone: "(626) 430-4003",
    description: "Oxnard's agricultural and coastal setting requires patio blinds that can handle wind, salt air, and dust. Our durable solutions provide year-round protection while enhancing your outdoor living experience.",
    challenges: [
      "Coastal winds affecting comfort",
      "Agricultural dust and pollen",
      "Salt air near the coast",
      "Need for durable materials",
      "Various architectural styles"
    ],
    testimonials: [
      {
        quote: "These blinds are tough and work perfectly. Great wind protection year-round.",
        author: "L. Sanchez",
        location: "Oxnard"
      },
      {
        quote: "Excellent quality and professional service. Very satisfied with everything.",
        author: "R. Martinez",
        location: "Oxnard"
      }
    ]
  },
  {
    name: "Thousand Oaks",
    slug: "thousand-oaks",
    county: "Ventura County",
    phone: "(626) 430-4003",
    description: "Thousand Oaks combines suburban comfort with Southern California weather challenges. Our patio blinds provide elegant protection from sun and wind while complementing the area's upscale homes and manicured neighborhoods.",
    challenges: [
      "Hot valley temperatures in summer",
      "Canyon winds affecting patios",
      "HOA requirements in planned communities",
      "Matching contemporary home styles",
      "Balancing shade with natural light"
    ],
    testimonials: [
      {
        quote: "Perfect for our neighborhood. HOA approved and they look beautiful.",
        author: "N. Wilson",
        location: "Thousand Oaks"
      },
      {
        quote: "Great wind control and elegant design. Our patio is perfect now.",
        author: "G. Thompson",
        location: "Thousand Oaks"
      }
    ]
  },
  {
    name: "Simi Valley",
    slug: "simi-valley",
    county: "Ventura County",
    phone: "(626) 430-4003",
    description: "Simi Valley's family-friendly communities deserve patio solutions that are both practical and attractive. Our blinds provide reliable protection from intense valley heat and winds while enhancing your outdoor family space.",
    challenges: [
      "High valley temperatures in summer",
      "Wind gusts from surrounding hills",
      "Dust accumulation on patios",
      "Family-oriented design needs",
      "HOA compliance requirements"
    ],
    testimonials: [
      {
        quote: "Our backyard is usable all year now. Great for families!",
        author: "K. Anderson",
        location: "Simi Valley"
      },
      {
        quote: "Excellent quality and the motorized option is perfect for us. Very happy!",
        author: "B. Davis",
        location: "Simi Valley"
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
