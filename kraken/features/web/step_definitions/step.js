const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click on feature post', async function() {
    let element = await this.driver.$('#ember19');
    return await element.click();
})

When('I click on new post', async function() {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})

When('I set the post title {kraken-string}', async function (title) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(title);
});

When('I set the post content {kraken-string}', async function (content) {
    let element = await this.driver.$('.kg-prose');
    return await element.setValue(content);
});

When('I click on publish', async function () {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
});

When('I click on Continue, final review', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large[data-test-button="continue"]');
    return await element.click();
});

When('I click on Push Now', async function () {
    let element = await this.driver.$('button[data-test-button="confirm-publish"]');
    return await element.click();
});

Then('I should see text {kraken-string}', async function (title) {
    let element = await this.driver.$('.gh-post-bookmark-content');
    let text = await element.getText(); 
    expect(text).contains(title)
});

When('I click on recently created post', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    return await element.click();
});

When('I click on post settings', async function () {
    let element = await this.driver.$('.settings-menu-toggle');
    //let element = await this.driver.$('button[title='Settings']');
    return await element.click();
});

When('I click on delete', async function () {
    let element = await this.driver.$('//button[contains(., "Delete post")]');
    //let element = await this.driver.$('button[title='Settings']');
    return await element.click();
});

When('I confirm delete', async function () {
    let element = await this.driver.$('span[data-test-task-button-state="idle"]');
    return await element.click();
});
