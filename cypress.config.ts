/// <reference types="node" />

import { defineConfig } from 'cypress';

const baseUrl = process.env['CYPRESS_baseUrl'] ?? 'http://localhost:4200';

export default defineConfig({
  video: true,
  e2e: {
    baseUrl,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    chromeWebSecurity: false,
  },
});
