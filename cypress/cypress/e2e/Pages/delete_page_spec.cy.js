describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/pages`);
  });

  it("allows a user to delete a page", () => {
    cy.get(
      "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) > li"
    ).click();
    cy.get("button[data-test-psm-trigger]").click();
    cy.get(
      'button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]'
    ).click();
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
  });
});
