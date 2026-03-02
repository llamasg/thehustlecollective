export interface Festival {
  slug: string;
  name: string;
  tagline: string;
  established: number;
  accentColor: string;
  accentColorLight: string;
  description: string;
  extendedDescription: string;
  stats: { value: string; label: string }[];
  features: string[];
  externalLink?: string;
  heroImage: string;
  galleryImages: string[];
}

export const festivals: Festival[] = [
  {
    slug: "hockley-hustle",
    name: "Hockley Hustle",
    tagline: "Nottingham's music & arts festival, all for charity",
    established: 2006,
    accentColor: "#e85d26",
    accentColorLight: "#ff7a45",
    description:
      "Nottingham's flagship one-day music and arts festival. Born in 2006 as part of Oxjam, raising money for Oxfam. Now 50+ venues, 450+ performers, every genre from orchestras in churches to underground raves. All ticket proceeds go directly to local charities.",
    extendedDescription:
      "For one day every October, the streets of Hockley and Sneinton transform into one giant festival. A £15 wristband gets you into everything — from intimate acoustic sets in coffee shops to packed-out DJ sets in nightclubs, choirs in churches to samba on the streets. Every penny from ticket sales goes directly to local charities. It's the festival that gives everything back.",
    stats: [
      { value: "19", label: "Years running" },
      { value: "£250k+", label: "Raised for charity" },
      { value: "50+", label: "Venues activated" },
      { value: "450+", label: "Performers" },
      { value: "20+", label: "Charities supported" },
      { value: "£15", label: "One wristband, everything" },
    ],
    features: [
      "Future Hustlers mentorship programme",
      "Queer Hustle LGBTQ+ takeovers",
      "Industry Day panels & workshops",
      "BBC Introducing stage",
      "Street entertainment — Dhol drummers, samba, choirs",
      "Silent disco",
      "UFO Orchestra at St Mary's Church",
    ],
    externalLink: "https://hockleyhustle.co.uk",
    heroImage: "/images/542473743_18394665373187915_4817825130762034475_n.jpg",
    galleryImages: [
      "/images/541847336_18394665364187915_7260792503741488921_n.jpg",
      "/images/565735102_18401580418187915_849310556340828048_n.jpg",
      "/images/d0e19794-c994-453e-b8ba-3ffbedcfd844_rw_1920.jpg",
      "/images/43869f59-ab48-4bde-ba89-379b24d17ea6_rw_1920.jpg",
      "/images/8c70f875-df13-4ea6-af50-49b299d1c0a2_rw_1920.jpg",
      "/images/493902284_1244835304315655_1530664092942420598_n.jpg",
    ],
  },
  {
    slug: "young-hustlers",
    name: "Young Hustlers",
    tagline: "Little people, big party",
    established: 2017,
    accentColor: "#1a8a8a",
    accentColorLight: "#25b3b3",
    description:
      "An immersive arts and music festival for children aged 0–16 and families. Based at Sneinton Market Avenues and Square. Live performances, workshops, food, parades, and creative chaos.",
    extendedDescription:
      "Young Hustlers takes the energy and ambition of Hockley Hustle and reimagines it for the next generation. Across Sneinton Market, families discover djembe drumming workshops, family raves, immersive light installations, DJ lessons, and creative mayhem at every turn. An NTU evaluation found an 87% increase in confidence among participating children. This isn't a kids' zone — it's a festival built around them.",
    stats: [
      { value: "8", label: "Years running" },
      { value: "87%", label: "Confidence increase" },
      { value: "130%", label: "ACE funding uplift" },
      { value: "27%", label: "Attendance growth" },
      { value: "45+", label: "Young performers" },
      { value: "200", label: "Free tickets for families in need" },
    ],
    features: [
      "Big Fish Little Fish family rave",
      "Architects of Air Lumini dome",
      "Djembe drumming workshops",
      "Lego Club",
      "DJ workshops for young people",
      "SEN-friendly sessions",
      "Out & About community programme",
      "Schools Project",
    ],
    externalLink: "https://younghustlers.co.uk",
    heroImage: "/images/554913406_18396846703184896_4025014112839678247_n.jpg",
    galleryImages: [
      "/images/498020085_18067802216315376_3387910678819883039_n.jpg",
      "/images/498325184_18067802180315376_1693222967519244142_n.jpg",
    ],
  },
  {
    slug: "green-hustle",
    name: "Green Hustle",
    tagline: "People, power, plant-fuelled",
    established: 2020,
    accentColor: "#0d6b6b",
    accentColorLight: "#1a8a8a",
    description:
      "Nottingham's community-powered climate festival. Free entry in Old Market Square. Live music, workshops, makers markets, community dining, rewilding projects.",
    extendedDescription:
      "Green Hustle takes over Old Market Square with a free festival that proves climate action can be joyful. From pedal-powered cinema to pay-as-you-feel community dining, slow fashion catwalks to rewilding projects, it uses love, joy, and creativity to inspire action for climate and nature. 10,000 trees planted and counting.",
    stats: [
      { value: "5", label: "Years running" },
      { value: "10,000", label: "Trees planted" },
      { value: "100+", label: "Partners" },
      { value: "FREE", label: "Entry for everyone" },
    ],
    features: [
      "Cultural Vibrations main stage",
      "Slow Fashion Catwalk",
      "Pedal-powered cinema (Mammoth)",
      "Pay-as-you-feel community dining (Himmah Kitchen)",
      "Listen Inn talks hub",
      "Action Cafe",
      "Hedgerow Heroes",
      "Heron Sculpture from recycled Raleigh bikes",
      "Hustle Holt mini-forest",
    ],
    externalLink: "https://greenhustle.co.uk",
    heroImage: "/images/497886865_18067802189315376_8342772631139718310_n.jpg",
    galleryImages: [
      "/images/468897616_18050716196315376_8780372532129046566_n.jpg",
      "/images/469116236_18050716958315376_4603446225916723297_n.jpg",
    ],
  },
  {
    slug: "hustle-cinematic",
    name: "Hustle Cinematic",
    tagline: "Film. Sound. Experience.",
    established: 2022,
    accentColor: "#e85d26",
    accentColorLight: "#ff7a45",
    description:
      "Immersive film screening events incorporating multiple art forms and live performances. Launched at Nottingham Contemporary with Afro Samurai.",
    extendedDescription:
      "Hustle Cinematic fuses cinema with live music, DJ sets, and visual art to create something entirely new. Launched at Nottingham Contemporary with a screening of Afro Samurai — exploring afro-futurism, speculative fiction, and the transformative power of cinema. Live DJs spinning funk, jazz, and disco. Commissioned visual art exhibitions. A night where film becomes a full-body experience.",
    stats: [
      { value: "2022", label: "Launched" },
      { value: "FREE", label: "Entry" },
      { value: "BFI", label: "Supported by" },
    ],
    features: [
      "Afro Samurai premiere (Samuel L Jackson, RZA/Wu-Tang score)",
      "DJ sets fusing funk, jazz & disco",
      "Commissioned visual art exhibitions",
      "Collaboration with The Screen at Nottingham Contemporary",
    ],
    heroImage: "/images/554913406_18396846703184896_4025014112839678247_n.jpg",
    galleryImages: [],
  },
];

export function getFestivalBySlug(slug: string): Festival | undefined {
  return festivals.find((f) => f.slug === slug);
}
