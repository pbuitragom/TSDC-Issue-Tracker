describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/editor`);
  });

  it("allows a user to create a post with a priori data", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('textarea[placeholder="Post title"]').type(data[0].postTitle);
      cy.get('p[data-koenig-dnd-droppable="true"]').type(data[0].postBody);
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
});
