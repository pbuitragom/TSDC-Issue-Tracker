describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/tags`);
  });

  it("allows a user to create a public Tag", () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.get('input[id="tag-name"]').type("Test Public Tag");
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });
});
