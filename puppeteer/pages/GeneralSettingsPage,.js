class GeneralSettingsPage {
    constructor(page) {
        this.page = page;
    }

    async visit() {
        await this.page.goto(`${ghostAdminUrl}/#/settings/general`);
    }

    async editTitleAndDescription() {
        await this.page.waitForSelector('button:contains("Edit")');
        await this.page.click('button:contains("Edit")');

        await this.page.waitForSelector('input[placeholder="Site title"]');
        const maxLength = 150;
        const boundaryTitle = faker.lorem.words(10); // Usando Faker para generar un título

        const titleInputSelector = 'input[placeholder="Site title"]';
        await this.page.click(titleInputSelector, { clickCount: 3 });
        await this.page.type(titleInputSelector, boundaryTitle);

        await this.page.waitForSelector('span:contains("Save")');
        await this.page.click('span:contains("Save")');
    }
}