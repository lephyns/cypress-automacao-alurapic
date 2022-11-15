const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "cypress/reports/junit/test-results-[hash].xml",
    "toConsole" : true
}
  }
})