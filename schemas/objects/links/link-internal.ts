import { defineField } from 'sanity';

import { LinkSimple } from '@phosphor-icons/react'
import { PAGE_REFERENCES } from '@/constants';

export default defineField({
  name: 'linkInternal',
  title: 'Internal Link',
  type: 'object',
  icon: LinkSimple,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string'
    }),
    defineField({
      name: 'linkTarget',
      title: 'Internal Link',
      type: 'reference',
      to: PAGE_REFERENCES,
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      label: 'label',
      targetTitle: 'linkTarget.title'
    },
    prepare(selection) {
      const { label, targetTitle } = selection;

      return {
        title: label ?? targetTitle,
        media: LinkSimple
      }
    }
  }
})
