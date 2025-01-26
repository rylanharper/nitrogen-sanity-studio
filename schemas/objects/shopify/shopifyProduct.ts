import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  name: 'shopifyProduct',
  title: 'Shopify',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true
  },
  readOnly: true,
  fieldsets: [
    {
      name: 'status',
      title: 'Status'
    },
    {
      name: 'organization',
      title: 'Organization',
      options: {
        columns: 2
      }
    }
  ],
  fields: [
    defineField({
      fieldset: 'status',
      name: 'createdAt',
      title: 'Created at',
      type: 'string'
    }),
    defineField({
      fieldset: 'status',
      name: 'updatedAt',
      title: 'Updated at',
      type: 'string'
    }),
    defineField({
      fieldset: 'status',
      name: 'status',
      title: 'Product status',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: ['active', 'archived', 'draft']
      }
    }),
    defineField({
      fieldset: 'status',
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title displayed in both cart and checkout'
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Shopify Product ID'
    }),
    defineField({
      name: 'gid',
      title: 'GID',
      type: 'string',
      description: 'Shopify Product GID'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Shopify Product handle'
    }),
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5
    }),
    defineField({
      fieldset: 'organization',
      name: 'productType',
      title: 'Product type',
      type: 'string'
    }),
    defineField({
      fieldset: 'organization',
      name: 'vendor',
      title: 'Vendor',
      type: 'string'
    }),
    defineField({
      fieldset: 'organization',
      name: 'tags',
      title: 'Tags',
      type: 'string'
    }),
    defineField({
      name: 'priceRange',
      title: 'Price range',
      type: 'priceRange'
    }),
    defineField({
      name: 'previewImageUrl',
      title: 'Preview Image URL',
      type: 'string',
      description: 'Image displayed in both cart and checkout'
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'option'
        })
      ]
    })
  ]
});
