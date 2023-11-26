const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Configura la URL de la instancia de Ghost y las credenciales de administrador
    const ghostAdminUrl = 'http://localhost:2369/ghost';
    const adminUsername = 'pmbtgun@gmail.com';
    const adminPassword = 'QAZwsx01@2023';

    // Iniciar sesión en Ghost
    await page.goto(`${ghostAdminUrl}/#/signin`);
    await page.waitForSelector('input[name="identification"]');
    await page.type('input[name="identification"]', adminUsername);
    await page.type('input[name="password"]', adminPassword);
    await page.click('button.login');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Navegar a la sección de creación de nuevos posts
    await page.goto(`${ghostAdminUrl}/#/editor/post`);
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');

    // Simular la pulsación de 'Enter' o hacer clic en el cuerpo del editor para activar el botón de publicación
    await page.keyboard.press('Enter');

    // Simular la pulsación de 'Enter' o hacer clic en el cuerpo del editor para activar el botón de publicación
    await page.keyboard.press('Enter');

    // Generar un título extremadamente largo para el post
    const invalidTitle = faker.lorem.words(200); // Un título muy largo para probar la validación

    // Intentar crear un post con el título inválido
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', invalidTitle);
        // Intentar publicar la página

    // Hacer clic en el botón "Publish" que aparece en la interfaz de usuario
    await page.waitForSelector('button.gh-btn-editor.darkgrey.gh-publish-trigger', { visible: true });
    await page.click('button.gh-btn-editor.darkgrey.gh-publish-trigger');

    // Esperar a que aparezca el botón "Continue, final review" y hacer clic
    await page.waitForSelector('.gh-publish-cta button[data-test-button="continue"]', { visible: true });
    await page.click('.gh-publish-cta button[data-test-button="continue"]');

    // Esperar a que el botón "Publish post, right now" sea visible y hacer clic
    await page.waitForSelector('button[data-test-button="confirm-publish"]', { visible: true });
    await page.click('button[data-test-button="confirm-publish"]');

    // Esperar a que aparezca el mensaje de error específico sobre la longitud del título
    await page.waitForSelector('p.error.gh-box.gh-box-error', { visible: true });
    const errorMessage = await page.$eval('p.error.gh-box.gh-box-error', e => e.textContent.trim());

    // Verificar si el mensaje de error es el esperado
    const expectedError = 'Validation failed: Title cannot be longer than 255 characters.';
    if (errorMessage === expectedError) {
        console.log('Prueba exitosa: se detectó el mensaje de error esperado.');
    } else {
        console.log('Prueba fallida: el mensaje de error no es el esperado.');
        console.log('Mensaje de error recibido:', errorMessage);
    }

    // Cerrar el navegador
    await browser.close();
})();