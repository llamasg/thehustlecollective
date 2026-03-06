import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'oawanavr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

const futureHustlersPost = {
  _type: 'blogPost',
  title: 'Future Hustlers - Supporting the Next Generation of Nottingham Creatives',
  slug: { _type: 'slug', current: 'future-hustlers-programme-2026' },
  publishedAt: '2026-03-06T10:00:00Z',
  category: 'Opportunity',
  author: 'The Hustle Collective',
  excerpt: 'Future Hustlers is the talent development arm of The Hustle Collective, supporting artists, makers, producers, promoters, and creatives across Nottingham and the wider Midlands.',
  body: [
    {
      _type: 'block',
      _key: 'intro1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'intro1span',
          marks: [],
          text: 'Future Hustlers is the talent development arm of The Hustle Collective, supporting and developing the incredible community of artists, makers, producers, promoters, and creatives who help make Nottingham and the wider Midlands such a thriving place.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'heading_bg',
      style: 'h2',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'heading_bg_span',
          marks: [],
          text: 'Background',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'bg1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'bg1span',
          marks: [],
          text: 'We began by focusing on how we could better support the people who make Hockley Hustle Festival happen. As it is the promoters who curate the festival\'s brilliantly diverse line-ups and bring the party year after year, we launched our Promoter Mentorship Scheme in 2022.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'bg2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'bg2span',
          marks: [],
          text: 'In its first year, we ran an open call and selected 15 participants to take part in a programme of mentorship and workshops led by established promoters and special guests, including Marina from Ladies Music Pub and Alanna Henry from Jazz Refreshed. This initial cohort featured a powerhouse of next generation promoters, many of whom continue to work with us today.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'heading_id',
      style: 'h2',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'heading_id_span',
          marks: [],
          text: 'Industry Day',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'id1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'id1span',
          marks: [],
          text: 'In 2023, we introduced Industry Day in collaboration with Ladies Music Pub, a London based organisation dedicated to platforming and supporting women and gender non-conforming people in the music industry. Ladies Music Pub creates space for creative connection while actively addressing misogyny and abuses of power within the sector through workshops, DJ sets, and curated arts programmes and events.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'id2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'id2span',
          marks: [],
          text: 'Industry Day 2023 was hosted across Rough Trade and Antenna, delivering a full day of panel talks, workshops, and one-to-one sessions. The event was open to anyone looking to connect, share knowledge, and learn from both peers and guest speakers.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'id3',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'id3span',
          marks: [],
          text: 'Topics included artist management, radio play, and community building, alongside hands-on workshops and mentorship sessions focused on marketing and funding. Speakers represented a mix of local industry professionals and invited guests from across the UK. The event was attended by 250 creatives from across the Midlands.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'id4',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'id4span',
          marks: [],
          text: 'Industry Day 2024 took place at Fisher Gate Point, with a stronger focus on workshops and hands-on support sessions, complemented by a smaller selection of curated panel talks covering key industry themes.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'heading_adp',
      style: 'h2',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'heading_adp_span',
          marks: [],
          text: 'Future Hustlers Artist Development Programme',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'adp1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'adp1span',
          marks: [],
          text: 'In 2026, we launch our first-ever Future Hustler Artist Development Programme, connecting with Midlands-based artists, makers, and creatives. The programme will centre mentorship, open discussion, and tailored opportunities for professional and creative growth.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'adp2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'adp2span',
          marks: [],
          text: 'After reviewing an outstanding range of applications, we have brought together a group of individuals with diverse levels of experience to foster collaboration, peer support, and a shared understanding of the importance of community building in sustaining a career in the arts.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'adp3',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'adp3span',
          marks: [],
          text: 'Across the programme, we will work closely with the cohort through workshops, bespoke opportunities, and personalised support, shaped by where individuals are in their careers and what they most need to move forward.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'adp4',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'adp4span',
          marks: [],
          text: 'Guest speakers include Selassie Tevie (Brownswood Recordings), Hannah TW (Ladies Music Pub), JAYAHADADREAM, Nathanael Williams (Colour Factory), Lily London (91, Brick Lane), and Nina Smith (Artist Manager).',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'heading_mentors',
      style: 'h3',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'heading_mentors_span',
          marks: [],
          text: 'Promoter Mentors 2022',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'mentors_list',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'mentors_list_span',
          marks: [],
          text: 'Nathaniel Wilson (MIMM), Rastarella Falade (Cultural Vibrations), Parisa Eilyon (Acoustickle), Will Robinson (I\'M NOT FROM LONDON), Ben Trekkah (Phlexx / Nottingham C.A.N), Jay Sandhu (Nottanother).',
        },
      ],
    },
  ],
}

async function seed() {
  console.log('Seeding Future Hustlers article...')

  // Check if already exists
  const existing = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]._id`,
    { slug: 'future-hustlers-programme-2026' }
  )

  if (existing) {
    console.log('Article already exists, updating...')
    await client.patch(existing).set(futureHustlersPost).commit()
    console.log('Updated:', existing)
  } else {
    const result = await client.create(futureHustlersPost)
    console.log('Created:', result._id)
  }

  console.log('Done!')
}

seed().catch(console.error)
