const { faker } = require("@faker-js/faker");

class PostManagementPage {
  visit() {
    cy.visit(`${Cypress.env("login_url")}/#/posts`);
  }

  selectFirstPost() {
    cy.get(
      "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
    ).click();
  }

  editPostTitle() {
    cy.get('textarea[placeholder="Post title"]').clear();
    cy.get('textarea[placeholder="Post title"]').type(faker.lorem.words(5));
  }

  editPostContent() {
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.get('p[data-koenig-dnd-droppable="true"]').type(faker.lorem.words(20));
  }

  startPublishing() {
    cy.get('button[data-test-button="publish-flow"]').click();
  }

  confirmPublishing() {
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );
    cy.get('button[data-test-button="continue"]').click();
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );
    cy.get('button[data-test-button="confirm-publish"]').click();
  }

  verifyPostPublished() {
    cy.get('div[class="gh-post-bookmark"]').should("be.visible");
  }

  openPublishedPost() {
    cy.get('a[class="gh-post-bookmark-wrapper"]')
      .invoke("removeAttr", "target")
      .click();
  }
}

export default PostManagementPage;
