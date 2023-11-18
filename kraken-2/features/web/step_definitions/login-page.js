class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Elementos
    get emailInput() {
        return this.driver.$('#ember7');
    }

    get passwordInput() {
        return this.driver.$('#password');
    }

    get signInButton() {
        return this.driver.$('#ember5');
    }

    // Métodos
    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }
} 
module.exports = LoginPage;
