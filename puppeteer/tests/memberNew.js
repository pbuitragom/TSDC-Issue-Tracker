// Importar las dependencias necesarias
const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

(async () => {
    // Lanzar Puppeteer en modo no headless para visualizar la navegación
    const browser = await puppeteer.launch({ headless: false });
    // Abrir una nueva página en el navegador controlado por Puppeteer
    const page = await browser.newPage();

    // Configurar la URL y las credenciales de acceso a Ghost
    const ghostAdminUrl = 'http://localhost:2369/ghost'; 
    const adminUsername = 'pmbtgun@gmail.com'; 
    const adminPassword = 'QAZwsx01@2023'; 

    // Navegar a la página de inicio de sesión de Ghost y realizar el acceso
    await page.goto(`${ghostAdminUrl}/#/signin`);
    await page.waitForSelector('input[name="identification"]');
    await page.type('input[name="identification"]', adminUsername);
    await page.type('input[name="password"]', adminPassword);
    await page.click('button.login');

    // Esperar a que se cargue completamente el Dashboard de Ghost
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Navegar a la sección de miembros dentro de Ghost
    await page.goto(`${ghostAdminUrl}/#/members`);

    // Hacer clic en el botón para agregar un nuevo miembro
    await page.waitForSelector('a[href="#/members/new/"]');
    await page.click('a[href="#/members/new/"]');

    // Esperar a que se cargue el formulario para añadir un nuevo miembro
    await page.waitForSelector('input[name="name"]');

    // Generar datos aleatorios para el nuevo miembro usando Faker
    const name = faker.name.fullName(); // Nombre completo
    const email = faker.internet.email(); // Correo electrónico
    const note = faker.lorem.sentence(); // Nota o descripción

    // Rellenar el formulario con los datos generados
    await page.type('input[name="name"]', name);
    await page.type('input[name="email"]', email);
    await page.type('textarea[name="note"]', note);

    // Guardar el nuevo miembro
    await page.waitForSelector('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    await page.click('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');

    // Esperar a que se complete la navegación después de guardar el miembro
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Verificar que el nuevo miembro haya sido añadido correctamente revisando su presencia en la lista de miembros
    await page.goto(`${ghostAdminUrl}/#/members`);
    await page.waitForSelector(`text=${email}`);
    console.log(`Member with email ${email} was found in the list, indicating a successful creation.`);

    // Cerrar el navegador
    await browser.close();
})();