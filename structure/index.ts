import type { StructureResolver } from 'sanity/structure';

import home from './home';
import products from './products';
import collections from './collections';

export const structure: StructureResolver = (S, ctx) =>
  S.list()
    .title('Content')
    .items([
      home(S, ctx),
      S.divider(),
      collections(S, ctx),
      products(S, ctx),
      S.divider()
    ]);
