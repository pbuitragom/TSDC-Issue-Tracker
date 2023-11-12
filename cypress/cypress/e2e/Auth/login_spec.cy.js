describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  });

  it("successfully logs in", () => {
    cy.get('input[id="identification"]').type(Cypress.env("email"));
    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get('button[data-test-button="sign-in"]').click();
    cy.url().should("include", "/#/dashboard");
  });

  it("fails to log in with wrong password", () => {
    cy.get('input[id="identification"]').type(Cypress.env("email"));
    cy.get('input[id="password"]').type("wrongpassword");
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("Your password is incorrect.");
  });

  it("fails to log in with wrong email", () => {
    cy.get('input[id="identification"]').type("user@example.com");
    cy.get('input[id="password"]').type("4$$W0rds!");
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("There is no user with that email address.");
  });

  it("fails to log in with no email input", () => {
    cy.get('input[id="password"]').type("4$$W0rds!");
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("Please fill out the form to sign in.");
  });

  it("fails to log in with no password input", () => {
    cy.get('input[id="identification"]').type(Cypress.env("email"));
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("Please fill out the form to sign in.");
  });
});
