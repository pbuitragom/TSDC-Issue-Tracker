describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/posts`);
  });

  it("allows a user to edit and publish a post", () => {
    cy.get("#ember150 > h3:nth-child(1)").click();
    cy.get("button[data-test-psm-trigger]").click();
    cy.get(
      'button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]'
    ).click();
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
  });
});
