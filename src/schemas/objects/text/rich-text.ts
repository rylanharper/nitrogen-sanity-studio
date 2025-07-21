import { defineArrayMember, defineField } from 'sanity'

import { lists } from './lists'
import { decorators } from './decorators'
import { annotations } from './annotations'

export default defineField({
  name: 'richText',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      lists,
      marks: {
        decorators,
        annotations,
      },
    }),
  ],
})
