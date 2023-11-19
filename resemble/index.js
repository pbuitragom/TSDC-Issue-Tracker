// Importando módulos necesarios
const playwright = require('playwright'); // Usado para la automatización del navegador (no se utiliza directamente aquí)
const compareImages = require("resemblejs/compareImages"); // Usado para comparar imágenes
const config = require("./config.json"); // Configuración de pruebas (navegador, opciones de comparación, etc.)
const fs = require('fs'); // Módulo de sistema de archivos para operaciones de archivos
const path = require('path'); // Módulo de ruta para manejar rutas de archivos

// Extracción de configuraciones específicas
const { viewportHeight, viewportWidth, browsers, options } = config;

// Función principal para ejecutar la prueba de regresión visual
async function executeTest() {
    // Marca de tiempo para el informe
    let datetime = new Date().toISOString().replace(/:/g, ".");
    // Objeto para almacenar los resultados de las comparaciones
    let resultInfo = {};
    // Número total de escenarios a probar
    const numEscenarios = 10; 

    // Crear el directorio de resultados si no existe
    if (!fs.existsSync(`./results/prueba`)) {
        fs.mkdirSync(`./results/prueba`, { recursive: true });
    }

    // Bucle a través de cada escenario
    for (let escenario = 1; escenario <= numEscenarios; escenario++) {
        let paso = 1;
        // Bucle infinito para iterar a través de pasos de cada escenario
        while (true) {
            // Construir rutas a las imágenes de las dos versiones para comparar
            const image1Path = path.join(__dirname, `../kraken-2/screen_gv4_escenario${escenario}_step_${paso}.png`);
            const image2Path = path.join(__dirname, `../kraken/screen_gv5_escenario${escenario}_step_${paso}.png`);

            // Verificar si ambas imágenes existen
            if (fs.existsSync(image1Path) && fs.existsSync(image2Path)) {
                try {
                    // Comparar las imágenes y almacenar los datos
                    const data = await compareImages(
                        fs.readFileSync(image1Path),
                        fs.readFileSync(image2Path),
                        options
                    );
                    // Almacenar los resultados de la comparación en el objeto resultInfo
                    resultInfo[`escenario${escenario}_step${paso}`] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime
                    };
                    // Guardar la imagen de la diferencia generada en el disco
                    const outputPath = path.join(__dirname, `./results/prueba/compare-escenario${escenario}_step_${paso}.png`);
                    fs.writeFileSync(outputPath, data.getBuffer());
                    paso++;
                } catch (error) {
                    // Registrar errores y romper el bucle si ocurre algún error
                    console.error(`Error en escenario ${escenario}, paso ${paso}:`, error);
                    break;
                }
            } else {
                // Salir del bucle si no hay más imágenes para comparar
                break;
            }
        }
    }

    // Generar contenido del informe una vez completadas todas las comparaciones
    const reportContent = createReport(resultInfo);
    // Escribir el informe en un archivo HTML
    const reportPath = path.join(__dirname, './results/prueba/report.html');
    fs.writeFileSync(reportPath, reportContent);
    // Copiar el archivo CSS para el estilo del informe
    fs.copyFileSync(path.join(__dirname, 'index.css'), path.join(__dirname, './results/prueba/index.css'));
    // Mensaje de finalización de la ejecución
    console.log('------------------------------------------------------------------------------------');
    console.log("Ejecución finalizada. Comprueba el informe en la carpeta de resultados");
}

// Asegúrate de ejecutar la función `executeTest` y manejar errores potenciales
(async () => {
    try {
        await executeTest();
    } catch (error) {
        console.error('Error during test execution:', error);
    }
})();

// Ruta y definición de funciones para crear reportes
function browser(b, resultInfo, stepCount) {
    let imgLines = "";
    for (let i = 1; i <= stepCount; i++) {
        // Rutas de las imágenes
        const image1Path = `../../../kraken/screen_gv5_escenario${b}_step_${i}.png`;
        const image2Path = `../../../kraken-2/screen_gv4_escenario${b}_step_${i}.png`;
        const diffPath = `compare-escenario${b}_step_${i}.png`;

        imgLines += `
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">GV5 Escenario ${b} Paso ${i}</span>
            <img class="img2" src="${image1Path}" alt="Ghost Versión 5.72.2 Escenario ${b} Paso ${i}">
          </div>
          <div class="imgcontainer">
            <span class="imgname">GV4 Escenario ${b} Paso ${i}</span>
            <img class="img2" src="${image2Path}" alt="Ghost Versión 4.44 Escenario ${b} Paso ${i}">
          </div>
          <div class="imgcontainer">
            <span class="imgname">Diferencia Escenario ${b} Paso ${i}</span>
            <img class="imgfull" src="${diffPath}" alt="Diferencia Escenario ${b} Paso ${i}">
          </div>
        </div>`;
    }

    return `
    <div class="browser">
        <div class="btitle">
            <h2>Escenario: ${b}</h2>
        </div>
        ${imgLines}
    </div>`;
}

