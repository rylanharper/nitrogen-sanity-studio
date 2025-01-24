import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string'
    })
  ],
  preview: {
    prepare: () => ({ title: 'Home' })
  }
})
