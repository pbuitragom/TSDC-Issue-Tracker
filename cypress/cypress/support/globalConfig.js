// cypress/support/globalConfig.js
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
