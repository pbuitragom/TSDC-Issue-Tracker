describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to delete a Tag", () => {
    cy.get('a[title="Edit tag"]').first().click();
    cy.screenshot("delete-tag-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(".gh-btn.gh-btn-red.gh-btn-icon").click();
    cy.screenshot("delete-tag-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Are you sure you want to delete this tag?").should(
      "be.visible"
    );
    cy.screenshot("delete-tag-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
    cy.contains("New Tag").should("be.visible");
    cy.screenshot("delete-tag-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
