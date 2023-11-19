describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to invite a member", () => {
    cy.screenshot("invite-member-1", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.screenshot("invite-member-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('input[id="member-name"]').type(`Test Name ${Date.now()}`);
    cy.screenshot("invite-member-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('input[id="member-email"]').type(`${Date.now()}@test.com`);
    cy.screenshot("invite-member-4", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('button[data-test-button="save"]').click();
    cy.screenshot("invite-member-5", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.contains("Saved").should("be.visible");
    cy.screenshot("invite-member-6", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
  });
});
