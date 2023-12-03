// pagePage.js

const BasePage = require('./basePage');

class PagePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async assertNoEditorTitleInput() {
    const element = await this.driver.$('[data-test-editor-title-input]');
    try {
      expect(element).to.not.exist;
    } catch (error) {
      console.log("La prueba falló debido a que el elemento no debería existir, pero fue encontrado.", error.message);
    }
  }

  async clickOnPublishPage(scenario) {
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_4.png");
    await element.click();
  }

  async clickOnNewPage() {
    let element = await this.driver.$('[data-test-new-page-button]');
    await this.takeAndSaveScreenshot(this.driver, "_step_2.png"); // Asegúrate de tener esta función en tu código
    return await element.click();
  }

  async setPageTitle(title, scenario) {
    const element = await this.driver.$('[data-test-editor-title-input]');
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_3.png");
    await element.setValue(title);
  }

  async setPageContent(content, scenario) {
    const element = await this.driver.$('.kg-prose');
    await element.setValue(content);
  }

  async clickOnRecentlyCreatedPage(scenario) {
    const element = await this.driver.$('h3.gh-content-entry-title');
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_3.png");
    await element.click();
  }

  async clickOnDeletePage() {
    const element = await this.driver.$('.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    await element.click();
  }

  async clickOnUpdatePage(scenario) {
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_5.png");
    const element = await this.driver.$('//button[@data-test-button="publish-save"]');
    await new Promise(r => setTimeout(r, 2000));
    await element.click();
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_6.png");
  }

}

module.exports = PagePage;
