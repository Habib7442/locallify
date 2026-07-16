import { defineField, defineType } from 'sanity';

export const businessProfile = defineType({
  name: 'businessProfile',
  title: 'Business Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'business_name',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'business_name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'business_category',
      title: 'Business Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'owner_name',
      title: 'Owner Name',
      type: 'string',
    }),
    defineField({
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp_number',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    defineField({
      name: 'email_address',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'full_address',
      title: 'Full Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'business_hours',
      title: 'Business Hours',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biography / Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'logo',
      title: 'Business Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image Banner',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'product_photos',
      title: 'Product/Service Showcase Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'instagram_handle',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'facebook_page_link',
      title: 'Facebook Page Link',
      type: 'url',
    }),
    defineField({
      name: 'google_review_link',
      title: 'Google Review Link',
      type: 'url',
    }),
    defineField({
      name: 'is_public',
      title: 'Public Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'is_verified',
      title: 'Verified Business Status',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'is_active',
      title: 'Is Active Profile',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
