const expect = require('chai').expect;
const BasePage = require('./basePage');

class PostPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

  async clickOnNewPost() {
    const element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
  }

  async setPostTitle(title, scenario) {
    const element = await this.driver.$('[data-test-editor-title-input]');
    //await this.takeAndSaveScreenshot(scenario + '_step_3.png');
    await element.setValue(title);
    return await new Promise(r => setTimeout(r, 2000));
  }

  async setPostContent(content) {
    const element = await this.driver.$('.kg-prose');
    return await element.setValue(content);
  }

  async clickOnPublishPost(scenario) {
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    //await this.takeAndSaveScreenshot(scenario + '_step_4.png');
    return await element.click();
  }

  async clickOnContinueFinalReview(scenario) {
    const element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large[data-test-button="continue"]');
    //await this.takeAndSaveScreenshot(scenario + '_step_5.png');
    return await element.click();
  }

  async clickOnPushNow(scenario) {
    const element = await this.driver.$('button[data-test-button="confirm-publish"]');
    /*if (scenario !== 'escenario4') {
      await this.takeAndSaveScreenshot(scenario + '_step_6.png');
    }*/
    return await element.click();
  }

  async seeText(title, scenario) {
    const element = await this.driver.$('.gh-post-bookmark-content');
    /*const stepName = '_step_6.png';
    if (scenario === 'escenario4') {
      await this.takeAndSaveScreenshot(scenario + stepName);
    }*/
    const text = await element.getText();
    expect(text).contains(title);
  }

  async clickOnRecentlyCreatedPost(scenario) {
    const element = await this.driver.$('.gh-content-entry-title');
    //await this.takeAndSaveScreenshot(scenario + '_step_3.png');
    return await element.click();
  }

  async clickOnPostSettings(filename) {
    const element = await this.driver.$('.settings-menu-toggle');
    //await this.takeAndSaveScreenshot(filename);
    return await element.click();
  }

  async clickOnDelete(scenario) {
    const element = await this.driver.$('//button[contains(., "Delete post")]');
    //await this.takeAndSaveScreenshot(scenario + '_step_5.png');
    return await element.click();
  }

  async confirmDelete(scenario) {
    const element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
    //await this.takeAndSaveScreenshot(scenario + '_step_6.png');
    return await element.click();
  }

  async clickOnUpdate(sufixname) {
    const element = await this.driver.$('//button[@data-test-button="publish-save"]');
    //await this.takeAndSaveScreenshot(sufixname);
    return await element.click();
  }

  async seePostSection(scenario) {
    const element = await this.driver.$('.gh-canvas-title');
    //await this.takeAndSaveScreenshot(scenario + '_step_7.png');
    expect(element).to.exist;
  }

  async seePostUpdated(scenario) {
    const element = await this.driver.$("//button[@data-test-button='publish-save']/span[contains(text(), 'Updated')]");
    //await this.takeAndSaveScreenshot(scenario + '_step_5.png');
    expect(element).to.exist;
  }
}

module.exports = PostPage;
