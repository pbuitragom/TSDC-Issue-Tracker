// Importación de las dependencias necesarias
const puppeteer = require('puppeteer');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/DashboardPage');
const { faker } = require('@faker-js/faker'); // Importa Faker para generar datos aleatorios

(async () => {
    // Inicia una nueva instancia de Puppeteer en modo no headless (visible)
    const browser = await puppeteer.launch({ headless: false });
    // Abre una nueva página en el navegador
    const page = await browser.newPage();

    // Instancia las clases para las páginas de inicio de sesión y dashboard
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Genera un email y una contraseña aleatorios utilizando Faker
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    // Navega a la página de inicio de sesión y realiza un intento de inicio de sesión con los datos aleatorios
    await loginPage.navigate();
    await loginPage.login(randomEmail, randomPassword);

    try {
        // Intenta obtener el mensaje de bienvenida del dashboard para verificar el inicio de sesión
        const welcomeText = await dashboardPage.getWelcomeMessage();

        // Evalúa si el mensaje de bienvenida indica un inicio de sesión exitoso y registra el resultado
        if (welcomeText.includes('Welcome to your Dashboard')) {
            console.log('Inicio de sesión exitoso con datos aleatorios.');
        } else {
            console.log('Inicio de sesión fallido con datos aleatorios.');
        }
    } catch (error) {
        // Captura cualquier error durante el proceso y toma una captura de pantalla del estado actual del navegador
        console.log('Error esperando el mensaje de bienvenida del dashboard: ', error.message);
        await page.screenshot({ path: 'login-failure.png', fullPage: true });
        console.log('Se ha tomado una captura de pantalla del fallo con datos aleatorios.');
    }

    // Cierra el navegador
    await browser.close();
})();