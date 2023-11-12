describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to delete a member", () => {
    cy.get('tr[data-test-list="members-list-item"]').first().click();
    cy.get('button[data-test-button="member-actions"]').click();
    cy.get('button[data-test-button="delete-member"]').click();
    cy.contains("Delete member account").should("be.visible");
  });
});
