import { defineField, defineType } from 'sanity';
import { NotePencil } from '@phosphor-icons/react';
import pluralize from 'pluralize-esm';

import { ShopifyIcon } from '@/components/icons/Shopify';
import { ProductHiddenInput } from '@/components/shopify/ProductHidden';
import { ShopifyDocumentStatus } from '@/components/shopify/ShopifyDocumentStatus';
import { getPriceRange } from '@/utils/getPriceRange';

const GROUPS = [
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: NotePencil
  },
  {
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon
  }
];

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hidden',
      type: 'string',
      components: {
        field: ProductHiddenInput
      },
      group: GROUPS.map((group) => group.name),
      hidden: ({ parent }) => {
        const isActive = parent?.store?.status === 'active';
        const isDeleted = parent?.store?.isDeleted;
        return !parent?.store || (isActive && !isDeleted);
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
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
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
    },
    {
      name: 'priceDesc',
      title: 'Price (Highest first)',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'desc' }]
    },
    {
      name: 'priceAsc',
      title: 'Price (Lowest first)',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'asc' }]
    }
  ],

  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      options: 'store.options',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      variants: 'store.variants'
    },
    prepare(selection) {
      const {
        isDeleted,
        options,
        previewImageUrl,
        priceRange,
        status,
        title,
        variants
      } = selection;

      const optionCount = options?.length;
      const variantCount = variants?.length;

      const description = [
        variantCount ? pluralize('variant', variantCount, true) : 'No variants',
        optionCount ? pluralize('option', optionCount, true) : 'No options'
      ];

      let subtitle = getPriceRange(priceRange);

      if (status !== 'active') {
        subtitle = '(Unavailable in Shopify)';
      }
      if (isDeleted) {
        subtitle = '(Deleted from Shopify)';
      }

      return {
        description: description.join(' / '),
        subtitle,
        title,
        media: () => (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            title={title}
            type="product"
            url={previewImageUrl}
          />
        )
      };
    }
  }
});
