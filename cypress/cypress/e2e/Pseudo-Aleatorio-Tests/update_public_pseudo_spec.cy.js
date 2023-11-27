const { faker, da } = require("@faker-js/faker");

describe("Public Tag Editing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  async function getMockarooData() {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  }

  it("allows a user to update a Public Tag with pseudo random data", async () => {
    const data = await getMockarooData();
    cy.contains("Public tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type(data[0].tagName + "Edited");
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to update a Public Tag description with pseudo random data", async () => {
    const data = await getMockarooData();
    cy.contains("Public tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type(data[0].tagName + "Edited");
    cy.get('textarea[id="tag-description"]').clear();
    cy.get('input[id="tag-name"]').type(data[0].tagDescription + "Edited");
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("will not allows a user to update a Public Tag description with pseudo random data if its over 500 characters", async () => {
    const data = await getMockarooData();
    cy.contains("Public tags").first().click();
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').clear();
    cy.get('input[id="tag-name"]').type(data[0].tagName + "Edited");
    cy.get('textarea[id="tag-description"]').clear();
    cy.get('textarea[id="tag-description"]').type(
      data[0].tagDescriptionTooLong
    );
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Description cannot be longer than 500 characters.").should(
      "be.visible"
    );
  });
});
