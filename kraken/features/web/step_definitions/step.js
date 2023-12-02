const { Before, Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const HomePage = require('../pageobjects/homePage');
const LoginPage = require('../pageobjects/loginPage');
const PostPage = require('../pageobjects/postPage');
const PagePage = require('../pageobjects/pagePage');
const MemberPage = require('../pageobjects/memberPage');

let loginPage = null;
let homePage = null;
let postPage = null;
let pagePage = null;
let memberPage = null;

When('I enter email {kraken-string}', async function (email) {
    this.loginPage = new LoginPage(this.driver);
    this.homePage = new HomePage(this.driver);
    this.postPage = new PostPage(this.driver);
    this.pagePage = new PagePage(this.driver);
    this.memberPage = new MemberPage(this.driver);
    return await this.loginPage.enterEmail(email);
});

When('I enter password {kraken-string}', async function (password) {
    return await this.loginPage.enterPassword(password);
});

When('I click next {string}', async function(scenario) {
    return await this.loginPage.authenticate();
})

When('I click on feature post {string}', async function(scenario) {
    return await this.homePage.ingresar_a_opcion_posts(scenario);
})

When('I click on new post', async function() {
    return await this.postPage.clickOnNewPost();
})

When('I set the post title {kraken-string} {string}', async function (title, scenario) {
    await this.postPage.setPostTitle(title, scenario);
});

Then('I can NOT save or update posts', async function () {
    await this.postPage.assertPostNotSavedOrUpdated();
});

Then('I can NOT save or update pages', async function () {
    await this.pagePage.assertNoEditorTitleInput();
});

When('I set the post content {kraken-string}', async function (content) {
    await this.postPage.setPostContent(content);
});

When('I click on publish post {string}', async function (scenario) {
    await this.postPage.clickOnPublishPost(scenario);
});

When('I click on publish page {string}', async function (scenario) {
    await this.pagePage.clickOnPublishPage(scenario);
});

When('I click on Continue, final review {string}', async function (scenario) {
    await this.postPage.clickOnContinueFinalReview(scenario);
});

When('I click on Push Now {string}', async function(scenario) {
    await this.postPage.clickOnPushNow(scenario);
});

Then('I should see text {kraken-string} {string}', async function (title, scenario) {
    await this.postPage.seeText(title, scenario);
});

When('I click on recently created post {string}', async function (scenario) {
    await this.postPage.clickOnRecentlyCreatedPost(scenario);
});

When('I click on post settings {string}', async function (filename) {
    await this.postPage.clickOnPostSettings(filename);
});

When('I click on delete {string}', async function (scenario) {
    await this.postPage.clickOnDelete(scenario);
});

When('I confirm delete {string}', async function (scenario){
    await this.postPage.confirmDelete(scenario);
});

When('I click on update {string}', async function (sufixname) {
    await this.postPage.clickOnUpdate(sufixname);
});

When('I click on feature pages {string}', async function(scenario) {
    return await this.homePage.ingresar_a__opcion_pages(scenario);
})

When('I click on new page', async function() {
    return await this.pagePage.clickOnNewPage();
})

When('I set the page title {kraken-string} {string}', async function (title, scenario) {
    await this.pagePage.setPageTitle(title, scenario);
});

When('I set the page content {kraken-string} {string}', async function (content, scenario) {
    await this.pagePage.setPageContent(content, scenario);
});

When('I click on recently created page {string}', async function (scenario) {
    await this.pagePage.clickOnRecentlyCreatedPage(scenario);
});

When('I click on delete page', async function () {
    await this.pagePage.clickOnDeletePage();
});

When('I click on feature members', async function() {
    return await this.homePage.ingresar_a_opcion_members();
})

When('I click on new member', async function() {
    await this.memberPage.clickNewMember();
})

Then('I should see the post section {string}', async function (scenario) {
    await this.postPage.seePostSection(scenario);
});

Then('I should see post updated {string}', async function (scenario) {
    await this.postPage.seePostUpdated(scenario);
});

When('I click on update page {string}', async function (scenario) {
    await this.pagePage.clickOnUpdatePage(scenario);
});

When('I set the member name {kraken-string}', async function (name) {
    await this.memberPage.setMemberName(name);
  });
  
  When('I set the member email {kraken-string}', async function (email) {
    await this.memberPage.setMemberEmail(email);
  });
  
  When('I click on save member', async function () {
    await this.memberPage.clickSaveMember();
  });
  
  When('I click on the member recently created', async function () {
    await this.memberPage.clickRecentlyCreatedMember();
  });
  
  When('I update the member name {kraken-string}', async function (name) {
    await this.memberPage.updateMemberName(name);
  });
  
  When('I click on member settings', async function () {
    await this.memberPage.clickMemberSettings();
  });
  
  When('I click on delete member', async function () {
    await this.memberPage.clickDeleteMember();
  });
  
  Then('System notify member already exists', async function () {
    await this.memberPage.systemNotifyMemberExists();
  });
  