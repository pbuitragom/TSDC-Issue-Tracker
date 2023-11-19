describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/posts`);
  });

  it("allows a user to edit and publish a post", () => {
    cy.get("li.gh-list-row.gh-posts-list-item").first().click();

    cy.get('textarea[placeholder="Post title"]').clear();
    cy.get('textarea[placeholder="Post title"]').type(
      ' "This is a Edited Title post created using Cypress."'
    );
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.get('p[data-koenig-dnd-droppable="true"]').type(
      "This is a Edited post created using Cypress."
    );
    cy.get('button[data-test-button="publish-save"]').click();
    cy.contains("Updated").should("be.visible");
  });
});
