import { ListItemBuilder } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons'

import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .icon(HomeIcon)
    .child(
      S.editor()
      .title('Home')
      .schemaType('home')
      .documentId('home')
    )
)
