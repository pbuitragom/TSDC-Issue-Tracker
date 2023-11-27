describe("Internal Tag Creation", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to create a internal Tag with a priori data", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
      cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
      cy.get('button[data-test-button="save"]').click();
      cy.contains("Saved").should("be.visible");
    });
  });

  it("allows a user to create a internal Tag with a priori data and add a description with less than 500 characters (a priori)", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
      cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
      cy.get('textarea[id="tag-description"]').type(data[0].tagDescription);
      cy.get('button[data-test-button="save"]').click();
      cy.contains("Saved").should("be.visible");
    });
  });

  it("allows a user to create a internal Tag with a priori data and edit the slug with a priori data", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
      cy.get('input[id="tag-name"]').type("#" + data[0].tagName);
      cy.get('input[id="tag-slug"]').type(data[0].tagSlug);
      cy.get('button[data-test-button="save"]').click();
      cy.contains("Saved").should("be.visible");
    });
  });

  it("wont allow an user to create a internal Tag with a priori data and add a description with more than 500 characters (a priori)", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
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
});
