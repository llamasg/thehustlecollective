/**
 * Seed programme data into Sanity CMS.
 *
 * Usage:
 *   node scripts/seed-programmes.mjs
 *
 * Requires SANITY_WRITE_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID,
 * and NEXT_PUBLIC_SANITY_DATASET in .env.local
 */

import { createClient } from '@sanity/client'
import { readFileSync, createReadStream } from 'fs'
import { resolve, basename } from 'path'

// Load .env.local
const envPath = resolve(process.cwd(), '.env.local')
const envContent = readFileSync(envPath, 'utf8')
const env = {}
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '')
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-03-02',
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// Upload a local image to Sanity and return the asset reference
async function uploadImage(localPath) {
  const fullPath = resolve(process.cwd(), 'public', localPath.replace(/^\//, ''))
  const filename = basename(fullPath)
  console.log(`  Uploading ${filename}...`)
  try {
    const stream = createReadStream(fullPath)
    const asset = await client.assets.upload('image', stream, { filename })
    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    }
  } catch (err) {
    console.warn(`  Failed to upload ${filename}: ${err.message}`)
    return null
  }
}

const programmes = [
  {
    slug: 'future-hustlers',
    name: 'Future Hustlers',
    tagline: 'Developing the next generation of Midlands creatives',
    descriptor: 'DEVELOPING THE NEXT GENERATION OF MIDLANDS CREATIVES',
    label: '2022 - Present',
    heroImagePath: '/images/industryday/DSC07264-Enhanced-NR.jpg',
    galleryImagePaths: [],
    hasContent: true,
    featured: true,
    order: 1,
    intro: 'Future Hustlers is the talent development arm of The Hustle Collective, supporting and developing the incredible community of artists, makers, producers, promoters, and creatives who help make Nottingham and the wider Midlands such a thriving place. We began by focusing on how we could better support the people who make Hockley Hustle happen - and what started as a promoter mentorship scheme has grown into a full programme of industry events, artist development, and year-round creative support.',
    sections: [
      {
        _type: 'section',
        _key: 'bg',
        title: 'Background',
        body: "We began by focusing on how we could better support the people who make Hockley Hustle Festival happen. As it is the promoters who curate the festival's brilliantly diverse line-ups and bring the party year after year, we launched our Promoter Mentorship Scheme in 2022.\n\nIn its first year, we ran an open call and selected 15 participants to take part in a programme of mentorship and workshops led by established promoters and special guests, including Marina from Ladies Music Pub and Alanna Henry from Jazz Refreshed. This initial cohort featured a powerhouse of next generation promoters, many of whom continue to work with us today.",
      },
      {
        _type: 'section',
        _key: 'id',
        title: 'Industry Day',
        body: "In 2023, we introduced Industry Day in collaboration with Ladies Music Pub, a London based organisation dedicated to platforming and supporting women and gender non-conforming people in the music industry. Industry Day 2023 was hosted across Rough Trade and Antenna, delivering a full day of panel talks, workshops, and one-to-one sessions attended by 250 creatives from across the Midlands.\n\nIndustry Day 2024 took place at Fisher Gate Point, with a stronger focus on workshops and hands-on support sessions, complemented by a smaller selection of curated panel talks covering key industry themes.",
      },
      {
        _type: 'section',
        _key: 'adp',
        title: 'Artist Development Programme',
        body: "In 2026, we launch our first-ever Future Hustler Artist Development Programme, connecting with Midlands-based artists, makers, and creatives. The programme will centre mentorship, open discussion, and tailored opportunities for professional and creative growth.\n\nAfter reviewing an outstanding range of applications, we have brought together a group of individuals with diverse levels of experience to foster collaboration, peer support, and a shared understanding of the importance of community building in sustaining a career in the arts.",
      },
    ],
    speakers: [],
  },
  {
    slug: 'promoter-mentorship',
    name: 'Promoter Mentorship Scheme',
    tagline: "Building Nottingham's next wave of promoters",
    descriptor: "BUILDING NOTTINGHAM'S NEXT WAVE OF PROMOTERS",
    label: '2022 - 2024',
    heroImagePath: '/images/industryday/DSC08093.jpg',
    galleryImagePaths: [
      '/images/industryday/DSC06731-Enhanced-NR.jpg',
      '/images/industryday/DSC06757.jpg',
      '/images/industryday/DSC07115.jpg',
      '/images/industryday/DSC07567.jpg',
      '/images/industryday/DSC07658-Enhanced-NR.jpg',
      '/images/industryday/DSC07748.jpg',
    ],
    hasContent: true,
    featured: false,
    order: 2,
    intro: 'Future Hustlers launched its Promoter Mentorship Scheme in 2022 - an open call selecting 15 participants for a programme of mentorship and workshops led by established promoters and special guests.',
    sections: [
      {
        _type: 'section',
        _key: 'prog',
        title: 'The programme',
        body: "Future Hustlers launched its Promoter Mentorship Scheme in 2022 - an open call selecting 15 participants for a programme of mentorship and workshops led by established promoters and special guests. The inaugural cohort featured a powerhouse of next-generation promoters, many of whom continue to work with The Hustle Collective today.\n\nIn 2023, the scheme expanded to introduce Industry Day in collaboration with Ladies Music Pub - a London-based organisation dedicated to platforming and supporting women and gender non-conforming people in the music industry. Industry Day 2023 was hosted across Rough Trade and Antenna, delivering a full day of panel talks, workshops, and one-to-one sessions attended by 250 creatives from across the Midlands.\n\nIn 2024, Industry Day moved to Fisher Gate Point with a stronger focus on hands-on workshops and support sessions alongside curated panel talks.",
      },
    ],
    speakers: [
      { _type: 'speaker', _key: 'nw', name: 'Nathaniel Wilson', role: 'MIMM' },
      { _type: 'speaker', _key: 'rf', name: 'Rastarella Falade', role: 'Cultural Vibrations' },
      { _type: 'speaker', _key: 'pe', name: 'Parisa Eilyon', role: 'Acoustickle' },
      { _type: 'speaker', _key: 'wr', name: 'Will Robinson', role: "I'm Not From London" },
      { _type: 'speaker', _key: 'bt', name: 'Ben Trekkah', role: 'Phlexx / Nottingham C.A.N' },
      { _type: 'speaker', _key: 'js', name: 'Jay Sandhu', role: 'Nottanother' },
    ],
  },
  {
    slug: 'industry-day-2023',
    name: 'Industry Day 2023',
    tagline: 'A full day of panels, workshops & connection',
    descriptor: 'A FULL DAY OF PANELS, WORKSHOPS & CONNECTION',
    label: 'Oct 2023',
    heroImagePath: '/images/industryday/panel/DSC07086-Enhanced-NR.jpg',
    galleryImagePaths: [
      '/images/industryday/panel/DSC06775-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC06941-Enhanced-NR4-2.jpg',
      '/images/industryday/panel/DSC07181-Enhanced6-NR.jpg',
      '/images/industryday/panel/DSC07564-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC07606-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC07631-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC07710-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC07891-Enhanced-NR.jpg',
      '/images/industryday/panel/DSC07973-Enhanced-NR.jpg',
    ],
    hasContent: false,
    featured: false,
    order: 3,
    sections: [],
    speakers: [],
  },
  {
    slug: 'industry-day-2024',
    name: 'Industry Day 2024',
    tagline: 'Hands-on support for Midlands creatives',
    descriptor: 'HANDS-ON SUPPORT FOR MIDLANDS CREATIVES',
    label: 'Oct 2024',
    heroImagePath: '/images/industryday/DSC08125-Enhanced-NR.jpg',
    galleryImagePaths: [
      '/images/industryday/DSC08302-Enhanced-NR.jpg',
      '/images/industryday/DSC08339-Enhanced-NR.jpg',
      '/images/industryday/DSC08377-Enhanced-NR.jpg',
      '/images/industryday/DSC07779-Enhanced-NR.jpg',
      '/images/industryday/DSC07789-Enhanced-NR.jpg',
      '/images/industryday/DSC06891-Enhanced-NR.jpg',
      '/images/industryday/DSC06926-Enhanced-NR.jpg',
    ],
    hasContent: false,
    featured: false,
    order: 4,
    sections: [],
    speakers: [],
  },
  {
    slug: 'industry-weekend-2025',
    name: 'Industry Weekend',
    tagline: 'Two days. Workshops. Mentorship. Community.',
    descriptor: 'TWO DAYS. WORKSHOPS. MENTORSHIP. COMMUNITY.',
    label: 'Mar 21-22 2025',
    heroImagePath: '/images/industryday/DSC07264-Enhanced-NR.jpg',
    galleryImagePaths: [],
    hasContent: false,
    featured: false,
    order: 5,
    sections: [],
    speakers: [],
  },
  {
    slug: 'artist-development-2026',
    name: 'Artist Development Programme',
    tagline: 'Bespoke mentorship for Midlands artists & makers',
    descriptor: 'BESPOKE MENTORSHIP FOR MIDLANDS ARTISTS & MAKERS',
    label: '2026',
    heroImagePath: '/images/industryday/DSC06731-Enhanced-NR.jpg',
    galleryImagePaths: [],
    hasContent: true,
    featured: false,
    order: 6,
    intro: 'In 2026, Future Hustlers launches its first-ever Artist Development Programme - connecting with Midlands-based artists, makers, and creatives for a year of mentorship, open discussion, and tailored opportunities for professional and creative growth.',
    sections: [
      {
        _type: 'section',
        _key: 'prog',
        title: 'The programme',
        body: "In 2026, Future Hustlers launches its first-ever Artist Development Programme - connecting with Midlands-based artists, makers, and creatives for a year of mentorship, open discussion, and tailored opportunities for professional and creative growth.\n\nAfter reviewing an outstanding range of applications, we have brought together a group of individuals with diverse levels of experience to foster collaboration, peer support, and a shared understanding of the importance of community building in sustaining a career in the arts.\n\nAcross the programme, participants will work closely with our team through workshops, bespoke opportunities, and personalised support - shaped by where individuals are in their careers and what they most need to move forward.",
      },
    ],
    speakers: [
      { _type: 'speaker', _key: 'st', name: 'Selassie Tevie', role: 'Brownswood Recordings' },
      { _type: 'speaker', _key: 'ht', name: 'Hannah TW', role: 'Ladies Music Pub' },
      { _type: 'speaker', _key: 'jd', name: 'JAYAHADADREAM', role: '' },
      { _type: 'speaker', _key: 'nwi', name: 'Nathanael Williams', role: 'Colour Factory' },
      { _type: 'speaker', _key: 'll', name: 'Lily London', role: '91, Brick Lane' },
      { _type: 'speaker', _key: 'ns', name: 'Nina Smith', role: 'Artist Manager' },
    ],
  },
]

async function seed() {
  console.log('Seeding programmes into Sanity...\n')

  for (const prog of programmes) {
    const { heroImagePath, galleryImagePaths, ...fields } = prog

    console.log(`\n--- ${fields.name} ---`)

    // Upload hero image
    const heroImage = await uploadImage(heroImagePath)

    // Upload gallery images
    const galleryImages = []
    for (const imgPath of galleryImagePaths) {
      const img = await uploadImage(imgPath)
      if (img) galleryImages.push({ ...img, _key: basename(imgPath).replace(/\./g, '_') })
    }

    const doc = {
      _type: 'programme',
      _id: `programme-${fields.slug}`,
      name: fields.name,
      slug: { _type: 'slug', current: fields.slug },
      tagline: fields.tagline,
      descriptor: fields.descriptor,
      label: fields.label,
      featured: fields.featured ?? false,
      hasContent: fields.hasContent,
      order: fields.order,
      ...(heroImage ? { heroImage } : {}),
      ...(galleryImages.length > 0 ? { galleryImages } : {}),
      ...(fields.intro ? { intro: fields.intro } : {}),
      ...(fields.sections?.length > 0 ? { sections: fields.sections } : {}),
      ...(fields.speakers?.length > 0 ? { speakers: fields.speakers } : {}),
    }

    try {
      const result = await client.createOrReplace(doc)
      console.log(`  Created: ${result._id}`)
    } catch (err) {
      console.error(`  Failed: ${err.message}`)
    }
  }

  console.log('\nDone!')
}

seed().catch(console.error)
