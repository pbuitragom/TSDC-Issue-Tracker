describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/pages?type=published`);
  });

  it("allows a user to edit and publish a post", () => {
    cy.get("a.gh-list-data.gh-post-list-title").first().click();
    cy.contains("button", "Unpublish").click(1);
    cy.contains("git aThis page has been").should("be.visible");
  });
});
