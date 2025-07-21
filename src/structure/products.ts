import { ListItemBuilder } from 'sanity/structure'
import { TagIcon } from '@sanity/icons'

import defineStructure from '@/src/utils/define-structure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .schemaType('product')
    .icon(TagIcon)
    .child(
      S.documentTypeList('product')
    ),
)
