import { defineConfig, isDev } from 'sanity';

// Plugins
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';

// Custom plugins
import { documentActions } from './plugins/documentActions';

// Schemas
import { structure } from './structure';
import { schemaTypes } from './schemas';

// Define dev plugins
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
    media(),
    colorInput(),
    documentActions(),
    ...(isDev ? devPlugins : [])
  ],

  schema: {
    types: schemaTypes
  }
});
