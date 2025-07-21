import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home Page',
  description:
    'This is where you create the main page visitors see when they first come to your website.',
  fields: [
    defineField({
      name: 'description',
      type: 'richText',
      title: 'Description',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home' }),
  },
})
