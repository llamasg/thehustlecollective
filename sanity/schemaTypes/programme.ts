import { defineField, defineType } from 'sanity'

export const programme = defineType({
  name: 'programme',
  title: 'Programme',
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
      description: 'Short subtitle shown below the title',
    }),
    defineField({
      name: 'descriptor',
      title: 'Descriptor',
      type: 'string',
      description: 'Uppercase one-liner for the hero',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Date or year label shown on cards (e.g. "2026" or "2022 - Present")',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show as the featured hub card on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'hasContent',
      title: 'Has Editorial Content',
      type: 'boolean',
      description: 'If false, shows gallery-only mode',
      initialValue: false,
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
      description: 'Opening paragraph displayed large before sections',
      rows: 5,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
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
      description: 'Highlighted quote displayed between sections',
      rows: 3,
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers / Guests',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'speaker',
          title: 'Speaker',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'role' },
          },
        },
      ],
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
      description: 'Lower numbers appear first',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'label',
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
