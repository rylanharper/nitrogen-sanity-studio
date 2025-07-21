import { defineField } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

import { PAGE_REFERENCES } from '@/src/constants'

export default defineField({
  name: 'linkInternal',
  title: 'Internal Link',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: PAGE_REFERENCES,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      slug: 'reference.slug.current',
    },
    prepare({ slug }) {
      return {
        title: 'Internal Link',
        subtitle: slug ? `→ /${slug}` : '→ /homepage',
        media: DocumentIcon,
      }
    },
  },
})
