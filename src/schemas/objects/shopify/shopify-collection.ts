import { defineField } from 'sanity'

export default defineField({
  name: 'shopifyCollection',
  type: 'object',
  title: 'Shopify',
  readOnly: true,
  fieldsets: [
    {
      name: 'status',
      title: 'Status',
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
      name: 'isDeleted',
      type: 'boolean',
      title: 'Deleted from Shopify?',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'id',
      type: 'number',
      title: 'ID',
      description: 'Shopify Collection ID',
    }),
    defineField({
      name: 'gid',
      type: 'string',
      title: 'GID',
      description: 'Shopify Collection GID',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Shopify Collection handle',
    }),
    defineField({
      name: 'descriptionHtml',
      type: 'text',
      title: 'HTML Description',
      rows: 5,
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
      title: 'Image URL',
    }),
  ],
})
