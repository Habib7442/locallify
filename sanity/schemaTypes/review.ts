import { defineField, defineType } from 'sanity';

export const review = defineType({
  name: 'review',
  title: 'Client Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'Review Content Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating Stars (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'role',
      title: 'Role / Designation / Location',
      type: 'string',
    }),
    defineField({
      name: 'is_verified',
      title: 'Is Verified Review',
      type: 'boolean',
      description: 'Internal flag only. The public "Verified" badge is driven by Source URL, never by this field.',
      initialValue: false,
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Link to the original public review (e.g. the Google review). The "Verified" badge shows only when this is set.',
    }),
    defineField({
      name: 'is_published',
      title: 'Is Published Status',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
