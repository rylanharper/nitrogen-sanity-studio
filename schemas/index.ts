// Singletons
import home from './singletons/home';

// Documents
import collection from './documents/collection';
import product from './documents/product';

// Portable Text
import portableText from './portableText/portableText'

// Objects
import linkExternal from './objects/links/link-external';
import linkInternal from './objects/links/link-internal';
import inventory from './objects/shopify/inventory';
import options from './objects/shopify/options';
import placeholderString from './objects/shopify/placeholderString';
import priceRange from './objects/shopify/priceRange';
import proxyString from './objects/shopify/proxyString';
import shopifyCollection from './objects/shopify/shopifyCollection';
import shopifyProduct from './objects/shopify/shopifyProduct';

export const schemaTypes = [
  home,
  collection,
  product,
  portableText,
  linkExternal,
  linkInternal,
  inventory,
  options,
  placeholderString,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyProduct
];
