import type { StructureResolver } from 'sanity/structure';

import home from './home'
import products from './products'
import collections from './collections'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      S.divider()
    ])