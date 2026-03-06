export interface FestivalSection {
  title: string;
  body: string;
}

export interface Festival {
  slug: string;
  name: string;
  tagline: string;
  established: number;
  accentColor: string;
  accentColorLight: string;
  intro: string;
  sections: FestivalSection[];
  pullQuote?: string;
  stats: { value: string; label: string }[];
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
    accentColor: "#174af4",
    accentColorLight: "#174af4",
    intro:
      "Nottingham's original city-wide music and arts festival - where 450+ performers take over 45 venues for one extraordinary Sunday in October.",
    sections: [
      {
        title: "What it is",
        body: "Hockley Hustle is an annual one-day music and arts festival spread across the streets, venues, churches, and hidden spaces of Nottingham's Hockley and Sneinton neighbourhoods. Every genre imaginable - jazz, hip-hop, indie, techno, classical, folk, choral, spoken word, drag - plays out across 45 or more venues simultaneously. For £15, a single wristband gives you access to all of it, with every penny going directly to local charities.\n\nThe festival's genius is its curation model: cultural producers and promoters from across Nottingham are invited to take over individual stages, bringing together established names and breakthrough artists in a format that feels different in every room. The result is a city that genuinely comes alive - not just as a backdrop, but as the festival itself.",
      },
      {
        title: "Origins",
        body: "Adam Pickering founded Hockley Hustle in 2006 as part of Oxjam, the UK-wide series of DIY music events raising money for Oxfam. The first edition involved just seven venues and a budget of £1,000. It quickly became the biggest Oxjam event in the country, and by 2010 had grown large enough to cut loose from the national format to focus entirely on Nottingham's own charities.\n\nFrom the beginning, Pickering brought in collaborators - Farmyard Records, Not In Nottingham, Folkwit Records - and built the festival on shared effort rather than top-down control. That collaborative spirit has never left. The Hustle's team today spans dozens of promoters, volunteers, venue partners, and artists who treat the festival as their own.",
      },
      {
        title: "Why it matters",
        body: "Over 19 years, Hockley Hustle has raised in excess of £250,000 for more than 20 local charities - from mental health organisations and refugee support groups to hospices and youth services. But its impact goes well beyond fundraising. The festival has become one of the most important platforms for developing diverse local talent, offering emerging promoters a mentorship scheme, running industry days for 300+ creatives, and giving artists at every career stage a headline-worthy stage.\n\nPast performers include Jake Bugg and Sheku Kanneh-Mason - both of whom appeared at the Hustle before going on to major national careers. Today, artists like JayaHadADream and Kweku of Ghana are using the festival as a springboard in exactly the same way. The Hustle doesn't just celebrate Nottingham's music scene. It builds it.",
      },
    ],
    pullQuote:
      "Hockley Hustle has always been about more than just music. It's a celebration of Nottingham's creativity, community, and generosity.",
    stats: [
      { value: "19", label: "Years running" },
      { value: "£250k+", label: "Raised for charity" },
      { value: "50+", label: "Venues activated" },
      { value: "450+", label: "Performers" },
      { value: "20+", label: "Charities supported" },
      { value: "£15", label: "One wristband, everything" },
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
    accentColor: "#174af4",
    accentColorLight: "#174af4",
    intro:
      "An immersive arts and music festival designed entirely for children and families - where creativity, global culture, and community collide in the heart of Sneinton Market.",
    sections: [
      {
        title: "What it is",
        body: "Young Hustlers is the family arm of The Hustle Collective, running annually since 2017 alongside Hockley Hustle in the neighbouring Sneinton Market Avenues. For children aged 0 to 16, the festival offers a full day of live performances, interactive workshops, parade processions, music-making sessions, and energetic parties - all for just £4 a child.\n\nThe programme spans everything from Djembe drumming and samba dancing to Lego Club, vinyl pressing, poetry sessions, circus skills, and family raves. Each year centres on a theme - recent editions have explored global cultures under the banner \"Around the World\" - and the lineup is deliberately built around voices and traditions that children in Nottingham might not otherwise encounter. Brazilian headdress-making sits next to Zimbabwean thumb piano workshops and Bhangra Tots sessions, all within a short walk of each other.",
      },
      {
        title: "Origins & leadership",
        body: "Young Hustlers was born from a simple observation: the city's biggest music festivals were overwhelmingly adult spaces. The Hustle Collective launched the family strand in 2017 to ensure that the same quality of creative experience available to adults was also accessible to Nottingham's children and young people - at a price that didn't exclude anyone.\n\nThe festival is directed by Saziso Phiri, a Nottingham-based curator, cultural programmer, and founder of The Anti Gallery. Under his leadership, the programme has expanded significantly, earning a 130% uplift in Arts Council England funding in 2025 following eight consecutive years of positive impact across the city's diverse communities.",
      },
      {
        title: "Why it matters",
        body: "Independent research conducted by Nottingham Trent University found that 87% of children who participated in Young Hustlers workshops reported increased confidence. Attendance grew by 27% in 2024 alone, with 45 young people given paid performance opportunities. The festival runs active outreach programmes with schools - including Djanogly Academy - bringing world music workshops into the classroom in the weeks before the event.\n\nYoung Hustlers isn't just a children's festival. It's one of Nottingham's most effective tools for cultural inclusion: bringing families from ethnic minority and low-income backgrounds into arts spaces that might otherwise feel inaccessible, and giving the city's youngest residents a sense of ownership over their creative community.",
      },
    ],
    pullQuote:
      "The festival offers the opportunity to experience joy and fun alongside people they might not usually encounter in their day-to-day lives.",
    stats: [
      { value: "8", label: "Years running" },
      { value: "87%", label: "Confidence increase" },
      { value: "130%", label: "ACE funding uplift" },
      { value: "27%", label: "Attendance growth" },
      { value: "45+", label: "Young performers" },
      { value: "200", label: "Free tickets for families in need" },
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
    accentColor: "#174af4",
    accentColorLight: "#174af4",
    intro:
      "Nottingham's community-powered climate festival - a free, all-ages event in the city's Old Market Square where music, art, food, and environmental action come together.",
    sections: [
      {
        title: "What it is",
        body: "Green Hustle is a free annual festival that takes over Nottingham's Old Market Square, bringing thousands of people together around the themes of sustainability, creativity, and community action. The day features live music and street entertainment, a makers market of independent sustainable retailers, workshops on zero-waste living and slow fashion, pop-up community gardens, a pedal-powered cinema, talks by local researchers and activists, and hands-on activities for all ages.\n\nThe festival is designed to be radically inclusive and joyful - deliberately avoiding the doom-and-gloom framing that can make climate action feel inaccessible. Free pay-what-you-can meals are served throughout the day. All activities are free. The approach is to celebrate what Nottingham is already doing, and invite everyone to be part of doing more.",
      },
      {
        title: "Origins",
        body: "Green Hustle launched in September 2020 as a virtual festival, funded by Arts Council England during the pandemic. It was co-founded by Adam Pickering - who had already built Hockley Hustle over 14 years - and Christine Katerere, a creative and community connector who came to the project as someone who cared deeply about climate but had never felt the green movement was accessible to her. That personal experience became the festival's founding philosophy.\n\nThe first physical edition took place at Sneinton Market in June 2021, making it one of the first outdoor festivals to take place in Nottingham city centre after the pandemic. By 2023 it had moved to Old Market Square and drew an estimated 10,000 attendees. It is now one of the city's major free events of the year, supported by It's in Nottingham, Nottingham BID, the University of Nottingham, Nottingham Trent University, Nottinghamshire Wildlife Trust, and the Canal & River Trust, among others.",
      },
      {
        title: "Why it matters",
        body: "Green Hustle's impact extends well beyond a single day each year. The collective has planted over 10,000 trees across Nottingham, including the Hustle Holt in Woodthorpe Grange Park - the city's first Miyawaki-style mini-forest and one of the first of its kind in the UK. Permanent green infrastructure like the Broad Street planters and the Wilford Street Wildlife Ramp have also been delivered through the festival's year-round community work.\n\nGreen Hustle backs Nottingham City Council's Carbon Neutral 2028 ambition and runs an active schools programme, delivering ocean awareness campaigns, tree-planting days, and sustainability workshops across Nottingham classrooms. By combining grassroots action with a genuinely great free festival, it has found a way to bring environmental conversation into spaces and communities that have historically been left out of it entirely.",
      },
    ],
    pullQuote:
      "Since 2020, Green Hustle's 'love, joy, and creativity'-based approach has inspired Nottingham's community towards action for climate and the natural environment.",
    stats: [
      { value: "5", label: "Years running" },
      { value: "10,000", label: "Trees planted" },
      { value: "100+", label: "Partners" },
      { value: "FREE", label: "Entry for everyone" },
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
    accentColor: "#174af4",
    accentColorLight: "#174af4",
    intro:
      "A screening and visual arts platform using the communal power of cinema to start conversations, shift perspectives, and bring Nottingham's communities closer together.",
    sections: [
      {
        title: "What it is",
        body: "Hustle Cinematic is The Hustle Collective's film and visual arts strand - a series of immersive screening events that blend cinema with live music, visual art installations, and community gathering. Each event is built around a theme, a film, and a feeling: that watching something together, in a room with strangers, can change how you see the world.\n\nUnlike a traditional film screening, Hustle Cinematic creates a full sensory environment around each showing. Live DJs and musicians score the evening, artists respond to the programme with original work, audiences are invited to dress up, participate, and linger. The aim is to make cinema feel like a genuine cultural event - urgent, social, and alive - rather than a passive night out.",
      },
      {
        title: "Origins",
        body: "Hustle Cinematic launched in April 2022 at Nottingham Contemporary, led by Christine Katerere - co-director of Green Hustle and a driving creative force within The Hustle Collective. The inaugural event, Black Speculative, centred on a screening of Afro Samurai: Resurrection - the Emmy-nominated anime scored by RZA of the Wu-Tang Clan - wrapped in live music from DJs NikNak and Uncle Mo, and original visual art by Nottingham illustrator Kim Thompson. The evening explored themes of Afrofuturism, speculative fiction, and the possibilities of Black identity beyond narrow cultural framings.\n\nThe launch was developed in partnership with The Screen at Nottingham Contemporary, with support from Film Hub Midlands (funded through the National Lottery) and Arts Council England. It was partly inspired by the Contemporary's Our Silver City 2094 exhibition, which imagined a cohesive Nottingham of the future - a thematic thread that runs through Hustle Cinematic's DNA.\n\nChristine has spoken of the project's debt to a predecessor: Sophia Ramcharan and her Fade II Black Film and Music Lounge, a beloved Nottingham institution that brought Black audiences together around cinema and community in much the same spirit. Hustle Cinematic carries that legacy forward.",
      },
      {
        title: "The approach",
        body: "Hustle Cinematic operates from a belief that film is one of the most powerful vehicles for empathy and social change available. Rather than treating cinema as entertainment alone, the platform uses it as a starting point for dialogue - programming films that put audiences in each other's shoes, and building events around those films that make the conversation feel natural and joyful rather than didactic.\n\nFuture programming is deliberately shaped by community input. What does Nottingham need to see? What stories are going untold? Which voices deserve a bigger room? The platform works with a wide coalition of collaborators including Broadway Cinema, SheAfriq Collective, Nottingham C.A.N, and the wider Hustle Collective network - bringing together film programmers, artists, musicians, and community organisers around a shared commitment to diverse, inclusive, and meaningful screen culture.\n\nHustle Cinematic also operates as the film wing of Green Hustle, providing climate-focused screenings and a pedal-powered cinema experience at the annual Old Market Square festival - expanding its reach beyond dedicated film events and into the heart of Nottingham's broader cultural calendar.",
      },
      {
        title: "Why it matters",
        body: "Nottingham has a rich and often undersung screen culture - from Broadway Cinema's decades of independent programming to a growing community of filmmakers and moving-image artists working across the city. Hustle Cinematic sits within that ecosystem with a specific focus: centring the voices, stories, and experiences that mainstream film culture has historically marginalised, and doing so in spaces that feel genuinely welcoming to the audiences those stories belong to.\n\nIn a post-pandemic city still rebuilding its social fabric, Hustle Cinematic offers something simple and powerful: a reason to be in the same room as people you might not usually encounter, sharing something made with craft and intention, and walking out into the night with something new to think about.",
      },
    ],
    pullQuote:
      "We believe in the transformative nature of film - how offering insight into different perspectives can help shed divisive values. What we would like is to start conversations.",
    stats: [
      { value: "2022", label: "Launched" },
      { value: "FREE", label: "Entry" },
      { value: "BFI", label: "Supported by" },
    ],
    heroImage: "/images/554913406_18396846703184896_4025014112839678247_n.jpg",
    galleryImages: [],
  },
];

export function getFestivalBySlug(slug: string): Festival | undefined {
  return festivals.find((f) => f.slug === slug);
}
