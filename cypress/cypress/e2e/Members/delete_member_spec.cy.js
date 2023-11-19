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
    cy.get('tr[data-test-list="members-list-item"]').first().click();
    cy.screenshot("delete-member-2", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('button[data-test-button="member-actions"]').click();
    cy.screenshot("delete-member-3", {
      capture: "viewport",
      width: 1280,
      height: 720,
    });
    cy.get('button[data-test-button="delete-member"]').click();
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
