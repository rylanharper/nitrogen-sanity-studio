import { ListItemBuilder } from 'sanity/structure';
import { HouseLine } from '@phosphor-icons/react';

import defineStructure from '../utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .icon(HouseLine)
    .child(
      S.document()
      .title('Home')
      .schemaType('home')
      .documentId('home')
    )
);
