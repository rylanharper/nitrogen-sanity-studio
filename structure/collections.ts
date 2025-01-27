import { ListItemBuilder } from 'sanity/structure';
import { Package } from '@phosphor-icons/react';

import defineStructure from '@/utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Collections')
    .schemaType('collection')
    .icon(Package)
    .child(
      S.documentTypeList('collection')
    )
);
