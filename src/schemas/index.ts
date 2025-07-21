// Singletons
import home from './singletons/home'

// Documents
import collection from './documents/collection'
import product from './documents/product'

// Objects
import linkExternal from './objects/links/link-external'
import linkInternal from './objects/links/link-internal'
import inventory from './objects/shopify/inventory'
import options from './objects/shopify/options'
import placeholderString from './objects/shopify/placeholder-string'
import priceRange from './objects/shopify/price-range'
import proxyString from './objects/shopify/proxy-string'
import shopifyCollection from './objects/shopify/shopify-collection'
import shopifyProduct from './objects/shopify/shopify-product'
import richText from './objects/text/rich-text'

export const schemaTypes = [
  home,
  collection,
  product,
  linkExternal,
  linkInternal,
  inventory,
  options,
  placeholderString,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyProduct,
  richText
]
