import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'strapi-react-project-production.up.railway.app',
    ],
  },
});
