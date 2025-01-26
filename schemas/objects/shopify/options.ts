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
      title: 'Name',
      name: 'name',
      type: 'string'
    }),
    defineField({
      title: 'Values',
      name: 'values',
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
