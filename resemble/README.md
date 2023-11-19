# Documentación de la Herramienta de Pruebas de Regresión Visual con Resemble Js

## Descripción General

Esta herramienta automatiza la comparación visual de aplicaciones web entre diferentes versiones, facilitando la identificación de cambios no intencionados. Utiliza Playwright para las interacciones con el navegador y Resemble.js para la comparación de imágenes.

## Recursos Adicionales

- Para información detallada sobre las características y API de Resemble.js, visita el [repositorio de GitHub de Resemble.js](https://github.com/rsmbl/Resemble.js/blob/master/README.md).

## Ejecución de Pruebas

Sigue estos pasos para ejecutar las pruebas:

1. Clona el repositorio:

   * git clone [https://github.com/pbuitragom/TSDC-Issue-Tracker.git]

2. Navega al directorio clonado:
   * cd [TSDC-Issue-Tracker]

Si encuentras problemas o tienes preguntas, consulta el tutorial de pruebas de regresión visual o la documentación de Resemble.js. Seguir el manual de instalación de Kraken en su ambiente [aquí](https://misovirtual.virtual.uniandes.edu.co/codelabs/visual-regression-testing-resemble/index.html#4)
Antes de comenzar, asegúrate de tener Node.js y npm instalados. Esta herramienta ha sido probada con:

- Node.js versión `18.12.1`
- npm versión `8.19.2`


3. Desde el directorio raiz del repositorio clonado [TSDC-Issue-Tracker] cambia al directorio de pruebas de resemble:
cd [resemble]


4. Instala las dependencias requeridas:
`npm install playwright`
`npm install resemblejs`

5. Ejecuta las pruebas con el comando:
`node index.js`

Este comando debe ejecutarse dentro del directorio de pruebas resemble. Se creará el directorio results/prueba y se generarán las imágenes de comparación. Revisa las imágenes para inspeccionar las diferencias.

# Generación de Reportes
La herramienta genera automáticamente un archivo `report.html` en el directorio ./`results/prueba` después de la ejecución de las pruebas. Este informe proporciona una comparación visual y analítica entre dos versiones de la aplicación web.

## Detalles del Informe

El informe HTML se compone de las siguientes secciones:

* Encabezado: Muestra la marca de tiempo de ejecución.
* Imágenes de Comparación: Imágenes lado a lado para cada escenario y paso, incluyendo la imagen original, la de comparación y la imagen de diferencia generada.
* Análisis: Métricas detalladas para cada comparación, tales como igualdad de dimensiones, porcentajes de desajuste y tiempo de análisis.
La apariencia del informe está definida por el archivo index.css, asegurando que el contenido se presente de manera clara y navegable.



## Reporte de Incidencias 
[TSDC-Issue-Tracker.git](https://github.com/pbuitragom/TSDC-Issue-Tracker/issues) 