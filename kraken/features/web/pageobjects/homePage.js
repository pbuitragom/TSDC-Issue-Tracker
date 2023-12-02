const BasePage = require("./basePage");

class HomePage extends BasePage {
  
  constructor(driver) {
    super(driver);
  }

  async ingresar_a_opcion_posts(scenario) {
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    const element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
  }

  async ingresar_a__opcion_pages(scenario) {
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    const element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
  }

  async ingresar_a_opcion_members() {
    const element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
  }
}

module.exports = HomePage;
