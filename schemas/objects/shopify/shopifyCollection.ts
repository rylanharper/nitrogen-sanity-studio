import { defineField } from 'sanity';

export default defineField({
  name: 'shopifyCollection',
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
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Shopify Collection ID'
    }),
    defineField({
      name: 'gid',
      title: 'GID',
      type: 'string',
      description: 'Shopify Collection GID'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Shopify Collection handle',
      type: 'slug'
    }),
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string'
    })
  ]
});
