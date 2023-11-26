// pages/dashboardPage.js

class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async getWelcomeMessage() {
        await this.page.waitForSelector('.gh-dashboard-zero-message h4', { timeout: 10000 });
        return this.page.$eval('.gh-dashboard-zero-message h4', e => e.textContent);
    }
}

module.exports = DashboardPage;