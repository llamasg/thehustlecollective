export interface Partner {
  name: string;
  tier: "funder" | "partner";
}

export const partners: Partner[] = [
  { name: "Arts Council England", tier: "funder" },
  { name: "It's in Nottingham", tier: "funder" },
  { name: "Confetti Institute of Creative Technologies", tier: "partner" },
  { name: "Film Hub Midlands", tier: "partner" },
  { name: "Nottingham Trent University", tier: "partner" },
  { name: "University of Nottingham", tier: "partner" },
  { name: "E.ON Next", tier: "partner" },
  { name: "Experian", tier: "partner" },
  { name: "Nottingham College", tier: "partner" },
  { name: "Savoy Systems", tier: "partner" },
];

export const charities = [
  "The Rose Thompson Foundation",
  "SFiCE",
  "Base 51",
  "IMARA",
  "Emmanuel House",
  "Nottingham Women's Centre",
  "AKA CIC",
  "Nottingham Refugee Forum",
  "Tuvida Young Carers Notts",
  "Notts Hospice",
  "The Uniform Project",
];

export const testimonials = [
  {
    quote:
      "Hockley Hustle has always been about more than just music; it's a celebration of Nottingham's creativity, community, and generosity.",
    author: "Festival Team",
  },
  {
    quote:
      "The world feels more disparate than ever so we want Hustle and all the amazing people involved to offer a way to reconnect all our communities.",
    author: "Ben Welch",
    role: "Festival Producer",
  },
  {
    quote:
      "We're very happy to announce a generous uplift of around 130% in funding from Arts Council England. This is a testament to the positive impact the festival has on families from a diverse range of backgrounds.",
    author: "Saziso Phiri",
    role: "Young Hustlers Director",
  },
];
