import PostManagementPage from "../../support/pageObjects/PostManagementPage";
describe("Post Creation and Publishing", () => {
  const postManagementPage = new PostManagementPage();

  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    postManagementPage.visit();
  });

  it("allows a user to edit and publish a post with random data", () => {
    postManagementPage.selectFirstPost();
    postManagementPage.editPostTitle();
    postManagementPage.editPostContent();
    postManagementPage.startPublishing();
    postManagementPage.confirmPublishing();
    postManagementPage.verifyPostPublished();
    postManagementPage.openPublishedPost();
  });
});
