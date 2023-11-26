// Importación de las dependencias necesarias
const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

(async () => {
    // Iniciar Puppeteer en modo visible (no headless)
    const browser = await puppeteer.launch({ headless: false });
    // Abrir una nueva página en el navegador
    const page = await browser.newPage();

    // Configuración de la URL de acceso a Ghost y las credenciales de administrador
    const ghostAdminUrl = 'http://localhost:2369/ghost'; 
    const adminUsername = 'pmbtgun@gmail.com'; // Correo del administrador
    const adminPassword = 'QAZwsx01@2023'; // Contraseña del administrador

    // Proceso de inicio de sesión en Ghost
    await page.goto(`${ghostAdminUrl}/#/signin`);
    await page.waitForSelector('input[name="identification"]');
    await page.type('input[name="identification"]', adminUsername);
    await page.type('input[name="password"]', adminPassword);
    await page.click('button.login');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Navegación a la sección de miembros para añadir un nuevo miembro
    await page.goto(`${ghostAdminUrl}/#/members`);
    await page.waitForSelector('a[href="#/members/new/"]');
    await page.click('a[href="#/members/new/"]');

    // Espera a que se cargue el formulario para añadir un nuevo miembro
    await page.waitForSelector('input[name="name"]');

    // Genera un nombre completo válido y un email inválido usando Faker
    const name = faker.name.fullName(); // Nombre completo generado aleatoriamente
    const invalidEmail = 'invalid-email'; // Email claramente inválido para la prueba

    // Rellena el formulario con el nombre y el email generados
    await page.type('input[name="name"]', name);
    await page.type('input[name="email"]', invalidEmail);

    // Intenta guardar el nuevo miembro con los datos proporcionados
    await page.click('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');

    try {
        // Espera a que aparezca un mensaje de error debido al email inválido
        await page.waitForSelector('.form-group.max-width.error .response', { timeout: 5000 });

        // Captura y muestra el mensaje de error obtenido
        const errorMessage = await page.$eval('.form-group.max-width.error .response', element => element.textContent.trim());
        console.log('Mensaje de error detectado:', errorMessage);

    } catch (error) {
        // Si no se detecta el mensaje de error, se asume que el miembro pudo haberse creado incorrectamente
        console.log('No se detectó un mensaje de error, el miembro pudo haberse creado incorrectamente');
    }

    // Cierra el navegador una vez finalizada la prueba
    await browser.close();
})();