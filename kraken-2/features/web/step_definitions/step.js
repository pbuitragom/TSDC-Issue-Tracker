const { Given, When, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');

const expect = require('chai').expect;
const { writeFileSync } = require('fs');

async function takeAndSaveScreenshot(driver, name) {
    const screenshot = await driver.takeScreenshot();
    writeFileSync('screen_gv4_' + name, screenshot, 'base64');
}

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$("input[name='identification']");
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$("input[name='password']");
    return await element.setValue(password);
});

When('I click next {string}', async function(scenario) {
    let element = await this.driver.$(".js-login-button");
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_1.png");
    return await element.click();
})

When('I click on feature post {string}', async function(scenario) {
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    let element = await this.driver.$('#ember26');
    return await element.click();
})

When('I click on new post', async function() {
    let element = await this.driver.$('#ember112');
    return await element.click();
})

When('I set the post title {kraken-string} {string}', async function (title, scenario) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    return await element.setValue(title);
});

When('I set the post content {kraken-string}', async function (content) {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.setValue(content);
});

When('I click on publish {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_4.png");
    return await element.click();
});

When('I click on Continue, final review {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-button');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

When('I click on Push Now {string}', async function(scenario) {
    let element = await this.driver.$('//button[contains(@class, "gh-btn") and contains(@class, "gh-btn-black")]/span[text()="Publish"]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    return await element.click();
});

Then('I should see {string}', async function (scenario) {
    let element = await this.driver.$('.gh-notification-actions');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_7.png");
    expect(element).to.exist;
});

When('I click on recently created post {string}', async function (scenario) {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    return await element.click();
});

When('I click on post settings {string}', async function (filename) {
    let element = await this.driver.$('.settings-menu-toggle');
    await takeAndSaveScreenshot(this.driver,  filename);
    return await element.click();
});

When('I click on delete {string}', async function (scenario) {
    let element = await this.driver.$('//button[contains(., "Delete post")]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

When('I confirm delete {string}', async function (scenario){
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    return await element.click();
});

When('I click on update', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-editor.gh-editor-save-trigger.green');
    return await element.click();
});

When('I click on feature pages', async function() {
    let element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
})

When('I click on new page', async function() {
    let element = await this.driver.$('[data-test-new-page-button]');
    return await element.click();
})

When('I set the page title {kraken-string}', async function (title) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(title);
});

When('I set the page content {kraken-string}', async function (content) {
    let element = await this.driver.$('.kg-prose');
    return await element.setValue(content);
});

When('I click on recently created page', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    return await element.click();
});

When('I click on delete page', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    return await element.click();
});

When('I click on feature members', async function() {
    let element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
})

When('I click on new member', async function() {
    let element = await this.driver.$('[data-test-new-member-button]');
    return await element.click();
})

When('I set the member name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I set the member email {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I click on save member', async function () {
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
});

When('I click on the member recently created', async function () {
    let element = await this.driver.$('a[data-test-table-data="details"]');
    return await element.click();
});

When('I update the member name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});


When('I click on member settings', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-icon');
    return await element.click();
});

When('I click on delete member', async function () {
    let element = await this.driver.$('button[data-test-button="delete-member"]');
    return await element.click();
});

Then('System notify member already exists', async function () {
    let element = await this.driver.$('.response');
    expect(element).to.exist;
});


Then('I should see the post section {string}', async function (scenario) {
    let element = await this.driver.$('.gh-canvas-title');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_7.png");
    expect(element).to.exist;
});
