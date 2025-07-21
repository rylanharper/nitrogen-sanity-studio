import { defineField } from 'sanity'

export default defineField({
  name: 'inventory',
  title: 'Inventory',
  type: 'object',
  options: {
    columns: 3,
  },
  fields: [
    defineField({
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
    }),
    defineField({
      name: 'management',
      title: 'Management',
      type: 'string',
    }),
    defineField({
      name: 'policy',
      title: 'Policy',
      type: 'string',
    }),
  ],
})
