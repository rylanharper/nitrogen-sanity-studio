import { defineField, defineType } from 'sanity'
import pluralize from 'pluralize-esm'

import { ComposeIcon } from '@sanity/icons'
import { ShopifyIcon } from '@/src/components/icons/shopify'

import { CollectionHiddenInput } from '@/src/components/shopify/collection-hidden'
import { ShopifyDocumentStatus } from '@/src/components/shopify/shopify-document-status'

const GROUPS = [
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: ComposeIcon,
  },
  {
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon,
  },
]

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: CollectionHiddenInput,
      },
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted
        return !isDeleted
      },
    }),
    defineField({
      name: 'titleProxy',
      title: 'Title',
      type: 'proxyString',
      options: { field: 'store.title' },
    }),
    defineField({
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: { field: 'store.slug.current' },
    }),
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richText',
      group: 'editorial',
    }),
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{ field: 'store.title', direction: 'asc' }],
    },
    {
      name: 'titleDesc',
      title: 'Title (Z-A)',
      by: [{ field: 'store.title', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'store.title',
      rules: 'store.rules',
      isDeleted: 'store.isDeleted',
      imageUrl: 'store.imageUrl',
    },
    prepare({ title, rules, imageUrl, isDeleted }) {
      const ruleCount = rules?.length || 0

      return {
        title,
        subtitle:
          ruleCount > 0
            ? `Automated (${pluralize('rule', ruleCount, true)})`
            : 'Manual',
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            title={title}
            type="collection"
            url={imageUrl}
          />
        ),
      }
    },
  },
})
