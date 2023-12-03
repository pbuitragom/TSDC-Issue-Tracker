import PageManagementPage from "../../support/pageObjects/PageManagementPage";
describe("Page Edition", () => {
  const pageManagementPage = new PageManagementPage();

  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    pageManagementPage.visit();
  });

  it("allows a user to edit and publish a page with random data", () => {
    pageManagementPage.selectFirstPage();
    pageManagementPage.editPageTitle();
    pageManagementPage.editPageContent();
    pageManagementPage.startPublishing();
    pageManagementPage.confirmPublishing();
    pageManagementPage.verifyPagePublished();
    pageManagementPage.openPublishedPage();
  });
});
