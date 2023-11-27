const { faker } = require("@faker-js/faker");

describe("Public Tag Creation", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to create a public Tag with random data", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type(faker.lorem.words(2));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to create a public Tag with random data and add a description with less than 500 characters (random)", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type(faker.lorem.words(2));
    cy.get('textarea[id="tag-description"]').type(faker.lorem.words(10));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to create a public Tag with random data and edit the slug with random data", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type(faker.lorem.words(2));
    cy.get('input[id="tag-slug"]').type(
      faker.lorem.word() + "-" + faker.lorem.word()
    );
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("wont allow an user to create a public Tag with random data and add a description with more than 500 characters (random)", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type(faker.lorem.words(2));
    cy.get('textarea[id="tag-description"]').type(
      faker.string.alphanumeric(501)
    );
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Description cannot be longer than 500 characters.").should(
      "be.visible"
    );
  });
});
