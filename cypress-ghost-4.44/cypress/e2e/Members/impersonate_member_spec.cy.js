describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to get a link to impersonate a member", () => {
    cy.screenshot("impersonate-member-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(".ember-view.gh-list-data").first().click();
    cy.screenshot("impersonate-member-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get(
      ".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
    ).click();
    cy.screenshot("impersonate-member-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Impersonate").click();
    cy.screenshot("impersonate-member-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Copy link").should("be.visible");
    cy.screenshot("impersonate-member-5", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("This link is only valid for the next 24 hours").should(
      "be.visible"
    );
    cy.screenshot("impersonate-member-6", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
