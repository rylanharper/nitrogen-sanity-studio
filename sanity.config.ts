import { defineConfig, isDev } from 'sanity'

// Plugins
import { assist } from '@sanity/assist'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { media } from 'sanity-plugin-media'

// Custom plugins
import { documentActions } from '@/src/plugins/document-actions'

// Schemas
import { structure } from '@/src/structure'
import { schemaTypes } from '@/src/schemas'

// Dev plugins
const devPlugins = [visionTool()]

// Config
export default defineConfig({
  name: 'default',
  title: 'Nitrogen',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        origin: isDev
          ? 'http://localhost:3000'
          : process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    media(),
    assist(),
    colorInput(),
    documentActions(),
    ...(isDev ? devPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
