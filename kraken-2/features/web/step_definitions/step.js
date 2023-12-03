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
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_1.png");
    return await element.click();
})

When('I click on feature post {string}', async function(scenario) {
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    let element = await this.driver.$('#ember26');
    return await element.click();
})

When('I click on new post', async function() {
    let element = await this.driver.$("//a[contains(@class, 'ember-view') and contains(@class, 'gh-btn') and contains(@class, 'gh-btn-primary') and @href='#/editor/post/' and ./span[text()='New post']]");
    return await element.click();
})

When('I set the post title {kraken-string} {string}', async function (title, scenario) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    await new Promise(r => setTimeout(r, 2000));
    return await element.setValue(title);
});

When('I set the post content {kraken-string}', async function (content) {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.setValue(content);
});

When('I click on publish post {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    return await element.click();
});

When('I click on publish page {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_4.png");
    return await element.click();
});


When('I click on Continue, final review {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-button');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_4.png");
    return await element.click();
});

When('I click on Continue, final review page {string}', async function (scenario) {
    let element = await this.driver.$('.gh-publishmenu-button');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

When('I click on Post Push Now {string}', async function(scenario) {
    let element = await this.driver.$('//button[contains(@class, "gh-btn") and contains(@class, "gh-btn-black")]/span[text()="Publish"]');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

Then('I should see {string}', async function (scenario) {
    let element = await this.driver.$('.gh-notification-actions');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    expect(element).to.exist;
});

Then('I should see page published {string}', async function (scenario) {
    let element = await this.driver.$('.gh-notification-actions');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    expect(element).to.exist;
});

When('I click on recently created post {string}', async function (scenario) {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
    return await element.click();
});

When('I click on post settings {string}', async function (filename) {
    let element = await this.driver.$('.settings-menu-toggle');
    await this.takeAndSaveScreenshot(this.driver,  filename);
    return await element.click();
});

When('I click on page settings {string}', async function (filename) {
    let element = await this.driver.$('.gh-publishmenu-button');
    await this.takeAndSaveScreenshot(this.driver,  filename);
    return await element.click();
});


When('I click on delete {string}', async function (scenario) {
    let element = await this.driver.$('//button[contains(., "Delete post")]');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    return await element.click();
});

When('I confirm delete {string}', async function (scenario){
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_6.png");
    return await element.click();
});

When('I click on update {string}', async function (sufixname) {
    let element = await this.driver.$( "//div[contains(@class, 'gh-btn') and contains(@class, 'gh-btn-editor') and contains(@class, 'green') and contains(@class, 'gh-publishmenu-trigger')]/span[contains(text(), 'Update')]" );
    await element.click();
    element = await this.driver.$( "//button[contains(@class, 'gh-btn') and contains(@class, 'gh-btn-black') and contains(@class, 'gh-publishmenu-button') and contains(@class, 'gh-btn-icon')]/span[text()='Update']" );
    await new Promise(r => setTimeout(r, 1000));
    await this.takeAndSaveScreenshot(this.driver, sufixname);
    return await element.click();
});

When('I click on update page {string}', async function (scenario) {
    await this.takeAndSaveScreenshot(this.driver, scenario + "_step_5.png");
    let element = await this.driver.$( "//div[contains(@class, 'gh-btn') and contains(@class, 'gh-btn-editor') and contains(@class, 'green') and contains(@class, 'gh-publishmenu-trigger')]/span[contains(text(), 'Update')]" );
    await element.click();
    await new Promise(r => setTimeout(r, 2000));
    element = await this.driver.$( "//button[contains(@class, 'gh-btn') and contains(@class, 'gh-btn-black') and contains(@class, 'gh-publishmenu-button') and contains(@class, 'gh-btn-icon')]/span[text()='Update']" );
    await element.click();
    await new Promise(r => setTimeout(r, 2000));
    return await this.takeAndSaveScreenshot(this.driver, scenario + "_step_6.png");
    
});

When('I click on feature pages {string}', async function(scenario) {
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_2.png");
    let element = await this.driver.$("//a[contains(@class, 'ember-view') and @href='#/pages/' and contains(text(), 'Pages')]");
    return await element.click();
})

When('I click on new page', async function() {
    let element = await this.driver.$("//a[contains(@class, 'ember-view') and contains(@class, 'gh-btn') and contains(@class, 'gh-btn-primary') and @href='#/editor/page/' and ./span[text()='New page']]");
    return await element.click();
})

When('I set the page title {kraken-string} {string}', async function (title, sufix) {
    let element = await this.driver.$('.gh-editor-title');
    await this.takeAndSaveScreenshot(this.driver,  sufix);
    return await element.setValue(title);
});

When('I set the page content {kraken-string} {string}', async function (content, scenario) {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.setValue(content);
});

When('I click on recently created page {string}', async function (scenario) {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_3.png");
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
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_7.png");
    expect(element).to.exist;
});


Then('I should see post updated {string}', async function (scenario) {
    let element = await this.driver.$("//button[contains(@class, 'gh-btn') and contains(@class, 'gh-btn-black') and contains(@class, 'gh-publishmenu-button') and contains(@class, 'gh-btn-icon') and contains(@class, 'gh-btn-green')]/span[contains(text(), 'Updated')]");
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_5.png");
    expect(element).to.exist;
});

