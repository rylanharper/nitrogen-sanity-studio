import { defineField } from 'sanity';

import { ArrowSquareOut } from '@phosphor-icons/react';

export default defineField({
  name: 'linkExternal',
  title: 'External Link',
  type: 'object',
  icon: ArrowSquareOut,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
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
      label: 'label',
      url: 'url',
      newTab: 'newTab'
    },
    prepare(selection) {
      const { label, url, newTab } = selection;

      return {
        media: ArrowSquareOut,
        subtitle: url,
        title: `${label ?? 'Untitled Link'}${newTab ? ' (New Tab Link)' : ''}`
      };
    }
  }
});
