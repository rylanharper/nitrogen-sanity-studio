import { defineArrayMember, defineField } from 'sanity';

import { lists } from './text/lists';
import { decorators } from './text/decorators';
import { annotations } from './text/annotations';

export default defineField({
  name: 'portableText',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      lists,
      marks: {
        decorators,
        annotations
      }
    })
  ]
});
