# The Hustle Collective — Website Build Prompt

## Project Overview

Build a portfolio website for **The Hustle Collective**, a network of community festivals based in Nottingham, UK. The site's primary purpose is to champion their ethos and impact to secure **Arts Council England funding** — but it must NOT read like a grant application. It should feel like the organisation itself: bold, joyful, community-driven, slightly irreverent, and deeply rooted in Nottingham's creative scene.

The Hustle Collective has been running festivals since 2006. They've raised over £250,000 for Nottinghamshire charities, planted 10,000 trees, activated 50+ venues, and supported 450+ performers annually. The four core festivals are:

- **Hockley Hustle** (est. 2006) — Flagship one-day music & arts festival. 50+ venues across Hockley and Sneinton. All ticket proceeds go to local charities. 450+ performers, every genre imaginable.
- **Young Hustlers** (est. 2017) — Immersive arts & music festival for children (0–16) and families. Based at Sneinton Market. 87% confidence increase in participating children (NTU evaluation). 130% increase in ACE funding.
- **Green Hustle** (est. 2020) — Free climate action festival in Old Market Square. 10,000 trees planted. Rewilding projects, community dining, makers markets. Supported by E.ON Next, Experian.
- **Hustle Cinematic** (est. 2022) — Immersive film screening events fusing cinema with live music, DJ sets, and visual art. Supported by Film Hub Midlands / BFI.

Additional programmes include **Future Hustlers** (promoter mentorship — 16 mentors, oversubscribed, alumni now working full-time), **Queer Hustle** (LGBTQ+ venue takeovers, drag, ballroom culture, vogue workshops), and **Industry Day** (panels, workshops, keynote speakers).

Key team members: Tommy Farmyard, Bridie Squires, Christine Mystique, Ben Welch (Festival Producer), Lewis Jones, Millie Carys-Rose, Laurie Illingworth, Alfie Eyden. Festival directors include Saziso Phiri (Young Hustlers) and Adam Pickering / Christine Katerere (Green Hustle co-directors).

Key partners: Arts Council England, It's in Nottingham (headline sponsor/BID), Confetti Institute of Creative Technologies, Film Hub Midlands, Nottingham Trent University, University of Nottingham, E.ON Next, Experian, Nottingham College, Savoy Systems, Jumbo Productions.

Charities supported include: The Rose Thompson Foundation, SFiCE, Base 51, IMARA, Emmanuel House, Nottingham Women's Centre, AKA CIC, Nottingham Refugee Forum, Tuvida Young Carers Notts, Notts Hospice, The Uniform Project, and 15+ more over the years.

---

## Tech Stack

- **Next.js** (installed)
- **TypeScript**
- **Tailwind CSS v4** 
- **Sanity CMS** (for blog/opportunities board — with live preview editor) - installed
- **Framer Motion** for animations
- Deploy target: **Vercel**

---

## Design Direction

### Aesthetic: Editorial / Magazine — NOT a SaaS tech site

Think independent music magazine meets community arts publication. The feel should be somewhere between The Face, Dazed, and a well-designed festival programme — not a Stripe landing page.

### Typography-Led Design

The brand's existing identity is heavily typographic. Think:
- **Display/Headline**: An ultra-bold condensed sans-serif. Something with weight and personality — like Oswald 800, Anton, or Knockout. Headlines should be LARGE, uppercase, and confident. They should dominate the page.
- **Body**: A refined serif for readability and editorial warmth. Something like Source Serif 4, Lora, or Playfair Display for body copy.
- **Accent/Mono**: A monospace for small labels, stats, dates — like JetBrains Mono or Space Mono.

Use Google Fonts only. The type should do the heavy lifting — this is a site that could work almost entirely in black and white if the photography and typography are strong enough.

### Photography Style

The Hustle's photography is characterised by **bright flash photography captured in the heat of emotional moments** — live performers mid-scream, crowds dancing, DJs in flow, street art being created, kids covered in paint. The images are high-energy, saturated, and human.

For the build, use placeholder image containers with aspect ratios and overlays that communicate where photography will slot in. Use solid colour blocks and gradients as placeholders — NOT stock photos. Each placeholder should indicate what type of image goes there (e.g. "Live performance — Hockley Hustle 2024").

### Colour Palette

