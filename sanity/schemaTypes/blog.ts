import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'basicInfo', title: '📂 Basic Info' },
    { name: 'content', title: '📝 Content & Media' },
    { name: 'seo', title: '🔍 SEO & Discoverability' },
  ],
  fields: [
    // ─── TAB 1: BASIC INFO ──────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      group: 'basicInfo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basicInfo',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      group: 'basicInfo',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      group: 'basicInfo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Photo',
      type: 'image',
      group: 'basicInfo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'basicInfo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'status',
      title: 'Publish Status',
      type: 'string',
      group: 'basicInfo',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      group: 'basicInfo',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      group: 'basicInfo',
    }),

    // ─── TAB 2: CONTENT & MEDIA ─────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Blog Content (Markdown)',
      type: 'text',
      group: 'content',
      rows: 20,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'content',
      initialValue: 1,
      validation: (Rule) => Rule.min(1),
    }),

    // ─── TAB 3: SEO & DISCOVERABILITY ───────────────────────────────
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Falls back to Post Title if left blank.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Falls back to Excerpt if left blank. Aim for 150–160 characters.',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
    }),
    defineField({
      name: 'robotsRule',
      title: 'Robots Meta Rule',
      type: 'string',
      group: 'seo',
      initialValue: 'index, follow',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (Open Graph)',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
      description: 'Falls back to Cover Image if left blank.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, status, media } = selection;
      return {
        title: title,
        subtitle: status === 'published' ? '✅ Published' : '📝 Draft',
        media: media,
      };
    },
  },
});
