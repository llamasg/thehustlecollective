import { type FestivalSection } from "./festivals";

export interface Speaker {
  name: string;
  role: string;
}

export interface Programme {
  slug: string;
  name: string;
  tagline: string;
  descriptor: string;
  label: string;
  heroImage: string;
  galleryImages: string[];
  hasContent: boolean;
  featured?: boolean;
  intro?: string;
  sections?: FestivalSection[];
  pullQuote?: string;
  speakers?: Speaker[];
}

export const programmes: Programme[] = [
  {
    slug: "future-hustlers",
    name: "Future Hustlers",
    tagline: "Developing the next generation of Midlands creatives",
    descriptor: "DEVELOPING THE NEXT GENERATION OF MIDLANDS CREATIVES",
    label: "2022 - Present",
    heroImage: "/images/industryday/DSC07264-Enhanced-NR.jpg",
    galleryImages: [],
    hasContent: true,
    featured: true,
    intro:
      "Future Hustlers is the talent development arm of The Hustle Collective, supporting and developing the incredible community of artists, makers, producers, promoters, and creatives who help make Nottingham and the wider Midlands such a thriving place. We began by focusing on how we could better support the people who make Hockley Hustle happen - and what started as a promoter mentorship scheme has grown into a full programme of industry events, artist development, and year-round creative support.",
    sections: [
      {
        title: "Background",
        body: "We began by focusing on how we could better support the people who make Hockley Hustle Festival happen. As it is the promoters who curate the festival's brilliantly diverse line-ups and bring the party year after year, we launched our Promoter Mentorship Scheme in 2022.\n\nIn its first year, we ran an open call and selected 15 participants to take part in a programme of mentorship and workshops led by established promoters and special guests, including Marina from Ladies Music Pub and Alanna Henry from Jazz Refreshed. This initial cohort featured a powerhouse of next generation promoters, many of whom continue to work with us today.",
      },
      {
        title: "Industry Day",
        body: "In 2023, we introduced Industry Day in collaboration with Ladies Music Pub, a London based organisation dedicated to platforming and supporting women and gender non-conforming people in the music industry. Industry Day 2023 was hosted across Rough Trade and Antenna, delivering a full day of panel talks, workshops, and one-to-one sessions attended by 250 creatives from across the Midlands.\n\nIndustry Day 2024 took place at Fisher Gate Point, with a stronger focus on workshops and hands-on support sessions, complemented by a smaller selection of curated panel talks covering key industry themes.",
      },
      {
        title: "Artist Development Programme",
        body: "In 2026, we launch our first-ever Future Hustler Artist Development Programme, connecting with Midlands-based artists, makers, and creatives. The programme will centre mentorship, open discussion, and tailored opportunities for professional and creative growth.\n\nAfter reviewing an outstanding range of applications, we have brought together a group of individuals with diverse levels of experience to foster collaboration, peer support, and a shared understanding of the importance of community building in sustaining a career in the arts.",
      },
    ],
  },
  {
    slug: "promoter-mentorship",
    name: "Promoter Mentorship Scheme",
    tagline: "Building Nottingham's next wave of promoters",
    descriptor: "BUILDING NOTTINGHAM'S NEXT WAVE OF PROMOTERS",
    label: "2022 - 2024",
    heroImage: "/images/industryday/DSC08093.jpg",
    galleryImages: [
      "/images/industryday/DSC06731-Enhanced-NR.jpg",
      "/images/industryday/DSC06757.jpg",
      "/images/industryday/DSC07115.jpg",
      "/images/industryday/DSC07567.jpg",
      "/images/industryday/DSC07658-Enhanced-NR.jpg",
      "/images/industryday/DSC07748.jpg",
    ],
    hasContent: true,
    intro:
      "Future Hustlers launched its Promoter Mentorship Scheme in 2022 - an open call selecting 15 participants for a programme of mentorship and workshops led by established promoters and special guests.",
    sections: [
      {
        title: "The programme",
        body: "Future Hustlers launched its Promoter Mentorship Scheme in 2022 - an open call selecting 15 participants for a programme of mentorship and workshops led by established promoters and special guests. The inaugural cohort featured a powerhouse of next-generation promoters, many of whom continue to work with The Hustle Collective today.\n\nIn 2023, the scheme expanded to introduce Industry Day in collaboration with Ladies Music Pub - a London-based organisation dedicated to platforming and supporting women and gender non-conforming people in the music industry. Industry Day 2023 was hosted across Rough Trade and Antenna, delivering a full day of panel talks, workshops, and one-to-one sessions attended by 250 creatives from across the Midlands.\n\nIn 2024, Industry Day moved to Fisher Gate Point with a stronger focus on hands-on workshops and support sessions alongside curated panel talks.",
      },
    ],
    speakers: [
      { name: "Nathaniel Wilson", role: "MIMM" },
      { name: "Rastarella Falade", role: "Cultural Vibrations" },
      { name: "Parisa Eilyon", role: "Acoustickle" },
      { name: "Will Robinson", role: "I'm Not From London" },
      { name: "Ben Trekkah", role: "Phlexx / Nottingham C.A.N" },
      { name: "Jay Sandhu", role: "Nottanother" },
    ],
  },
  {
    slug: "industry-day-2023",
    name: "Industry Day 2023",
    tagline: "A full day of panels, workshops & connection",
    descriptor: "A FULL DAY OF PANELS, WORKSHOPS & CONNECTION",
    label: "Oct 2023",
    heroImage: "/images/industryday/panel/DSC07086-Enhanced-NR.jpg",
    galleryImages: [
      "/images/industryday/panel/DSC06775-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC06941-Enhanced-NR4-2.jpg",
      "/images/industryday/panel/DSC07181-Enhanced6-NR.jpg",
      "/images/industryday/panel/DSC07564-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC07606-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC07631-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC07710-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC07891-Enhanced-NR.jpg",
      "/images/industryday/panel/DSC07973-Enhanced-NR.jpg",
    ],
    hasContent: false,
  },
  {
    slug: "industry-day-2024",
    name: "Industry Day 2024",
    tagline: "Hands-on support for Midlands creatives",
    descriptor: "HANDS-ON SUPPORT FOR MIDLANDS CREATIVES",
    label: "Oct 2024",
    heroImage: "/images/industryday/DSC08125-Enhanced-NR.jpg",
    galleryImages: [
      "/images/industryday/DSC08302-Enhanced-NR.jpg",
      "/images/industryday/DSC08339-Enhanced-NR.jpg",
      "/images/industryday/DSC08377-Enhanced-NR.jpg",
      "/images/industryday/DSC07779-Enhanced-NR.jpg",
      "/images/industryday/DSC07789-Enhanced-NR.jpg",
      "/images/industryday/DSC06891-Enhanced-NR.jpg",
      "/images/industryday/DSC06926-Enhanced-NR.jpg",
    ],
    hasContent: false,
  },
  {
    slug: "industry-weekend-2026",
    name: "Industry Weekend 2026",
    tagline: "Two days. Workshops. Mentorship. Community.",
    descriptor: "TWO DAYS. WORKSHOPS. MENTORSHIP. COMMUNITY.",
    label: "Mar 21-22 2026",
    heroImage: "/images/industryday/DSC07264-Enhanced-NR.jpg",
    galleryImages: [],
    hasContent: false,
  },
  {
    slug: "artist-development-2026",
    name: "Artist Development Programme",
    tagline: "Bespoke mentorship for Midlands artists & makers",
    descriptor: "BESPOKE MENTORSHIP FOR MIDLANDS ARTISTS & MAKERS",
    label: "2026",
    heroImage: "/images/industryday/DSC06731-Enhanced-NR.jpg",
    galleryImages: [],
    hasContent: true,
    intro:
      "In 2026, Future Hustlers launches its first-ever Artist Development Programme - connecting with Midlands-based artists, makers, and creatives for a year of mentorship, open discussion, and tailored opportunities for professional and creative growth.",
    sections: [
      {
        title: "The programme",
        body: "In 2026, Future Hustlers launches its first-ever Artist Development Programme - connecting with Midlands-based artists, makers, and creatives for a year of mentorship, open discussion, and tailored opportunities for professional and creative growth.\n\nAfter reviewing an outstanding range of applications, we have brought together a group of individuals with diverse levels of experience to foster collaboration, peer support, and a shared understanding of the importance of community building in sustaining a career in the arts.\n\nAcross the programme, participants will work closely with our team through workshops, bespoke opportunities, and personalised support - shaped by where individuals are in their careers and what they most need to move forward.",
      },
    ],
    speakers: [
      { name: "Selassie Tevie", role: "Brownswood Recordings" },
      { name: "Hannah TW", role: "Ladies Music Pub" },
      { name: "JAYAHADADREAM", role: "" },
      { name: "Nathanael Williams", role: "Colour Factory" },
      { name: "Lily London", role: "91, Brick Lane" },
      { name: "Nina Smith", role: "Artist Manager" },
    ],
  },
];

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}
