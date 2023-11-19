describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to delete a member", () => {
    cy.screenshot("delete-member-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(".ember-view.gh-list-data").first().click();
    cy.screenshot("delete-member-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(
      ".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
    ).click();
    cy.screenshot("delete-member-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Delete member").click();
    cy.screenshot("delete-member-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Delete member account").should("be.visible");
    cy.screenshot("delete-member-5", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
