const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.sportsdirect.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true,
  },
});
