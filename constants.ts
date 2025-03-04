// Currency code (ISO 4217) to use when displaying prices in the studio.
// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'USD';

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['home', 'media.tag'];

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
// - are from the Sanity Connect Shopify app
export const SHOPIFY_DOCUMENT_TYPES = ['product', 'collection'];

// API version to use when using the Sanity client within the studio.
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2025-02-02';

// Your Shopify store ID.
// This is your unique store (e.g. 'my-store-name' in the complete URL of 'https://admin.shopify.com/store/my-store-name/').
// Set this to enable helper links in document status banners and shortcut links on products and collections.
export const SHOPIFY_STORE_ID = '';

// Array of document types that can be referenced as internal links.
// Used in the 'internalLink' schema input.
export const PAGE_REFERENCES = [
  { type: 'home' },
  { type: 'collection' },
  { type: 'product' }
];
