describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to create a private Tag", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.screenshot("create-private-tag-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('input[id="tag-name"]').type("#Test Private Tag");
    cy.screenshot("create-private-tag-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('button[data-test-button="save"]').click();
    cy.screenshot("create-private-tag-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Saved").should("be.visible");
    cy.screenshot("create-private-tag-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
