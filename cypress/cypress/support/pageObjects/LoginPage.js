class LoginPage {
  visit() {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  }

  fillEmail(email) {
    cy.get('input[id="identification"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[data-test-button="sign-in"]').click();
  }
}
export default LoginPage;
