describe("Login Tests with data a priori", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  });

  it("fails to log in with wrong password (Generated a priori)", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('input[id="identification"]').type(Cypress.env("email"));
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("Your password is incorrect.");
    });
  });

  it("fails to log in with wrong email and password generated a priori", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('input[id="identification"]').type(data[0].invalidEmail);
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("There is no user with that email address.");
    });
  });

  it("fails to log in with a priori generated password and no email input", () => {
    cy.fixture("a-priori-data-mockaroo").then((data) => {
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("Please fill out the form to sign in.");
    });
  });
});
