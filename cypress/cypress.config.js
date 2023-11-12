const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      login_url: "http://localhost:2369/ghost",
      products_url: "/products",
    },
  },
});
