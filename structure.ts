import type { StructureResolver } from 'sanity/structure';

import home from './structure/home';
import products from './structure/products';
import collections from './structure/collections';

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
