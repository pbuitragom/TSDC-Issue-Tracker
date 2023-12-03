const { faker } = require("@faker-js/faker");

class PageManagementPage {
  visit() {
    cy.visit(`${Cypress.env("login_url")}/#/pages`);
  }

  selectFirstPage() {
    cy.get(
      "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
    ).click();
  }

  editPageTitle() {
    cy.get('textarea[placeholder="Page title"]').clear();
    cy.get('textarea[placeholder="Page title"]').type(
      faker.lorem.words(5) + " Edited"
    );
  }

  editPageContent() {
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.get('p[data-koenig-dnd-droppable="true"]').type(
      faker.lorem.words(20) + " Edited"
    );
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

export default PageManagementPage;
