import LoginPage from "../../support/pageObjects/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("successfully logs in", () => {
    loginPage.fillEmail(Cypress.env("email"));
    loginPage.fillPassword(Cypress.env("password"));
    loginPage.submit();
    cy.url().should("include", "/#/dashboard");
  });

  it("fails to log in with wrong password", () => {
    loginPage.fillEmail(Cypress.env("email"));
    loginPage.fillPassword("wrongpassword");
    loginPage.submit();
    cy.contains("Your password is incorrect.");
  });

  it("fails to log in with wrong email", () => {
    loginPage.fillEmail("user@example.com");
    loginPage.fillPassword("4$$W0rds!");
    loginPage.submit();
    cy.contains("There is no user with that email address.");
  });

  it("fails to log in with no email input", () => {
    loginPage.fillPassword("4$$W0rds!");
    loginPage.submit();
    cy.contains("Please fill out the form to sign in.");
  });

  it("fails to log in with no password input", () => {
    loginPage.fillEmail(Cypress.env("email"));
    loginPage.submit();
    cy.contains("Please fill out the form to sign in.");
  });
});
