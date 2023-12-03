describe("Test seamana 8", () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env("login_url")}/#/signin`);
      cy.get('input[id="identification"]').type(Cypress.env("email"));
      cy.get('input[name="password"]').type(Cypress.env("password"));
      cy.get('button[data-test-button="sign-in"]').click();
      cy.url().should("include", "/#/dashboard");
    });
  
    it("cambiar tema dark mode de manera correcta", () => {
      cy.get("#ember31 > div > div > div.flex.items-center.pe-all > div > div").click()
      cy.get("#ember31 > div > div > div.flex.items-center.pe-all > div > div > div.moon > svg > path").should("be.visible")
    });

    it("cambiar tema light mode de manera correcta", () => {
      cy.get("#ember31 > div > div > div.flex.items-center.pe-all > div > div").click()
      cy.get("#ember31 > div > div > div.flex.items-center.pe-all > div > div > div.moon > svg > path").should("not.be.visible")
      
    });

    it("General settings, funcionalidad botón", () => {
      cy.get("#ember34 > svg").click()
      cy.url().should("include", "/#/settings");
    
      
    });
    it("General settings , botón Title & description", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#general").click() 
      cy.url().should("include", "/#/settings/general");

    });
    it("General settings , timezone", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#timezone").click() 
      cy.url().should("include", "/#/settings/timezone");
    });
    it("General settings , publication-language", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#publication-language").click() 
      cy.url().should("include", "/#/settings/publication-language");
    });
    it("General settings , metadata", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#metadata").click() 
      cy.url().should("include", "/#/settings/metadata");
    });
    it("General settings , twitter", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#twitter").click() 
      cy.url().should("include", "/#/settings/twitter");
    });
    it("General settings , facebook", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#facebook").click() 
      cy.url().should("include", "/#/settings/facebook");
    });
    it("General settings , social-accounts", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#social-accounts").click() 
      cy.url().should("include", "/#/settings/social-accounts");
    });
    it("General settings , locksite", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#locksite").click() 
      cy.url().should("include", "/#/settings/locksite");
    });
    it("General settings , staff", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#staff").click() 
      cy.url().should("include", "/#/settings/staff");

    });
    it("General settings , design", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#design").click() 
      cy.url().should("include", "/#/settings/design");

    });
    it("General settings , navigation", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#navigation").click() 
      cy.url().should("include", "/#/settings/navigation");

    });
    it("General settings , announcement-bar", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#announcement-bar").click() 
      cy.url().should("include", "/#/settings/announcement-bar");
    
        });
    it("General settings , portal", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#portal").click() 
      cy.url().should("include", "/#/settings/portal");
    });
    it.only("General settings , members", () => {
      cy.visit(`${Cypress.env("url_settings")}`);
      cy.get("#members").click() 
      cy.url().should("include", "/#/settings/members");
    });
      
  });
  