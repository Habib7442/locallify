import { defineField, defineType } from "sanity";

export const lead = defineType({
  name: "lead",
  title: "Inquiries & Leads",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Custom Software / SaaS", value: "custom-software" },
          { title: "Web App / Product", value: "web-app" },
          { title: "Mobile App", value: "mobile-app" },
          { title: "SEO & GEO Systems", value: "seo-geo" },
          { title: "Automations / n8n", value: "automation" },
          { title: "Other", value: "other" },
          { title: "Industry page audit", value: "industry-audit" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "budget",
      title: "Estimated Budget",
      type: "string",
      options: {
        list: [
          { title: "Under $1,000", value: "under-1k" },
          { title: "$1,000 – $5,000", value: "1k-5k" },
          { title: "$5,000 – $15,000", value: "5k-15k" },
          { title: "$15,000 – $50,000", value: "15k-50k" },
          { title: "$50,000+", value: "50k-plus" },
          { title: "Not sure yet", value: "not-sure" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: 'e.g. "industry:dental-website-design" for leads from an industry page',
    }),
    defineField({
      name: "extra",
      title: "Extra details",
      type: "text",
      description: "Pain tags, calculator result and UTM parameters",
    }),
    defineField({
      // Legacy: no longer written. The contact route uses the IP only for rate limiting.
      name: "ipAddress",
      title: "IP Address",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),
  ],
});
