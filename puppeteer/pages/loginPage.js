class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('http://localhost:2369/ghost/', { waitUntil: 'networkidle0' });
    }

    async login(email, password) {
        await this.page.waitForSelector('input[name="identification"]');
        await this.page.type('input[name="identification"]', email);
        await this.page.waitForSelector('input[name="password"]');
        await this.page.type('input[name="password"]', password);
        await this.page.waitForSelector('button.login');
        await this.page.click('button.login');
    }
}

module.exports = LoginPage;