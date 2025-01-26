import { defineField, defineType } from 'sanity';
import { Newspaper, ShoppingCart } from '@phosphor-icons/react';
import pluralize from 'pluralize-esm';

import { CollectionHiddenInput } from '../../components/shopify/CollectionHidden';
import { ShopifyDocumentStatus } from '../../components/shopify/ShopifyDocumentStatus';

const GROUPS = [
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: Newspaper
  },
  {
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShoppingCart
  }
];

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
        field: CollectionHiddenInput
      },
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted;
        return !isDeleted;
      }
    }),
    defineField({
      name: 'titleProxy',
      title: 'Title',
      type: 'proxyString',
      options: { field: 'store.title' }
    }),
    defineField({
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: { field: 'store.slug.current' }
    }),
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'portableText',
      group: 'editorial'
    })
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{ field: 'store.title', direction: 'asc' }]
    },
    {
      name: 'titleDesc',
      title: 'Title (Z-A)',
      by: [{ field: 'store.title', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      imageUrl: 'store.imageUrl',
      isDeleted: 'store.isDeleted',
      rules: 'store.rules',
      title: 'store.title'
    },
    prepare(selection) {
      const { imageUrl, isDeleted, rules, title } = selection;
      const ruleCount = rules?.length || 0;

      return {
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            title={title}
            type="collection"
            url={imageUrl}
          />
        ),
        subtitle:
          ruleCount > 0
            ? `Automated (${pluralize('rule', ruleCount, true)})`
            : 'Manual',
        title
      };
    }
  }
});
