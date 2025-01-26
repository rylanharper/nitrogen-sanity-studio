import { ListItemBuilder } from 'sanity/structure';
import { Tag } from '@phosphor-icons/react';

import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .schemaType('product')
    .icon(Tag)
    .child(
      S.documentTypeList('product')
    )
);
