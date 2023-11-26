import { faker } from "@faker-js/faker";

describe("Login Tests with random data", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  });

  it("fails to log in with wrong password (Generated Randomly)", () => {
    const randomPassword = faker.internet.password();
    cy.get('input[id="identification"]').type(Cypress.env("email"));
    cy.get('input[id="password"]').type(randomPassword);
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("Your password is incorrect.");
  });

  it("fails to log in with wrong email and password ", () => {
    const randomeEmail = faker.internet.email();
    const randomPassword = faker.internet.password();
    cy.get('input[id="identification"]').type(randomeEmail);
    cy.get('input[id="password"]').type(randomPassword);
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("There is no user with that email address.");
  });

  it("fails to log in with a Random password and no email input", () => {
    const randomPassword = faker.internet.password();
    cy.get('input[id="password"]').type(randomPassword);
    cy.get('button[data-test-button="sign-in"]').click();
    cy.contains("Please fill out the form to sign in.");
  });
});
