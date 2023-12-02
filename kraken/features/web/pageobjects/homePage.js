class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async ingresar_a_opcion_posts() {
    const element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
  }

  async ingresar_a__opcion_pages() {
    const element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
  }

  async ingresar_a_opcion_members() {
    const element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
  }
}

module.exports = HomePage;
