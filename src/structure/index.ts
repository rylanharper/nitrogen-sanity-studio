import type {
  StructureBuilder,
  StructureResolverContext,
} from 'sanity/structure'

import home from './home'
import products from './products'
import collections from './collections'

export const structure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) => {
  return S.list()
    .title('Content')
    .items([
      home(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      S.divider(),
    ])
}
