// Importación de Puppeteer y las clases necesarias para la página de inicio de sesión y el dashboard
const puppeteer = require('puppeteer');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/DashboardPage');

(async () => {
    // Iniciando una nueva instancia del navegador con Puppeteer
    const browser = await puppeteer.launch({ headless: false });
    // Abriendo una nueva página en el navegador
    const page = await browser.newPage();

    // Creando instancias de las clases LoginPage y DashboardPage
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Navegando a la página de inicio de sesión y realizando el inicio de sesión
    await loginPage.navigate();
    await loginPage.login('pmbtgun@gmail.com', 'QAZwsx01@2023');

    try {
        // Obteniendo el mensaje de bienvenida del dashboard
        const welcomeText = await dashboardPage.getWelcomeMessage();

        // Verificando si el mensaje de bienvenida indica un inicio de sesión exitoso
        if (welcomeText.includes('Welcome to your Dashboard')) {
            console.log('Inicio de sesión exitoso');
        } else {
            console.log('Inicio de sesión fallido');
        }
    } catch (error) {
        // Manejando cualquier error durante la espera del mensaje de bienvenida y tomando una captura de pantalla en caso de fallo
        console.log('Error esperando el mensaje de bienvenida del dashboard: ', error.message);
        await page.screenshot({ path: 'login-failure.png', fullPage: true });
        console.log('Se ha tomado una captura de pantalla del fallo.');
    }

    // Cerrando el navegador
    await browser.close();
})();