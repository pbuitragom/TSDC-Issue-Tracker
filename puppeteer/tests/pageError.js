// Importar las dependencias necesarias
const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

(async () => {
    // Lanzar Puppeteer en modo no headless para ver la navegación
    const browser = await puppeteer.launch({ headless: false });
    // Abrir una nueva página en el navegador controlado por Puppeteer
    const page = await browser.newPage();

    // Configurar la URL y las credenciales de acceso a Ghost
    const ghostAdminUrl = 'http://localhost:2369/ghost';
    const adminUsername = 'pmbtgun@gmail.com';
    const adminPassword = 'QAZwsx01@2023';

    try {
        // Navegar a la página de inicio de sesión de Ghost y realizar el acceso
        await page.goto(`${ghostAdminUrl}/#/signin`);
        await page.waitForSelector('input[name="identification"]');
        await page.type('input[name="identification"]', adminUsername);
        await page.type('input[name="password"]', adminPassword);
        await page.click('button.login');

        // Esperar a que se cargue el Dashboard de Ghost
        await page.waitForNavigation({ waitUntil: 'networkidle0' });

        // Navegar a la sección de creación de páginas
        await page.goto(`${ghostAdminUrl}/#/pages`);
        await page.waitForSelector('a[href="#/editor/page/"]');
        await page.click('a[href="#/editor/page/"]');

        // Esperar a que se cargue el editor de la nueva página
        await page.waitForSelector('textarea.gh-editor-title');

        // Preparar el editor para la escritura y generar un título inválido
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        const invalidTitle = faker.lorem.words(100); // Generar un título muy largo
        await page.type('textarea.gh-editor-title', invalidTitle);

        // Proceso para publicar la página
        await page.waitForSelector('button.gh-btn-editor.darkgrey.gh-publish-trigger');
        await page.click('button.gh-btn-editor.darkgrey.gh-publish-trigger');
        await page.waitForSelector('.gh-publish-cta button[data-test-button="continue"]');
        await page.click('.gh-publish-cta button[data-test-button="continue"]');
        await page.waitForSelector('button[data-test-button="confirm-publish"]');
        await page.click('button[data-test-button="confirm-publish"]');

        // Esperar y capturar el mensaje de error
        const errorSelector = 'p.error.gh-box.gh-box-error';
        await page.waitForSelector(errorSelector, { visible: true, timeout: 5000 });
        const errorMessage = await page.$eval(errorSelector, el => el.textContent.trim());
        console.error('Error publishing the page:', errorMessage);

    } catch (error) {
        // Manejar cualquier error que ocurra durante la automatización
        console.error('Error during the automation:', error);
    } finally {
        // Cerrar el navegador una vez completada la prueba
        await browser.close();
    }
})();