describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to invite a member", () => {
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.get('input[id="member-name"]').type(`Test Name ${Date.now()}`);
    cy.get('input[id="member-email"]').type(`${Date.now()}@test.com`);
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });
});
