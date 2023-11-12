describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/posts`);
  });

  it("allows a user to edit and publish a post", () => {
    cy.get(".posts-list .gh-list-row:first").within(() => {
      cy.get(".gh-post-list-button").click();
    });
    cy.get('textarea[placeholder="Post title"]').clear();
    cy.get('textarea[placeholder="Post title"]').type(
      ' "This is a Edited Title post created using Cypress."'
    );
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.get('p[data-koenig-dnd-droppable="true"]').type(
      "This is a Edited post created using Cypress."
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
  });
});
