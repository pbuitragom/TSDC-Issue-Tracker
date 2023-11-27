describe("Internal Tag Creation", () => {
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

  it("allows a user to create a internal Tag with a pseudo random data", async () => {
    const data = await getMockarooData();
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to create a internal Tag with a pseudo random data and add a description with less than 500 characters (a priori)", async () => {
    const data = await getMockarooData();
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
    cy.get('textarea[id="tag-description"]').type(data[0].tagDescription);
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("allows a user to create a internal Tag with a pseudo random data and edit the slug with a pseudo random data", async () => {
    const data = await getMockarooData();
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
    cy.get('input[id="tag-slug"]').type(data[0].tagSlug);
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("wont allow an user to create a internal Tag with a pseudo random data and add a description with more than 500 characters", async () => {
    const data = await getMockarooData();
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
    cy.get('textarea[id="tag-description"]').type(
      data[0].tagDescriptionTooLong
    );
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Description cannot be longer than 500 characters.").should(
      "be.visible"
    );
  });
});
