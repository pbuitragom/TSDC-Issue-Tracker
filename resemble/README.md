# Documentación de la Herramienta de Regresión Visual con Resemble Js

## Descripción General

Esta herramienta automatiza la comparación visual de aplicaciones web entre diferentes versiones, facilitando la identificación de cambios no intencionados. Utiliza Playwright para las interacciones con el navegador y Resemble.js para la comparación de imágenes.

## Recursos Adicionales

- Para información detallada sobre las características y API de Resemble.js, visita el [repositorio de GitHub de Resemble.js](https://github.com/rsmbl/Resemble.js/blob/master/README.md).


## Versiones comparadas
Para la ejecución de la herramienta, se procede a utilizar imagénes obtenidas que se encuentran en kraken y kraken-2, que corresponden a el screenshot de un escenario y un paso enumerado en las dos versiones Ghost Version 5.72.2 y Ghost Vesrión 4.44, las cuales se comparan y se evalúan las diferencias visuales, y se establece un análisis y reporte para identificar los cambios entre las dos versiones. 

## Ejecución de herramienta

Sigue estos pasos para ejecutar las pruebas:

1. Clona el repositorio:

   * git clone [https://github.com/pbuitragom/TSDC-Issue-Tracker.git]

2. Navega al directorio clonado:
   * cd [`TSDC-Issue-Tracker`]

Si encuentras problemas o tienes preguntas, consulta el tutorial de pruebas de regresión visual o la documentación de Resemble.js. Seguir el manual de instalación en su ambiente [aquí](https://misovirtual.virtual.uniandes.edu.co/codelabs/visual-regression-testing-resemble/index.html#4)
Antes de comenzar, asegúrate de tener Node.js y npm instalados. Esta herramienta ha sido probada con:

- Node.js versión `18.12.1`
- npm versión `8.19.2`


3. Desde el directorio raiz del repositorio clonado [`TSDC-Issue-Tracker`] cambia al directorio de pruebas de resemble:
cd [`resemble`]


4. Instala las dependencias requeridas:
`npm install playwright`
`npm install resemblejs`

5. Ejecuta la herramienta con el comando:
`node index.js`

Este comando debe ejecutarse dentro del directorio de  resemble. Se creará el directorio results/prueba y se generarán las imágenes de comparación. Revisa las imágenes para inspeccionar las diferencias.

# Generación de Reportes
La herramienta genera automáticamente un archivo `report.html` en el directorio ./`results/prueba` después de la ejecución de la herramienta. Este informe proporciona una comparación visual y analítica entre dos versiones de la aplicación web.

![Reporte]( https://github.com/pbuitragom/TSDC-Issue-Tracker/blob/main/resemble/results/prueba/compare-escenario1_step_7.png)


## Detalles del Informe

El informe HTML se compone de las siguientes secciones:

* Encabezado: Muestra la marca de tiempo de ejecución.
* Imágenes de Comparación: Imágenes lado a lado para cada escenario y paso, incluyendo la imagen original (versión ghots v5.72.2),   la de comparación (versión ghots v4.44) y la imagen de diferencia generada.
* Análisis: Métricas detalladas para cada comparación, tales como igualdad de dimensiones, porcentajes de desajuste y tiempo de análisis.
La apariencia del informe está definida por el archivo index.css, asegurando que el contenido se presente de manera clara y navegable.

![Reporte](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funiandes-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!vwqOSlQUMEm1xjJd1NI12ose1AFvZIpGnwnvBiu_FvzrifNfF2ugTJo4rV3r0FGB%2Fitems%2F01YH4BEZSVHVRSDNLNERDYH2ZZAXVMMG5L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5pYW5kZXMtbXkuc2hhcmVwb2ludC5jb21AZmFiZDA0N2MtZmY0OC00OTJhLThiYmItOGY5OGI5ZmI5Y2NhIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcwMDM5NTIwMCIsImV4cCI6IjE3MDA0MTY4MDAiLCJlbmRwb2ludHVybCI6IjNXWDk3VkhzclR5ZkExN3hHSno4aHoxNmtIem1hckM0anlDanFEMFZGekk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOR0U0WlRCaFltWXRNVFExTkMwME9UTXdMV0kxWXpZdE16STFaR1EwWkRJek5XUmgiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8aS5zaW5uaW5nQHVuaWFuZGVzLmVkdS5jbyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAyYmNhYTVhZjdAbGl2ZS5jb20iLCJzaWQiOiJjZmM4Y2QwOS1kODU3LTQzYTgtOTk4Yy0yZDYzNDEwNGM1ZTMiLCJ0dCI6IjAiLCJpcGFkZHIiOiIxODEuNTUuMTU4LjE1NiIsInNuaWQiOiI2Iiwic3RwIjoidCJ9.0tBlToVlva5ECl-jFKEZeKd-CHTBzjyUEC6PWN29VkI&cTag=%22c%3A%7B21633D55-6DB5-4724-83EB-3905EAC61BAB%7D%2C1%22&encodeFailures=1&width=623&height=489&srcWidth=623&srcHeight=489)

### Videos Explicativos de Herramienta
* [Resemble](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EXcnu4wLTgROmponXoCe3aAB46111_vN5HGePolwxKwLfQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=Z0OlK1)
* [Ejecución y Reporte](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZf0JKl1d29NhJeouOYBrD8BupGmLeeJa-R2SGSFYDVmgQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=VLiGES)
  
### Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT
* [Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Analisis-de--Pros-y-Contras-de-Herramienta-Resemble-Js)


## Reporte de Incidencias 
* [TSDC-Issue-Tracker.git](https://github.com/pbuitragom/TSDC-Issue-Tracker/issues) 
