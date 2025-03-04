import { defineArrayMember, defineField } from 'sanity';
import { SparkleIcon } from '@sanity/icons';

export default defineField({
  title: 'Product option',
  name: 'option',
  type: 'object',
  icon: SparkleIcon,
  readOnly: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    })
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare(selection) {
      const { name } = selection;

      return {
        title: name
      };
    }
  }
});
