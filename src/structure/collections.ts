import { ListItemBuilder } from 'sanity/structure'
import { PackageIcon } from '@sanity/icons'

import defineStructure from '@/src/utils/define-structure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Collections')
    .schemaType('collection')
    .icon(PackageIcon)
    .child(
      S.documentTypeList('collection')
    ),
)
