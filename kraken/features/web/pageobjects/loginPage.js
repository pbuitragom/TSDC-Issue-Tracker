const { writeFileSync } = require('fs');
const BasePage = require('./basePage');

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async enterEmail(email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
  }

  async enterPassword(password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
  }

  async authenticate(scenario) {
    await this.takeAndSaveScreenshot(this.driver,  scenario + "_step_1.png");
    let element = await this.driver.$('#ember5');
    return await element.click();
  }
}

module.exports = LoginPage;
