import PostEditorPage from "../../support/pageObjects/PostEditorPage";
import { faker } from "@faker-js/faker";

describe("Post Creation and Publishing", () => {
  const postEditorPage = new PostEditorPage();

  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    postEditorPage.visit();
  });

  it("allows a user to create a post", () => {
    const title = faker.lorem.words(5);
    const content = faker.lorem.words(20);

    postEditorPage.typePostTitle(title);
    postEditorPage.typePostContent(content);
    postEditorPage.startPublishing();
    postEditorPage.confirmPublishing();
    postEditorPage.verifyPostPublished();
    postEditorPage.openPublishedPost();
  });
});
