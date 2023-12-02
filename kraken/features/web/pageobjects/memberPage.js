const BasePage = require('./basePage');

class MemberPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

  async setMemberName(name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
  }

  async setMemberEmail(email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
  }

  async clickSaveMember() {
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
  }

  async clickRecentlyCreatedMember() {
    let element = await this.driver.$('a[data-test-table-data="details"]');
    return await element.click();
  }

  async updateMemberName(name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
  }

  async clickMemberSettings() {
    let element = await this.driver.$('.gh-btn.gh-btn-icon');
    return await element.click();
  }

  async clickDeleteMember() {
    let element = await this.driver.$('button[data-test-button="delete-member"]');
    return await element.click();
  }

  async systemNotifyMemberExists() {
    let element = await this.driver.$('.response');
    expect(element).to.exist;
  }
}

module.exports = MemberPage;
