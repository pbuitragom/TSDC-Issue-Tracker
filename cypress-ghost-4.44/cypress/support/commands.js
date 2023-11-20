// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.visit(`${Cypress.env("login_url")}/#/signin`);
  cy.get(".email.ember-text-field.gh-input.ember-view").type(
    Cypress.env("email")
  );
  cy.get('input[name="password"]').type(Cypress.env("password"));
  cy.get(
    ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
  ).click();
  cy.url().should("include", "/#/dashboard");
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
