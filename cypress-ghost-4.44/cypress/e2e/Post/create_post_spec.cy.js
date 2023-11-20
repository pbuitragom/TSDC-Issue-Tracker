import "../../support/e2e";
describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/editor`);
  });

  it("allows a user to create a post", () => {
    cy.get('textarea[placeholder="Post title"]').type(
      `New Cypress Post ${Date.now().toString()}`
    );
    cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(
      "This is a test post created using Cypress."
    );
    cy.get(
      ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger"
    ).click();
    cy.get(
      ".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
    ).click();
    cy.contains("Ready to go? Here’s what happens next").should("be.visible");

    cy.get(".gh-btn.gh-btn-black.gh-btn-icon.ember-view").click();
    cy.contains("Published").should("be.visible");
  });
});
