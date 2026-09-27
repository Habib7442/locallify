import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'project',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'basicInfo', title: '📂 Basic Info' },
    { name: 'caseStudyDetails', title: '📝 Case Study' },
    { name: 'mediaGallery', title: '🖼️ Media & Gallery' },
    { name: 'seoDiscoverability', title: '🔍 SEO & Discoverability' },
    { name: 'performance', title: '⚡ Performance' },
    { name: 'portfolioConfig', title: '⚙️ Portfolio Config' },
  ],
  fields: [
    // ─── TAB 1: BASIC INFO ──────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      group: 'basicInfo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientLocation',
      title: 'Client Location',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'clientWebsite',
      title: 'Client Website',
      type: 'url',
      group: 'basicInfo',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      group: 'basicInfo',
      options: {
        list: [
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      group: 'basicInfo',
    }),
    defineField({
      name: 'myRole',
      title: 'My Role',
      type: 'string',
      group: 'basicInfo',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      group: 'basicInfo',
      initialValue: 1,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      group: 'basicInfo',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'tags',
      title: 'General Tags',
      type: 'array',
      group: 'basicInfo',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'live_url',
      title: 'Live Project Link',
      type: 'url',
      group: 'basicInfo',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'basicInfo',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // ─── TAB 2: CASE STUDY NARRATIVE ────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'caseStudyDetails',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'caseStudyDetails',
      rows: 2,
    }),
    defineField({
      name: 'overview',
      title: 'About / Overview',
      type: 'text',
      group: 'caseStudyDetails',
      rows: 5,
    }),
    defineField({
      name: 'problemSummary',
      title: 'Client Challenge',
      type: 'text',
      group: 'caseStudyDetails',
      rows: 5,
    }),
    defineField({
      name: 'goals',
      title: 'Project Goals',
      type: 'array',
      group: 'caseStudyDetails',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'solution',
      title: 'My Solution',
      type: 'text',
      group: 'caseStudyDetails',
      rows: 5,
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      group: 'caseStudyDetails',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Client Results',
      type: 'array',
      group: 'caseStudyDetails',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),

    // ─── TAB 3: MEDIA & GALLERY ─────────────────────────────────────
    defineField({
      name: 'thumbnail',
      title: 'Cover Image',
      type: 'image',
      group: 'mediaGallery',
      options: { hotspot: true },
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      group: 'mediaGallery',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroBannerImage',
      title: 'Hero Banner Image',
      type: 'image',
      group: 'mediaGallery',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      group: 'mediaGallery',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),

    // ─── TAB 4: SEO & DISCOVERABILITY ────────────────────────────────
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seoDiscoverability',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seoDiscoverability',
      rows: 3,
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seoDiscoverability',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Keywords',
      type: 'array',
      group: 'seoDiscoverability',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'robotsRule',
      title: 'Robots Meta Rule',
      type: 'string',
      group: 'seoDiscoverability',
      initialValue: 'index, follow',
    }),
    defineField({
      name: 'enableLocalSeo',
      title: 'Enable Local SEO',
      type: 'boolean',
      group: 'seoDiscoverability',
      initialValue: false,
    }),
    defineField({
      name: 'gbpUrl',
      title: 'Google Business Link',
      type: 'url',
      group: 'seoDiscoverability',
      hidden: ({ parent }) => !parent?.enableLocalSeo,
    }),
    defineField({
      name: 'mapsEmbedUrl',
      title: 'Google Maps Embed Link',
      type: 'url',
      group: 'seoDiscoverability',
      hidden: ({ parent }) => !parent?.enableLocalSeo,
    }),
    defineField({
      name: 'localKeywords',
      title: 'Local Keywords',
      type: 'array',
      group: 'seoDiscoverability',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      hidden: ({ parent }) => !parent?.enableLocalSeo,
    }),
    defineField({
      name: 'targetAreas',
      title: 'Target Areas',
      type: 'array',
      group: 'seoDiscoverability',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      hidden: ({ parent }) => !parent?.enableLocalSeo,
    }),
    defineField({
      name: 'napConsistency',
      title: 'NAP Consistency',
      type: 'text',
      group: 'seoDiscoverability',
      rows: 2,
      hidden: ({ parent }) => !parent?.enableLocalSeo,
    }),
    defineField({
      name: 'enableAiOptimization',
      title: 'Enable AI Crawler Opt',
      type: 'boolean',
      group: 'seoDiscoverability',
      initialValue: false,
    }),
    defineField({
      name: 'agenticSummary',
      title: 'AI Agentic Summary',
      type: 'text',
      group: 'seoDiscoverability',
      rows: 4,
      hidden: ({ parent }) => !parent?.enableAiOptimization,
    }),
    defineField({
      name: 'agentInstructions',
      title: 'LLM System Hints',
      type: 'text',
      group: 'seoDiscoverability',
      rows: 2,
      hidden: ({ parent }) => !parent?.enableAiOptimization,
    }),

    // ─── TAB 5: PERFORMANCE ─────────────────────────────────────────
    defineField({
      name: 'lighthouseDesktop',
      title: 'Lighthouse Desktop Scores',
      type: 'object',
      group: 'performance',
      fields: [
        { name: 'screenshot', title: 'Desktop Screenshot', type: 'image' },
        { name: 'performance', title: 'Desktop Performance', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'accessibility', title: 'Desktop Accessibility', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'bestPractices', title: 'Desktop Best Practices', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'seo', title: 'Desktop SEO Score', type: 'number', validation: Rule => Rule.min(0).max(100) },
      ],
    }),
    defineField({
      name: 'lighthouseMobile',
      title: 'Lighthouse Mobile Scores',
      type: 'object',
      group: 'performance',
      fields: [
        { name: 'screenshot', title: 'Mobile Screenshot', type: 'image' },
        { name: 'performance', title: 'Mobile Performance', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'accessibility', title: 'Mobile Accessibility', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'bestPractices', title: 'Mobile Best Practices', type: 'number', validation: Rule => Rule.min(0).max(100) },
        { name: 'seo', title: 'Mobile SEO Score', type: 'number', validation: Rule => Rule.min(0).max(100) },
      ],
    }),
    defineField({
      name: 'scClicks',
      title: 'GSC Clicks',
      type: 'number',
      group: 'performance',
    }),
    defineField({
      name: 'scImpressions',
      title: 'GSC Impressions',
      type: 'number',
      group: 'performance',
    }),
    defineField({
      name: 'scCtr',
      title: 'GSC Average CTR',
      type: 'number',
      group: 'performance',
    }),
    defineField({
      name: 'scPosition',
      title: 'GSC Average Position',
      type: 'number',
      group: 'performance',
    }),
    defineField({
      name: 'scIndexedPages',
      title: 'GSC Indexed Pages',
      type: 'number',
      group: 'performance',
    }),
    defineField({
      name: 'scPerformanceScreenshot',
      title: 'GSC Performance Img',
      type: 'image',
      group: 'performance',
    }),
    defineField({
      name: 'scCoreWebVitalsScreenshot',
      title: 'GSC Core Vitals Img',
      type: 'image',
      group: 'performance',
    }),

    // ─── TAB 6: PORTFOLIO CONFIG ─────────────────────────────────────
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      group: 'portfolioConfig',
      initialValue: false,
    }),
    defineField({
      name: 'is_public',
      title: 'Public Visibility',
      type: 'boolean',
      group: 'portfolioConfig',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order Priority',
      type: 'number',
      group: 'portfolioConfig',
      initialValue: 0,
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Review & Testimonial',
      type: 'object',
      group: 'portfolioConfig',
      fields: [
        { name: 'rating', title: 'Testimonial Rating', type: 'number', initialValue: 5, validation: Rule => Rule.min(1).max(5) },
        { name: 'clientName', title: 'Reviewer Name', type: 'string' },
        { name: 'company', title: 'Reviewer Company', type: 'string' },
        { name: 'designation', title: 'Reviewer Designation', type: 'string' },
        { name: 'photo', title: 'Reviewer Photo', type: 'image' },
        { name: 'testimonial', title: 'Review Quote', type: 'text', rows: 4 },
        { name: 'sourceUrl', title: 'Source URL', type: 'url', description: 'Link to the original public review (e.g. the Google review). The "Verified" badge shows only when this is set.' },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom CTA Block Override',
      type: 'object',
      group: 'portfolioConfig',
      fields: [
        { name: 'title', title: 'CTA Title', type: 'string' },
        { name: 'description', title: 'CTA Description', type: 'text', rows: 2 },
        { name: 'buttonText', title: 'CTA Button Label', type: 'string' },
        { name: 'buttonLink', title: 'CTA Button Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Case Study FAQs',
      type: 'array',
      group: 'portfolioConfig',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'thumbnail',
    },
    prepare(selection) {
      const { title, client, media } = selection;
      return {
        title: title,
        subtitle: client ? `Client: ${client}` : '',
        media: media,
      };
    },
  },
});
