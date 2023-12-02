const { writeFileSync } = require('fs');

class BasePage {
 
  constructor(driver) {
    this.driver = driver;
  }

  async takeAndSaveScreenshot(driver, name) {
    const screenshot = await this.driver.takeScreenshot();
    writeFileSync('screen_gv5_' + name, screenshot, 'base64');
  }

}  

module.exports = BasePage;