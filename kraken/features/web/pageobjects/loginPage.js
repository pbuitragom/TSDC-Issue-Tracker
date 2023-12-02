const { writeFileSync } = require('fs');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
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
    let element = await this.driver.$('#ember5');
    return await element.click();
  }
}

module.exports = LoginPage;
