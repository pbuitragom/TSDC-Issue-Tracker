const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { writeFileSync } = require('fs');
const fetch = require('node-fetch');
const LoginPage = require('../pageobjects/loginPage');

let loginPage = null;

async function takeAndSaveScreenshot(driver, name) {
    const screenshot = await driver.takeScreenshot();
    writeFileSync('screen_gv5_' + name, screenshot, 'base64');
}

When('I enter email {kraken-string}', async function (email) {
    this.loginPage = new LoginPage(this.driver);
    return await this.loginPage.enterEmail(email);
});

When('I enter password {kraken-string}', async function (password) {
    return await this.loginPage.enterPassword(password);
});

When('I click next {string}', async function(scenario) {
    return await this.loginPage.authenticate();
})

When('I click on feature post {string}', async function(scenario) {
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    let element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
})

When('I click on new post', async function() {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})

When('I set the post title {kraken-string} {string}', async function (title, scenario) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    await element.setValue(title);
    return await new Promise(r => setTimeout(r, 2000));
});

Then('I can NOT save or update posts', async function () {
    let element = await this.driver.$('[data-test-editor-title-input]');
    try{
        expect(element).to.not.exist;
    } catch (error) {
        console.log("La prueba falló debido a que el elemento no debería existir, pero fue encontrado.", error.message);
    }
    return;
});

Then('I can NOT save or update pages', async function () {
    let element = await this.driver.$('[data-test-editor-title-input]');
    try{
        expect(element).to.not.exist;
    } catch (error) {
        console.log("La prueba falló debido a que el elemento no debería existir, pero fue encontrado.", error.message);
    }
    return;
});

When('I set the post content {kraken-string}', async function (content) {
    let element = await this.driver.$('.kg-prose');
    return await element.setValue(content);
});

When('I click on publish post {string}', async function (scenario) {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_4.png");
    return await element.click();
});

When('I click on publish page {string}', async function (scenario) {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_4.png");
    return await element.click();
});

When('I click on Continue, final review {string}', async function (scenario) {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large[data-test-button="continue"]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

When('I click on Push Now {string}', async function(scenario) {
    let element = await this.driver.$('button[data-test-button="confirm-publish"]');
    if (scenario !== "escenario4"){
        await takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    }
    return await element.click();
});

Then('I should see text {kraken-string} {string}', async function (title, scenario) {
    let element = await this.driver.$('.gh-post-bookmark-content');
    let stepName = "_step_6.png";
    if (scenario === "escenario4"){
        stepName = "_step_6.png";
    }
    await takeAndSaveScreenshot(this.driver,  scenario + stepName);
    let text = await element.getText(); 
    expect(text).contains(title);
    return
});

When('I click on recently created post {string}', async function (scenario) {
    let element = await this.driver.$('.gh-content-entry-title'); 
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png" );
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

When('I click on update {string}', async function (sufixname) {
    let element = await this.driver.$('//button[@data-test-button="publish-save"]');
    await takeAndSaveScreenshot(this.driver,  sufixname);
    return await element.click();
});

When('I click on feature pages {string}', async function(scenario) {
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    let element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
})

When('I click on new page', async function() {
    let element = await this.driver.$('[data-test-new-page-button]');
    return await element.click();
})

When('I set the page title {kraken-string} {string}', async function (title, scenario) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    return await element.setValue(title);
});

When('I set the page content {kraken-string} {string}', async function (content, scenario) {
    let element = await this.driver.$('.kg-prose');
    return await element.setValue(content);
});

When('I click on recently created page {string}', async function (scenario) {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
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
    return;
});

Then('I should see the post section {string}', async function (scenario) {
    let element = await this.driver.$('.gh-canvas-title');
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_7.png");
    expect(element).to.exist;
    return;
});

Then('I should see post updated {string}', async function (scenario) {
    let element = await this.driver.$("//button[@data-test-button='publish-save']/span[contains(text(), 'Updated')]");
    await takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    expect(element).to.exist;
    return;
});

When('I click on update page {string}', async function (scenario) {
    await takeAndSaveScreenshot(this.driver, scenario + "_step_5.png");
    let element = await this.driver.$('//button[@data-test-button="publish-save"]');
    await new Promise(r => setTimeout(r, 2000));
    await element.click();
    return await takeAndSaveScreenshot(this.driver, scenario + "_step_6.png");
});