describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to update a internal Tag", () => {
    cy.get('a[title="Edit tag"]').first().click();
    cy.screenshot("update-public-tag-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('input[id="tag-name"]').type("Updated Tag");
    cy.screenshot("update-public-tag-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(".gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click();
    cy.screenshot("update-public-tag-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Saved").should("be.visible");
    cy.screenshot("update-public-tag-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
