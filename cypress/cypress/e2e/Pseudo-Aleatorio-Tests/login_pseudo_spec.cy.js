describe("Login Tests with data pseudo random", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("login_url")}/#/signin`);
  });

  async function getMockarooData() {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      return (data = await response.json());
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  }

  it("fails to log in with wrong password (pseaudo random)", async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      const data = await response.json();
      cy.get('input[id="identification"]').type(Cypress.env("email"));
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("Your password is incorrect.");
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  });

  it("fails to log in with wrong email and password generated pseudo random", async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      const data = await response.json();
      cy.get('input[id="identification"]').type(data[0].invalidEmail);
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("There is no user with that email address.");
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  });

  it("fails to log in with pseudo random generated password and no email input", async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      const data = await response.json();
      cy.get('input[id="password"]').type(data[0].invalidPassword);
      cy.get('button[data-test-button="sign-in"]').click();
      cy.contains("Please fill out the form to sign in.");
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  });
});
