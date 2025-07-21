import { ListItemBuilder } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons'

import defineStructure from '@/src/utils/define-structure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .child(
      S.document()
      .schemaType('home')
      .documentId('home')
    ),
)
