export interface TeamMember {
  name: string;
  role?: string;
  image?: string;
}

export const team: TeamMember[] = [
  { name: "Tommy Farmyard" },
  { name: "Bridie Squires" },
  { name: "Christine Mystique" },
  { name: "Ben Welch", role: "Festival Producer" },
  { name: "Lewis Jones" },
  { name: "Millie Carys-Rose" },
  { name: "Laurie Illingworth" },
  { name: "Alfie Eyden" },
];

export const festivalDirectors = [
  { name: "Saziso Phiri", festival: "Young Hustlers Director" },
  {
    name: "Adam Pickering & Christine Katerere",
    festival: "Green Hustle Co-Directors",
  },
];
