import { defineField } from 'sanity';

import { ArrowSquareOut } from '@phosphor-icons/react';

export default defineField({
  name: 'linkExternal',
  title: 'External Link',
  type: 'object',
  icon: ArrowSquareOut,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: 'Enter an external URL path',
      type: 'string',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    }),
    defineField({
      name: 'newTab',
      title: 'Open in new tab?',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      newTab: 'newTab'
    },
    prepare(selection) {
      const { title, url, newTab } = selection;

      return {
        media: ArrowSquareOut,
        subtitle: `→ ${url}`,
        title: `${title ?? 'Untitled Link'}${newTab ? ' (New Tab Link)' : ''}`
      };
    }
  }
});
