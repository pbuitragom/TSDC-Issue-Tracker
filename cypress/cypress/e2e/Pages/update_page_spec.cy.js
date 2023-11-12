describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/pages`);
  });

  it("allows a user to edit and publish a post", () => {
    cy.get(
      "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
    ).click();

    cy.get('textarea[placeholder="Page title"]').clear();
    cy.get('textarea[placeholder="Page title"]').type(
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
