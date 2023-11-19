describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  });

  it("successfully logs in", () => {
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      Cypress.env("email")
    );
    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get(
      ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    ).click();
    cy.url().should("include", "/#/dashboard");
  });

  it("fails to log in with wrong password", () => {
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      Cypress.env("email")
    );
    cy.get(".password.ember-text-field.gh-input.ember-view").type(
      "wrongpassword"
    );
    cy.get(
      ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    ).click();
    cy.contains("Your password is incorrect.");
  });

  it("fails to log in with wrong email", () => {
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      "user@example.com"
    );
    cy.get(".password.ember-text-field.gh-input.ember-view").type("4$$W0rds!");
    cy.get(
      ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    ).click();
    cy.contains("There is no user with that email address.");
  });

  it("fails to log in with no email input", () => {
    cy.get(".password.ember-text-field.gh-input.ember-view").type("4$$W0rds!");
    cy.get(
      ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    ).click();
    cy.contains("Please fill out the form to sign in.");
  });

  it("fails to log in with no password input", () => {
    cy.get(".email.ember-text-field.gh-input.ember-view").type(
      Cypress.env("email")
    );
    cy.get(
      ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    ).click();
    cy.contains("Please fill out the form to sign in.");
  });
});
