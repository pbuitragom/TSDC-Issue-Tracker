const { faker } = require("@faker-js/faker");

class PageEditorPage {
  visit() {
    cy.visit(`${Cypress.env("login_url")}/#/editor/page`);
  }

  typePageTitle() {
    cy.get('textarea[placeholder="Page title"]').type(faker.lorem.words(5));
  }

  typePageContent() {
    cy.get('p[data-koenig-dnd-droppable="true"]').type(faker.lorem.words(50));
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

  verifyPagePublished() {
    cy.get('div[class="gh-post-bookmark"]').should("be.visible");
  }

  openPublishedPage() {
    cy.get('a[class="gh-post-bookmark-wrapper"]')
      .invoke("removeAttr", "target")
      .click();
  }
}

export default PageEditorPage;
