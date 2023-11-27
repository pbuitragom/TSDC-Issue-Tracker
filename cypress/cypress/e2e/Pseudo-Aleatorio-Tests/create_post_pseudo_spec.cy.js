describe("Post Creation and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/editor`);
  });

  async function getMockarooData() {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/mock_data_uniandes.json",
        { headers: { "X-API-Key": "5c0dd160" } }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from Mockaroo");
    }
  }

  it("allows a user to create a post with a pseudo random data", async () => {
    const data = await getMockarooData();
    cy.get('textarea[placeholder="Post title"]').type(data[0].postTitle);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(data[0].postBody);
    cy.get('button[data-test-button="publish-flow"]').click();
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );
    cy.get('button[data-test-button="continue"]').click();
    cy.contains("Ready, set, publish. Share it with the world.").should(
      "be.visible"
    );
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.get('div[class="gh-post-bookmark"]').should("be.visible");
    cy.get('a[class="gh-post-bookmark-wrapper"]')
      .invoke("removeAttr", "target")
      .click();
  });
});
