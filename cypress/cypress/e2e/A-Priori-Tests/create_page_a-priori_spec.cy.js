const { faker, da } = require("@faker-js/faker");

describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/pages`);
  });

  it("allows a user to create and publish a page with a priori data", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get(
        "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
      ).click();

      cy.get('textarea[placeholder="Page title"]').clear();
      cy.get('textarea[placeholder="Page title"]').type(data[0].pageTitle);
      cy.get('p[data-koenig-dnd-droppable="true"]').clear();
      cy.get('p[data-koenig-dnd-droppable="true"]').type(data[0].pageBody);
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
