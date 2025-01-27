import { defineField } from 'sanity';
import { ArrowSquareOut, LinkSimple } from '@phosphor-icons/react';
import { PAGE_REFERENCES } from '@/constants';

export const annotations = [
  {
    name: 'linkExternal',
    title: 'External Link',
    type: 'object',
    icon: ArrowSquareOut,
    fields: [
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
    ]
  },
  {
    name: 'linkInternal',
    title: 'Internal Link',
    type: 'object',
    icon: LinkSimple,
    fields: [
      defineField({
        name: 'linkTarget',
        title: 'Internal Link',
        type: 'reference',
        to: PAGE_REFERENCES
      })
    ]
  }
];
