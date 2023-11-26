const puppeteer = require('puppeteer');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/DashboardPage');
const { faker } = require('@faker-js/faker'); // Ajustado para usar la nueva versión de faker

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Reemplaza con tus credenciales de Ghost
    const ghostAdminUrl = 'http://localhost:2369/ghost';
    const username = 'pmbtgun@gmail.com';
    const password = 'QAZwsx01@2023';

    // Navegar a la página de inicio de sesión de Ghost
    await page.goto(`${ghostAdminUrl}/#/signin`);
    await page.waitForSelector('input[name="identification"]');
    await page.type('input[name="identification"]', username);
    await page.type('input[name="password"]', password);
    await page.click('button[type="submit"]');
    
    // Esperar a que se cargue el dashboard y navegar a la sección de Tags
    await page.waitForSelector('.gh-nav');
    await page.goto(`${ghostAdminUrl}/#/tags`);
    
    // Crear un tag con un nombre inválido (datos generados por Faker)
    const invalidTagName = faker.lorem.paragraph(); // Genera un párrafo largo, probablemente inválido para un tag
    await page.waitForSelector('.gh-canvas-header a[href="#/tags/new/"]');
    await page.click('.gh-canvas-header a[href="#/tags/new/"]');
    await page.waitForSelector('input[name="name"]');
    await page.type('input[name="name"]', invalidTagName);
    await page.click('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');

    // Intentar guardar el tag con un nombre inválido
    await page.click('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');

    try {
        // Esperar a que aparezca el mensaje de error
        await page.waitForSelector('.gh-alert', { timeout: 5000 });

        // Opcionalmente, podemos capturar y mostrar el mensaje de error
        const errorMessage = await page.$eval('.gh-alert', element => element.textContent);
        console.log('Mensaje de error detectado:', errorMessage);

    } catch (error) {
        // Si no se encuentra el mensaje de error, asumimos que el tag se creó (lo cual no debería suceder)
        console.log('No se detectó un mensaje de error, el tag pudo haberse creado incorrectamente');
    }

    await browser.close();
})();