// Función para crear el informe de comparación visual en formato HTML
function createReport(resultInfo) {
    let reportSections = "";

    // Iterar sobre cada resultado de comparación
    Object.keys(resultInfo).forEach(key => {
        // Extracción del número de escenario y paso a partir de la clave
        const match = key.match(/escenario(\d+)_step(\d+)/);
        if (match) {
            const escenario = match[1];
            const paso = match[2];

            // Construir rutas de las imágenes comparadas y la imagen de diferencia
            const image1Filename = `../../../kraken/screen_gv5_escenario${escenario}_step_${paso}.png`;
            const image2Filename = `../../../kraken-2/screen_gv4_escenario${escenario}_step_${paso}.png`;
            const diffFilename = `compare-escenario${escenario}_step_${paso}.png`;

            // Resultados individuales para cada comparación
            const result = resultInfo[key];

            // Construcción de la sección HTML para cada conjunto de comparaciones
            reportSections += `
            <div class="browser">
                <div class="btitle">Escenario ${escenario} Paso ${paso}</div>
                <div class="imgline">
                    <div class="imgcontainer">
                        <span class="imgname">Ghost Versión 5.72.2</span>
                        <img class="img2" src="${image1Filename}" alt="Ghost Versión 5.72.2 Escenario ${escenario} Paso ${paso}">
                    </div>
                    <div class="imgcontainer">
                        <span class="imgname">Ghost Versión 4.44</span>
                        <img class="img2" src="${image2Filename}" alt="Ghost Versión 4.44 Escenario ${escenario} Paso ${paso}">
                    </div>
                    <div class="imgcontainer">
                        <span class="imgname">Diferencia </span>
                        <img class="imgfull" src="${diffFilename}" alt="Diferencia Escenario ${escenario} Paso ${paso}">
                    </div>
                </div>
                <div class="analysis">
                    <h3>Análisis del Escenario ${escenario} Paso ${paso}</h3>
                    <p><b>Dimensiones iguales:</b> ${result.isSameDimensions ? 'Sí' : 'No'}</p>
                    <p><b>Diferencia de dimensiones:</b> ${JSON.stringify(result.dimensionDifference)}</p>
                    <p><b>Porcentaje de discrepancia bruto:</b> ${result.rawMisMatchPercentage}%</p>
                    <p><b>Porcentaje de discrepancia:</b> ${result.misMatchPercentage}%</p>
                    <p><b>Límites de la diferencia:</b> ${JSON.stringify(result.diffBounds)}</p>
                    <p><b>Tiempo de análisis:</b> ${result.analysisTime}ms</p>
                    ${interpretResult(result)}
                </div>
            </div>`;
        }
    });

    // Devolver el contenido completo del informe en formato HTML
    return `
    <html>
        <head>
            <title>Informe de comparación visual</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Informe de Comparación Visual</h1>
            <p>Ejecutado: ${new Date().toISOString().replace(/:/g, '.')}</p>
            ${reportSections}
        </body>
    </html>`;
}

// Función para interpretar los resultados de la comparación
function interpretResult(result) {
    let interpretation = '<div class="interpretation">';

    // Interpretar el porcentaje de discrepancia y añadir texto relevante
    interpretation += interpretDiscrepancy(result.rawMisMatchPercentage);

    // Advertencia sobre dimensiones no coincidentes, si es el caso
    if (!result.isSameDimensions) {
        interpretation += `<p><strong>Advertencia de Dimensiones:</strong> Las dimensiones de las imágenes no coinciden.</p>`;
    }

    // Información sobre diferencias en las dimensiones, si las hay
    if (result.dimensionDifference && (result.dimensionDifference.width !== 0 || result.dimensionDifference.height !== 0)) {
        interpretation += `<p><strong>Diferencia de Dimensiones:</strong> Ancho: ${result.dimensionDifference.width}px, Alto: ${result.dimensionDifference.height}px.</p>`;
    }

    // Información sobre los límites de las áreas donde se detectaron discrepancias
    if (result.diffBounds) {
        interpretation += interpretDiffBounds(result.diffBounds);
    }

    // Información sobre el tiempo que tomó la comparación
    interpretation += `<p><strong>Tiempo de Análisis:</strong> ${result.analysisTime} milisegundos.</p>`;
    interpretation += '</div>';
    return interpretation;
}

// Función auxiliar para interpretar el porcentaje de discrepancia
function interpretDiscrepancy(percentage) {
    // Interpretar y devolver el texto basado en el porcentaje de discrepancia
    if (percentage > 5) {
        return `<p><strong>Discrepancia Significativa:</strong> Porcentaje de discrepancia bruta del ${percentage}%.</p>`;
    } else if (percentage > 1) {
        return `<p><strong>Discrepancia Leve:</strong> Porcentaje de discrepancia bruta del ${percentage}%.</p>`;
    } else {
        return `<p><strong>Sin Discrepancias Significativas:</strong> Los cambios son mínimos o inexistentes.</p>`;
    }
}

// Función auxiliar para interpretar los límites de la discrepancia
function interpretDiffBounds(bounds) {
    // Interpretar y devolver el texto basado en los límites de la discrepancia
    if (bounds) {
        return `<p><strong>Límites de la Discrepancia:</strong> Se ha detectado una discrepancia visual en las coordenadas (top: ${bounds.top}, left: ${bounds.left}, bottom: ${bounds.bottom}, right: ${bounds.right}). Es importante revisar estos elementos visualmente para confirmar los cambios.</p>`;
    } else {
        return '<p><strong>Límites de la Discrepancia:</strong> No se detectaron discrepancias significativas en las coordenadas de las imágenes.</p>';
    }
}

// Asegúrarse función `createReport` se llama correctamente después de que `executeTest` termina.
(async () => {
    try {
        await executeTest();
    } catch (error) {
        console.error('Error during test execution:', error);
    }
})();

