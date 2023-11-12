describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/posts?type=scheduled`);
  });

  it("allows a user to schedule a post", () => {
    cy.get("a[href*='#/editor/post/']").first().click();
    cy.get('textarea[placeholder="Post title"]').type(
      `New Cypress Post ${Date.now().toString()}`
    );
    cy.get('p[data-koenig-dnd-droppable="true"]').type(
      "This is a test post created using Cypress."
    );
    cy.get('button[data-test-button="publish-flow"]').click();
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );
    cy.get('button[data-test-button="continue"]').click();
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );

    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.get('div[class="gh-post-bookmark"]').should("be.visible");
    cy.get('a[class="gh-post-bookmark-wrapper"]')
      .invoke("removeAttr", "target")
      .click();
  });
});
