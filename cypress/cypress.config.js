const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      login_url: "http://localhost:2368/ghost",
      products_url: "/products",
    },
  },
});
