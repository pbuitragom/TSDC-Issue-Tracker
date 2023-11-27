const { faker } = require("@faker-js/faker");

describe("Internal Tag Editing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to update a internal Tag with random data", () => {
    cy.contains("Internal tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type("#" + faker.lorem.words(2));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to update a internal Tag description with random data", () => {
    cy.contains("Internal tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type("#" + faker.lorem.words(2));
    cy.get('textarea[id="tag-description"]').clear();
    cy.get('textarea[id="tag-description"]').type(faker.lorem.words(10));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("will not allows a user to update a internal Tag description with random data if its over 500 characters", () => {
    cy.contains("Internal tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type("#" + faker.lorem.words(2));
    cy.get('textarea[id="tag-description"]').clear();
    cy.get('textarea[id="tag-description"]').type(
      faker.string.alphanumeric(501)
    );
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Description cannot be longer than 500 characters.").should(
      "be.visible"
    );
  });
});
