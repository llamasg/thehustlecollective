import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'programme',
      title: 'Programme',
      type: 'reference',
      to: [{ type: 'programme' }],
      validation: (rule) => rule.required(),
      description: 'Which programme this event belongs to',
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          { title: 'Saturday', value: 'Saturday' },
          { title: 'Sunday', value: 'Sunday' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "10.00 - 11.00"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Panel', value: 'Panel' },
          { title: 'Discussion', value: 'Discussion' },
          { title: '1-1 Sessions', value: '1-1 Sessions' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'host',
      title: 'Host',
      type: 'string',
      description: 'Person hosting this event',
    }),
    defineField({
      name: 'panelists',
      title: 'Panelists / Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'panelist',
          title: 'Panelist',
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
      name: 'bookingRequired',
      title: 'Booking Required',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'eventbriteUrl',
      title: 'Eventbrite URL',
      type: 'url',
      description: 'Optional booking link for this specific event',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first within the same day',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      day: 'day',
      time: 'time',
      type: 'type',
    },
    prepare({ title, day, time, type }) {
      return {
        title: title || 'Untitled Event',
        subtitle: `${day || '?'} · ${time || '?'} · ${type || '?'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Day & Time',
      name: 'dayTimeAsc',
      by: [
        { field: 'day', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})
