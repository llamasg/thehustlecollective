import { defineField, defineType } from 'sanity'

export const festival = defineType({
  name: 'festival',
  title: 'Festival',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short subtitle (e.g. "Nottingham\'s music & arts festival, all for charity")',
    }),
    defineField({
      name: 'established',
      title: 'Year Established',
      type: 'number',
      description: 'The year the festival was founded',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'color',
      description: 'Primary brand color used for headings, stats, and buttons',
    }),
    defineField({
      name: 'accentColorLight',
      title: 'Accent Color (Light)',
      type: 'color',
      description: 'Light variant of the accent color',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'Opening paragraph displayed large at the top of the page',
      rows: 5,
    }),
    defineField({
      name: 'sections',
      title: 'Editorial Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'festivalSection',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              description: 'Paragraphs separated by blank lines',
              rows: 10,
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
    defineField({
      name: 'pullQuote',
      title: 'Pull Quote',
      type: 'text',
      description: 'Featured quote displayed between sections',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      description: 'Key stats displayed in a grid (e.g. "19" / "Years running")',
      of: [
        {
          type: 'object',
          name: 'stat',
          title: 'Statistic',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Website',
      type: 'url',
      description: 'Link to the festival website',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first (Hockley Hustle = 1, Green Hustle = 2, Young Hustlers = 3)',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'heroImage',
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
