const { Given, When, Then } = require('@cucumber/cucumber');

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
    let element = await this.driver.$('//label[text()="Set it live now"]');
    return await element.click();
});









Then('I click on the first conversation', async function () {
    //let element = await this.driver.$('x1av1boa > div:nth-child(1) > div:nth-child(1)');
    let element = await this.driver.$('#\:r2s\: > div > div > div > div > div:nth-child(2) > div > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd > div > div > a > div > div > div > div:nth-child(1) > div > div > div.x9f619.x1n2onr6.x1ja2u2z.xsdox4t.x1useyqa > div > div > div > div > div > div');
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    //let element = await this.driver.$('p.xat24cr');
    let element = await this.driver.$('#mount_0_0_6K > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div:nth-child(2) > div > div > div.x78zum5.x1iyjqo2.x6q2ic0 > div.xmjcpbm.x107yiy2.xv8uw2v.x1tfwpuw.x2g32xy.x9f619.x1iyjqo2.xeuugli > div > div > div > p');
    return await element.click();
  });

Then('I send the message', async function () {
    let element = await this.driver.$('.x4k7w5x x1h91t0o x1h9r5lt xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j x3nfvp2');
    return await element.click();
});