The brand colours from the existing identity are teal (#1a8a8a), orange/coral (#e85d26), cream (#f5f0e8), and charcoal (#2a2a2a) — but these are flexible. The site should feel warm, energetic, and grounded. Use:
- White backgrounds for the editorial feel
- Dark sections (charcoal/near-black) for contrast and drama
- The teal and orange as accent colours — used sparingly but with punch
- Consider the photography driving colour — the placeholder blocks should hint at the vivid, flash-lit palette of the actual images

### Layout Principles

- **Image-led editorial grids** — think asymmetric 2-column layouts where images and text blocks interact. NOT uniform card grids.
- **Full-bleed images** mixed with contained text columns
- **Overlapping elements** — text overlaying images, images breaking out of their containers
- **Generous whitespace** between sections, tight spacing within them
- **Scroll-triggered reveals** — content should feel like it's being uncovered as you scroll
- **NO generic card layouts, NO uniform grids, NO SaaS hero patterns**

### Key Visual Motifs (from existing brand)

- The **oversized curly brace { }** is a recurring brand element — use it sparingly as a decorative device
- The **asterisk ✱** appears in the logo — can be used as a bullet/accent
- **Diagonal/rotated text labels** appear in the brand materials (e.g. angled tag lines)

### Motion & Interaction

- Smooth scroll-triggered animations (Framer Motion)
- Staggered text reveals on headlines
- Image parallax on scroll (subtle)
- Hover states on festival cards that feel alive — scale, colour shift, or overlay reveal
- Page transitions between routes
- The site should feel kinetic without being overwhelming

---

## Sitemap & Page Specifications

### 1. HOMEPAGE (`/`)

#### Navigation
Fixed top nav. Clean, minimal. Contains:
- Logo/wordmark: "THE HUSTLE COLLECTIVE" in the bold condensed display font
- Nav items: **Home** | **Festivals** (with mega menu listing the 4 festivals) | **What We Do** | **Who We Are** | **Get In Touch**
- The Festivals mega menu should show the 4 festival names with a small image/colour block for each
- Mobile: hamburger menu with full-screen overlay

#### Hero Section
Full-viewport hero. This is the first impression — it needs to hit hard.
- Large typographic treatment: "THE HUSTLE COLLECTIVE" — massive, bold, uppercase
- Subtitle/tagline underneath: "Art + Music + Good Times" or "Events built for Nottingham"
- A placeholder for a background video/image (full-bleed, with a dark overlay for text legibility)
- Scroll-down indicator

#### Impact Stats Section
A bold, full-width section with key numbers. NOT in a boring grid — think editorial stat callouts with large numbers and small labels:
- **£250,000+** raised for charity since 2006
- **19** years of community festivals
- **50+** venues activated across Nottingham
- **450+** performers at each Hockley Hustle
- **10,000** trees planted through Green Hustle
- **20+** local charities supported

Style these typographically — massive numbers in the display font, small labels in the mono font. Consider a horizontal scroll or staggered layout rather than a static grid.

#### Our Festivals Section
A horizontal carousel/slider showcasing the 4 festivals. Each slide should be substantial — not a tiny card. Think full-width or near-full-width slides with:
- Festival name in the big display font
- A short one-line tagline
- A large image placeholder (landscape, roughly 16:9 or wider)
- A "Learn more →" link to the individual festival page
- Navigation dots or arrows
- Each festival has a distinct accent colour

Festivals to include:
1. **Hockley Hustle** — "Nottingham's music & arts festival, all for charity"
2. **Young Hustlers** — "Little people, big party"
3. **Green Hustle** — "People, power, plant-fuelled"
4. **Hustle Cinematic** — "Film. Sound. Experience."

#### Testimonials Section
2–3 rotating quotes from real people involved with the festivals. Editorial style — large italic serif quote, small attribution below. Quotes:
- "Hockley Hustle has always been about more than just music; it's a celebration of Nottingham's creativity, community, and generosity." — Festival Team
- "The world feels more disparate than ever so we want Hustle and all the amazing people involved to offer a way to reconnect all our communities." — Ben Welch, Festival Producer
- "We're very happy to announce a generous uplift of around 130% in funding from Arts Council England. This is a testament to the positive impact the festival has on families from a diverse range of backgrounds." — Saziso Phiri, Young Hustlers Director

#### Partners & Funders Section
A clean logo wall / text list of partners. Two tiers:
- **Key Funders**: Arts Council England, It's in Nottingham
- **Partners**: Confetti Institute, Film Hub Midlands, NTU, UoN, E.ON Next, Experian, Nottingham College, Savoy Systems

For now, just use text names styled consistently. No need for actual logos yet.

#### Blog / Opportunities Preview
Show the 3 most recent blog posts from Sanity CMS. Each post card shows:
- Title
- Date
- A short excerpt or tag (e.g. "Opportunity", "News", "Call Out")
- Image placeholder
- Link to full post

Section title: "What's Happening" or "Opportunities & News"

#### Footer
- THE HUSTLE COLLECTIVE wordmark
- Contact: hello@hockleyhustle.co.uk | Fisher Gate Point, Nottingham, NG1 1GD
- Links to all festival websites: hockleyhustle.co.uk, younghustlers.co.uk, greenhustle.co.uk, thehustlecollective.com
- Social links (Instagram, Facebook — use icon placeholders)
- "Events built for Nottingham — since 2006"

---

### 2. FESTIVAL PAGES (`/festivals/hockley-hustle`, `/festivals/young-hustlers`, `/festivals/green-hustle`, `/festivals/hustle-cinematic`)

There is no festival index page — the 4 festivals are accessed via the homepage carousel and the nav mega menu.

All 4 festival pages share the same layout template but with different content and accent colours:

#### Festival Page Template Layout:

**Hero**
- Full-bleed image/video placeholder with dark overlay
- Festival name in massive display type (e.g. "HOCKLEY HUSTLE")
- Tagline underneath
- Year established badge

**Introduction**
- 2-column layout: large body text on the left (serif, editorial), key stats on the right
- Stats should feel integrated into the prose, not boxed off

**Editorial Content Section**
- Mixed layout of images and text blocks in an asymmetric editorial grid
- Large pull quotes breaking up the content
- This is the portfolio/showcase area — it should feel like flipping through a magazine spread about the festival
- Include placeholders for 4–6 images per festival page

**Impact & Numbers**
- Festival-specific stats woven into the layout (not a separate stats section)

**Call to Action**
- Link to buy tickets / get involved / visit the festival's own website
- "Back to festivals" link or nav to other festival pages

#### Festival-Specific Content:

**Hockley Hustle** (`/festivals/hockley-hustle`)
- Accent colour: Orange (#e85d26)
- Description: Nottingham's flagship one-day music and arts festival. Born in 2006 as part of Oxjam, raising money for Oxfam. Now 50+ venues, 450+ performers, every genre from orchestras in churches to underground raves. All ticket proceeds go directly to local charities. £15 wristband = access to everything.
- Stats: 19 years, £250k+ raised, 50+ venues, 450+ performers, 20+ charities, £15 wristband
- Key features: Future Hustlers mentorship, Queer Hustle takeover, Industry Day, BBC Introducing stage, street entertainment (Dhol drummers, samba, choirs), silent disco, UFO Orchestra at St Mary's Church
- External link: hockleyhustle.co.uk

**Young Hustlers** (`/festivals/young-hustlers`)
- Accent colour: Teal (#1a8a8a)
- Description: An immersive arts and music festival for children aged 0–16 and families. Based at Sneinton Market Avenues and Square. Live performances, workshops (arts, crafts, dance, music making), food, parades, and creative chaos. Building confidence and celebrating the diverse cultures that shape Nottingham.
- Stats: 8 years, 87% confidence increase (NTU study), 130% ACE funding uplift, 27% attendance growth, 45+ young performers, 12+ venues, £4 child / £11 adult tickets
- Key features: Big Fish Little Fish family rave, Architects of Air Lumini dome, Djembe drumming workshops, Lego Club, DJ workshops, SEN-friendly sessions, Out & About community programme, Schools Project, 200 free tickets for families in need
- External link: younghustlers.co.uk

**Green Hustle** (`/festivals/green-hustle`)
- Accent colour: Deep teal (#0d6b6b)
- Description: Nottingham's community-powered climate festival. Free entry in Old Market Square. Live music, workshops, makers markets, community dining, rewilding projects. Using love, joy, and creativity to inspire action for climate and nature. A CIC (Community Interest Company).
- Stats: 5 years, 10,000 trees planted, 100+ partners, FREE entry, Heron Sculpture (recycled Raleigh bikes), Hustle Holt mini-forest
- Key features: Cultural Vibrations on main stage, Slow Fashion Catwalk, pedal-powered cinema (Mammoth), pay-as-you-feel community dining (Himmah Kitchen), Listen Inn talks hub, Action Cafe, Hedgerow Heroes, School of Fish ocean awareness, Wilford Street Wildlife Ramp
- External link: greenhustle.co.uk

**Hustle Cinematic** (`/festivals/hustle-cinematic`)
- Accent colour: Charcoal with orange accents
- Description: Immersive film screening events incorporating multiple art forms and live performances. Launched at Nottingham Contemporary with Afro Samurai — exploring afro-futurism, speculative fiction, and the transformative power of cinema. Live DJs, scratch performances, visual art exhibitions.
- Stats: Launched 2022, supported by Film Hub Midlands / National Lottery / BFI / Arts Council England, FREE entry
- Key features: Afro Samurai premiere (Samuel L Jackson, RZA/Wu-Tang score), DJ sets fusing funk/jazz/disco, commissioned visual art, collaboration with The Screen at Nottingham Contemporary
- No external link (programme within the collective)

---

### 3. WHAT WE DO (`/what-we-do`)

A simple, well-designed about page. Editorial feel — large text, generous spacing.

Content:
> The Hustle Collective are a family of experienced freelancers from many backgrounds. Sharing an ethos to create positive change, we promote and support creativity. We support young people and we support communities.
>
> Based in Nottingham, we produce and organise festivals, events and projects for all ages. Over 19 productive years of Hustling we've come together countless times to lay on feasts for the eyes, ears, brains, and bellies — often whilst raising money for good causes.
>
> Through our festivals, fundraising, green initiatives, schools projects, music, art, poetry, digital media, and whatever else we can help happen, we hope to bring people together in an inclusive and celebratory way.
>
> Talk to us. We want to hear it.

Layout: Large serif text, maybe 2-column with an image on one side. Can include a timeline of milestones or a simple visual showing how the different festivals connect. Keep it warm and human.

---

### 4. WHO WE ARE (`/who-we-are`)

Meet the team page. Should feel personal and warm — NOT corporate headshot grid.

Team members (use placeholder image blocks for photos):
- Tommy Farmyard
- Bridie Squires
- Christine Mystique
- Ben Welch
- Lewis Jones
- Millie Carys-Rose
- Laurie Illingworth
- Alfie Eyden

Layout: Could be a staggered grid with overlapping elements, or an editorial spread where each team member gets a block with their name, role placeholder, and image placeholder. The photos will eventually be characterful — candid shots, not corporate headshots — so design the containers accordingly (maybe slightly rotated, with a coloured border or overlay).

---

### 5. GET IN TOUCH (`/get-in-touch`)

A friendly contact page that avoids being just a blank form on white.

Include:
- A warm intro line: "We want to hear from you. Whether you're an artist, a venue, a brand, a charity, or just someone who loves Nottingham — let's talk."
- Contact details prominently displayed:
  - Email: hello@hockleyhustle.co.uk
  - Address: Fisher Gate Point, Nottingham, NG1 1GD
- A simple contact form (Name, Email, Message, Submit) — styled to match the brand, not generic
- Social media links
- Maybe a small embedded map or just the address with a link to Google Maps

---

### 6. BLOG / OPPORTUNITIES (`/blog` and `/blog/[slug]`)

#### Blog Index (`/blog`)
- Grid of blog posts fetched from Sanity CMS
- Each card: Title, date, category tag (e.g. "Opportunity", "News", "Recap"), excerpt, image placeholder
- Filterable by category (optional for v1, nice to have)
- Pagination or "Load more"

#### Blog Post (`/blog/[slug]`)
- Editorial single-post layout
- Hero image placeholder
- Title in display font
- Date and category
- Rich text body (from Sanity Portable Text)
- Author attribution (optional)
- Back to blog link
- Related posts (optional for v1)

---

## Sanity CMS Setup

Create a basic Sanity schema for the blog/opportunities board:

**Blog Post Schema:**
```
- title (string, required)
- slug (slug, generated from title)
- publishedAt (datetime)
- category (string, options: "Opportunity", "News", "Recap", "Announcement")
- excerpt (text, max 200 chars)
- mainImage (image with alt text)
- body (array of block content — Portable Text)
- author (string, optional)
```

Set up:
- Sanity Studio embedded at `/studio` or as a separate deployment
- Live preview for content editors
- GROQ queries for fetching posts
- next-sanity integration with the App Router

---

## Component Architecture (suggested)

```
/app
  /layout.tsx          — Root layout with fonts, metadata
  /page.tsx            — Homepage
  /festivals
    /[slug]/page.tsx   — Festival page template
  /what-we-do
    /page.tsx
  /who-we-are
    /page.tsx
  /get-in-touch
    /page.tsx
  /blog
    /page.tsx           — Blog index
    /[slug]/page.tsx    — Blog post
  /studio               — Sanity Studio (optional embed)

/components
  /layout
    Navbar.tsx
    Footer.tsx
    MegaMenu.tsx
  /home
    Hero.tsx
    ImpactStats.tsx
    FestivalCarousel.tsx
    Testimonials.tsx
    PartnersGrid.tsx
    BlogPreview.tsx
  /festivals
    FestivalHero.tsx
    FestivalContent.tsx
    FestivalStats.tsx
  /shared
    SectionHeading.tsx
    ImagePlaceholder.tsx    — Coloured blocks with labels indicating future image placement
    AnimatedReveal.tsx      — Scroll-triggered wrapper using Framer Motion
    CurlyBrace.tsx          — SVG decorative element
    Asterisk.tsx            — SVG brand accent
  /blog
    BlogCard.tsx
    BlogGrid.tsx
    PortableTextRenderer.tsx
  /contact
    ContactForm.tsx

/lib
  /sanity
    client.ts
    queries.ts
    schemas/
      blogPost.ts

/data
  festivals.ts            — Static festival data (content, stats, quotes)
  team.ts                 — Team member data
  partners.ts             — Partner/funder lists
```

---

## Critical Design Reminders

1. **This is NOT a SaaS site.** No gradient hero with floating mockups. No "Trusted by 10,000+ companies". No uniform card grids. This is an arts organisation with soul.

2. **Editorial, image-led layout.** Think magazine spreads. Asymmetry. Large images with text that wraps around them or overlays them. Pull quotes in large italic serif. Stats woven into prose.

3. **Typography does the heavy lifting.** When there are no images yet, the type and spacing must carry the design. Massive headlines, generous whitespace, confident use of scale.

4. **The photography will be vivid and human.** Design the image containers to accommodate bright, flash-lit, high-energy photos of real people in real moments. The placeholders should suggest this energy.

5. **Placeholder images should be descriptive coloured blocks** — e.g. a teal rectangle with white text saying "Live performer — Hockley Hustle" — NOT grey boxes. This helps content editors understand what goes where.

6. **The curly brace { } and asterisk ✱ are brand elements** — use them as subtle decorative accents, not as primary UI elements. They should feel native to the typography.

7. **Scroll animations should enhance, not distract.** Staggered reveals on headings, subtle parallax on images, smooth transitions between sections. Nothing gimmicky.

8. **Mobile-first but desktop-impressive.** The editorial layouts should gracefully simplify on mobile without losing the brand's energy.

9. **Blog/Opportunities is a key feature.** This is how the Hustle communicates with their community — band callouts, mentorship openings, volunteer drives. It needs to be easy to scan and clearly categorised.

10. **The tone of voice is warm, slightly cheeky, community-first.** Not corporate. Not trying too hard. Confident without being arrogant. Think of it like a friend who's really good at throwing parties for charity.

---

## Reference Points

- **Nike Run Club app** (bold condensed type, dark backgrounds, punchy stats) — for the typographic energy and stats treatment
- **The Face magazine website** — for editorial grid layouts mixing images and text
- **Dazed Digital** — for the fashion/culture editorial feel
- **Resident Advisor** — for how a music/events platform can feel premium and editorial
- **Album artwork grid layout** (see reference image) — for how to display visual content in an editorial grid with slight rotation/overlap on hover

---

## What to Build First

Focus on getting the full frontend scaffold working with:
1. All pages from the sitemap with proper routing
2. The homepage fully built out with all sections
3. At least one festival page fully built (Hockley Hustle) as the template
4. The blog index and post pages connected to Sanity
5. Responsive across all breakpoints
6. Framer Motion animations on key interactions

Populate everything with the real content provided above. Use descriptive coloured placeholder blocks for images. The site should feel complete even without final photography.
