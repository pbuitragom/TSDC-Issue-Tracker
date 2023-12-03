import PageEditorPage from "../../support/pageObjects/PageEditorPage";
describe("Page Creation and Publishing", () => {
  const pageEditorPage = new PageEditorPage();

  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    pageEditorPage.visit();
  });

  it("allows a user to create a page with random generate title and content", () => {
    pageEditorPage.typePageTitle();
    pageEditorPage.typePageContent();
    pageEditorPage.startPublishing();
    pageEditorPage.confirmPublishing();
    pageEditorPage.verifyPagePublished();
    pageEditorPage.openPublishedPage();
  });
});
