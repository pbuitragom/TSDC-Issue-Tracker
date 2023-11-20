# Documentación de BackstopJS para Regresión Visual

## Descripción General

BackstopJS es una herramienta que automatiza la comparación visual de aplicaciones web entre diferentes versiones, facilitando la identificación de cambios no intencionados. Utiliza capturas de pantalla para comparar visualmente las interfaces de usuario y generar informes detallados sobre las diferencias. A continuación, se describen los componentes clave de BackstopJS.

## Recursos Adicionales

Para obtener información detallada sobre las características y la API de BackstopJS, consulta el [repositorio de GitHub de BackstopJS](https://github.com/garris/BackstopJS).

## Versiones Comparadas

Para ejecutar BackstopJS, se utilizan imágenes obtenidas que corresponden a capturas de pantalla de escenarios específicos en dos versiones diferentes. Por ejemplo, podrías comparar las versiones Ghost 5.72.2 y Ghost 4.44. Se analizan y evalúan las diferencias visuales, y se genera un informe detallado para identificar los cambios entre las dos versiones.

## Estructura del Proyecto

El archivo `backstop.json` es la configuración principal de BackstopJS. Define los escenarios de prueba, las rutas de los archivos y otras configuraciones importantes. El script principal, `index.js`, orquesta las comparaciones visuales utilizando módulos clave como BackstopJS, fs para el manejo de archivos y path para la manipulación de rutas de archivos.

## Proceso de Desarrollo

1. **Configuración Inicial:**
   - Se importan los módulos necesarios y se extraen configuraciones del archivo `backstop.json`.

2. **Preparación del Entorno:**
   - Se crea un directorio para almacenar los resultados de las pruebas si no existe.

3. **Ejecución de Pruebas:**
   - Se realiza un bucle sobre los escenarios de prueba definidos. Para cada paso de cada escenario, BackstopJS compara las capturas de pantalla correspondientes entre las dos versiones.

4. **Comparación de Imágenes:**
   - Utilizando BackstopJS, se analizan las imágenes y se almacenan los resultados.

5. **Generación de Reportes:**
   - Se crea un informe HTML detallado con los resultados de las comparaciones, incluyendo imágenes y análisis de las diferencias.

6. **Estilos del Informe:**
   - Se copia un archivo CSS para estilizar el informe generado.

7. **Manejo de Errores:**
   - Se implementa el manejo de errores durante la ejecución de las pruebas.

Este proceso proporciona una manera sistemática de detectar y analizar cambios visuales entre versiones de una aplicación web.

Para obtener ayuda sobre comandos específicos y opciones de configuración, consulta la [documentación oficial de BackstopJS](https://github.com/garris/BackstopJS).

## Videos del Proyecto

Creación de referencias
https://app.usebubbles.com/4EbGReqJj6Q3FJcTt1Q9jS/untitled?threadId=8Yq8cCK9MU1L3B7QtchgVx

Creación de diferencias
https://app.usebubbles.com/fUPXpQEhnoW6tatuGdemvv/untitled

