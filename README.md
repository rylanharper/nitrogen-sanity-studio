# Nitrogen Sanity Studio

A minimal Sanity studio built for [Nitrogen](https://github.com/rylanharper/nitrogen). This studio uses [Sanity Connect](https://www.sanity.io/docs/sanity-connect-for-shopify) to synchronize content between a Sanity dataset and your Shopify store.

> [!IMPORTANT]
> This studio is a very minimal version of the default `--template shopify` by Sanity. It contains no `productVariant` document type or its corresponding helper functions.

## 💻 Development

I recommend reading through the official [Sanity and Shopify with Hydrogen](https://www.sanity.io/learn/course/sanity-and-shopify-with-hydrogen) guide to learn the basics of how to connect your Sanity dataset with your Shopify store data.

To begin using this studio template, you'll need to add the following environment variables:

```ini
# Sanity
SANITY_STUDIO_PROJECT_ID=gibvd6r4
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=https://your-site-domain.com
```

> [!TIP]
> `collection`, `product`, and `productVariant` are reserved schema document types that cannot be renamed.

### Local Setup

1. Install dependencies using `pnpm install`
2. Start the development server using `pnpm dev`

## 🌱 Contribute

Contributions are always welcome! If you’d like to help improve this project, here’s how you can get involved:

- Post an issue: Use the [Issues tab](https://github.com/rylanharper/nitrogen-sanity-studio/issues) to report bugs or request new features.
- Start a discussion: Share ideas or ask for help in the [Discussions tab](https://github.com/rylanharper/nitrogen-sanity-studio/discussions).
- Submit a pull request: If you’d like to contribute, fork the repository, make your changes, and submit a pull request for review.

I actively monitor this repository and will do my best to respond quickly. Whether it’s fixing a small typo or adding a new feature, every contribution helps!
