class PostEditorPage {
  visit() {
    cy.visit(`${Cypress.env("login_url")}/#/editor`);
  }

  typePostTitle(title) {
    cy.get('textarea[placeholder="Post title"]').type(title);
  }

  typePostContent(content) {
    cy.get('p[data-koenig-dnd-droppable="true"]').type(content);
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

export default PostEditorPage;
