describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to update a internal Tag", () => {
    cy.get('a[title="Edit tag"]').first().click();
    cy.get('input[id="tag-name"]').type("#Updated Tag");
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });
});
