import { faker } from "@faker-js/faker";

describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/members`);
  });

  it("allows a user to invite a member with random name and email", () => {
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.get('input[id="member-name"]').type(faker.person.fullName());
    cy.get('input[id="member-email"]').type(faker.internet.email());
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("wont allow an user to invite a member with invalid random generated email", () => {
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.get('input[id="member-name"]').type(faker.person.fullName());
    cy.get('input[id="member-email"]').type(faker.string.alphanumeric(10));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Invalid Email.").should("be.visible");
  });

  it("allows a user to invite a member and add notes with at least 500 random characters", () => {
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.get('input[id="member-name"]').type(faker.person.fullName());
    cy.get('input[id="member-email"]').type(faker.internet.email());
    cy.get('textarea[id="member-note"]').type(faker.lorem.words(10));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Saved").should("be.visible");
  });

  it("wont allow am user to invite a member and add notes with more than 500 random characters", () => {
    cy.get('a[data-test-new-member-button="true"]').first().click();
    cy.get('input[id="member-name"]').type(faker.person.fullName());
    cy.get('input[id="member-email"]').type(faker.internet.email());
    cy.get('textarea[id="member-note"]').type(faker.string.alpha(501));
    cy.get('button[data-test-button="save"]').click();
    cy.contains("Note is too long").should("be.visible");
  });
});
