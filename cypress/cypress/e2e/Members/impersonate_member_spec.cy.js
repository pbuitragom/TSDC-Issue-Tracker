describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to get a link to impersonate a member", () => {
    cy.get('tr[data-test-list="members-list-item"]').first().click();
    cy.get('button[data-test-button="member-actions"]').click();
    cy.get('button[data-test-button="impersonate"]').click();
    cy.get('button[data-test-button="copy-impersonate-link"]').should(
      "be.visible"
    );
    cy.contains("This link is only valid for the next 24 hours").should(
      "be.visible"
    );
  });
});
