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
      name: 'is_published',
      title: 'Is Published Status',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
