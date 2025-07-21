import { defineField } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export default defineField({
  name: 'linkExternal',
  title: 'External Link',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'Enter an external URL path',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'newTab',
      type: 'boolean',
      title: 'Open in new tab?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      url: 'url',
      newTab: 'newTab',
    },
    prepare({ url, newTab }) {
      const truncatedUrl = url?.length > 30 ? `${url.substring(0, 30)}...` : url
      const newTabIndicator = newTab ? ' ↗' : ''

      return {
        title: 'External Link',
        subtitle: `${truncatedUrl}${newTabIndicator}`,
        media: EarthGlobeIcon,
      }
    },
  },
})
