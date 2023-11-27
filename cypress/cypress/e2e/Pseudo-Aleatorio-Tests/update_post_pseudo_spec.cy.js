describe("Post Update and Publishing", () => {
  beforeEach(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.visit(`${Cypress.env("login_url")}/#/posts`);
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

  it("allows a user to edit and publish a post with a pseudo random data", async () => {
    const data = await getMockarooData();
    cy.get(
      "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
    ).click();

    cy.get('textarea[placeholder="Post title"]').clear();
    cy.get('textarea[placeholder="Post title"]').type(
      data[0].postTitle + " Edited"
    );
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.get('p[data-koenig-dnd-droppable="true"]').type(
      data[0].postBody + " Edited"
    );
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
