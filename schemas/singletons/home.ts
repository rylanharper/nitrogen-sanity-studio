import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      title: 'Description',
      name: 'description',
      type: 'portableText'
    })
  ],
  preview: {
    prepare: () => ({ title: 'Home' })
  }
});
