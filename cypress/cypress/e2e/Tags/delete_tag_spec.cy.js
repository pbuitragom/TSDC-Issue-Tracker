describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to update a internal Tag", () => {
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('button[data-test-button="delete-tag"]').click();
    cy.get('button[data-test-button="confirm"]').click();
    cy.contains("New Tag").should("be.visible");
  });
});
