import { defineArrayMember, defineField } from 'sanity'

export default defineField({
  name: 'shopifyProduct',
  type: 'object',
  title: 'Shopify',
  readOnly: true,
  fieldsets: [
    {
      name: 'status',
      title: 'Status',
    },
    {
      name: 'organization',
      title: 'Organization',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      fieldset: 'status',
      name: 'createdAt',
      type: 'string',
      title: 'Created at',
    }),
    defineField({
      fieldset: 'status',
      name: 'updatedAt',
      type: 'string',
      title: 'Updated at',
    }),
    defineField({
      fieldset: 'status',
      name: 'status',
      type: 'string',
      title: 'Product status',
      options: {
        layout: 'dropdown',
        list: ['active', 'archived', 'draft'],
      },
    }),
    defineField({
      fieldset: 'status',
      name: 'isDeleted',
      type: 'boolean',
      title: 'Deleted from Shopify?',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title displayed in both cart and checkout',
    }),
    defineField({
      name: 'id',
      type: 'number',
      title: 'ID',
      description: 'Shopify Product ID',
    }),
    defineField({
      name: 'gid',
      type: 'string',
      title: 'GID',
      description: 'Shopify Product GID',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Shopify Product handle',
    }),
    defineField({
      name: 'descriptionHtml',
      type: 'text',
      title: 'HTML Description',
      rows: 5,
    }),
    defineField({
      fieldset: 'organization',
      name: 'productType',
      type: 'string',
      title: 'Product type',
    }),
    defineField({
      fieldset: 'organization',
      name: 'vendor',
      type: 'string',
      title: 'Vendor',
    }),
    defineField({
      fieldset: 'organization',
      name: 'tags',
      type: 'string',
      title: 'Tags',
    }),
    defineField({
      name: 'priceRange',
      type: 'priceRange',
      title: 'Price range',
    }),
    defineField({
      name: 'previewImageUrl',
      type: 'string',
      title: 'Preview Image URL',
      description: 'Image displayed in both cart and checkout',
    }),
    defineField({
      name: 'options',
      type: 'array',
      title: 'Options',
      of: [defineArrayMember({ type: 'option' })],
    }),
  ],
})
