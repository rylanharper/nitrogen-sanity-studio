import { defineConfig, isDev } from 'sanity';

// Plugins
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';

// Custom plugins
import { documentActions } from './plugins/documents';

// Schemas
import { structure } from './structure';
import { schemaTypes } from './schemas';

// Dev plugins
const devPlugins = [visionTool()];

// Config
export default defineConfig({
  name: 'default',
  title: 'Nitrogen',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [
    structureTool({
      structure
    }),
    presentationTool({
      previewUrl: {
        origin: isDev
          ? 'http://localhost:3000'
          : process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable'
        }
      }
    }),
    media(),
    colorInput(),
    documentActions(),
    ...(isDev ? devPlugins : [])
  ],

  schema: {
    types: schemaTypes
  }
});
