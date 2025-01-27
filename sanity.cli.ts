import { defineCliConfig } from 'sanity/cli';
import path from 'path';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.SANITY_STUDIO_DATASET || ''
  },
  vite: (config) => {
    if (!config.resolve) config.resolve = {};

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname)
    };

    return config;
  }
});
