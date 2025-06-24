import { config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: {
      label: 'Blog Posts',
      path: 'src/content/blog/*',
      slugField: 'slug',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/blog',
          publicPath: '/blog',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),

        // 🆕 SEO Schema Component Fields
        seoHeadline: fields.text({ label: 'SEO Headline' }),
        breadcrumbItems: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            item: fields.text({ label: 'Item URL' }),
          }),
          { label: 'Breadcrumbs' }
        ),
        content: fields.mdx({ label: 'Content' }),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer' }),
          }),
          { label: 'FAQs' }
        ),
      },
    },
  },
});
