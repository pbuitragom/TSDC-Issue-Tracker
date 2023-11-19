# TSDC-Issue-Tracker

## Semana 5 - Proyecto de Pruebas Automatizadas en GHOST con Kraken y Cypress

El proyecto de automatización de pruebas End-to-End (E2E) para la aplicación GHOST durante la Semana 5 se enfoca en la implementación de pruebas E2E automatizadas, una estrategia clave para detectar errores y fallos en la aplicación sin intervención humana. Tradicionalmente, las pruebas E2E para GHOST se han realizado manualmente, lo cual puede ser propenso a errores y falta de documentación. Para superar estos desafíos, nuestro equipo ha decidido utilizar Kraken, una herramienta recomendada para pruebas E2E con enfoque en Testing Conductual (BDT), y Cypress. El objetivo es implementar y automatizar escenarios de prueba seleccionados, utilizando ambas herramientas para cada escenario.

### Integrantes del Proyecto del equipo 10:
- Pedro Buitrago - p.buitrago@uniandes.edu.co
- Juan Ardila - jd.ardila12@uniandes.edu.co
- Juan Ortiz - j.ortiz@uniandes.edu.co
- Irina Sinning - i.sinning@uniandes.edu.co

## Requisitos Previos

Previamente instale Ghost como se indica en la guía: [Guía de Instalación de Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#2)

La versión que se debe utilizar es Ghost v5.72.2

Una vez instalado Ghost:

- Configurar la instalación local en [http://localhost:2368/ghost/#/setup](http://localhost:2368/ghost/#/setup)

![Configuración de Ghost](https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/a71f9e55-055c-4bc7-8b4c-0b50637e894b)

Configurando los campos de la imagen de arriba así:
- Site title: MISO Entrega 5
- Full Name: Pepito Perez
- Email address: pmbtgun@gmail.com
- Password: QAZwsx01@2023

En este punto tendrá el sitio así:

![Sitio configurado](https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/1bae650f-338b-490a-bd66-95176aaf5333)

## Instalación y Ejecución de Pruebas

Asegúrese de tener Node.js (versión 16.20.2) instalado en su máquina. NVM (Node Version Manager) debe estar instalado para manejar las versiones y evitar conflictos de compatibilidad. Para instalar nvm puedes seguir los pasos del repositorio oficial [aquí](https://github.com/nvm-sh/nvm). NPM (Node Package Manager) debe estar instalado para manejar las dependencias. Tener Git instalado para clonar el repositorio del proyecto.

### Pasos de Instalación

#### Para Kraken:

- Funciona para Node 16: `nvm use v16`
- Seguir el manual de instalación de Kraken en su ambiente [aquí](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#2)
- Instalar android-platform-tools, en nuestro caso: `brew install android-platform-tools`
- Instalar `npm install chai`
- Clonar este repositorio [https://github.com/pbuitragom/TSDC-Issue-Tracker.git](https://github.com/pbuitragom/TSDC-Issue-Tracker.git)
- `npm install`
- `cd TSDC-Issue-Tracker/kraken`
- Ejecutar `./node_modules/kraken-node/bin/kraken-node run`

#### Para Cypress:
- Verificar Node.js: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [el sitio web oficial de Node.js](https://nodejs.org/).
- Ir a la ubicacion de cypress `cd cypress`
- Ejecuta el siguiente comando para instalar dependencias: `npm install`
- en el archivo cypress.env.json cambiar los valos de email y password por los configurados en Ghost
- Abrir la Interfaz de Usuario de Cypress `npx cypress open`
- Ejecutar las pruebas en la inderfaz de cypress (recomendado) o ejecutar `npx cypress run`

--------------------------
## Semana 6 - Proyecto de Pruebas Automatizadas en GHOST con Kraken y Cypress modificados para tomar screenshots, resemble y backstop

Previamente instale Ghost como se indica en la guía: Guía de Instalación de Ghost

Se deben utilizar dos versiones de ghots Ghost v5.72.2  y Ghost 4.44

Para cada una de las versiones es requerido configurar ghost con estos datos

Configurando los campos de la imagen de arriba así:

Site title: MISO Entrega 6
Full Name: Pepito Perez
Email address: pmbtgun@gmail.com
Password: QAZwsx01@2023

#### Pasos de Instalación
#### Para Kraken:
Funciona para Node 16: nvm use v16
Seguir el manual de instalación de Kraken en su ambiente aquí
Instalar android-platform-tools, en nuestro caso: brew install android-platform-tools
Instalar npm install chai
Clonar este repositorio https://github.com/pbuitragom/TSDC-Issue-Tracker.git

En este punto para kraken tendrá dos carpetas

- kraken: Pruebas para la version ghost v5.72.2
- kraken-v2: Pruebas para la version ghots v4.44

#### Para la ejecución de las pruebs de la versión ghots v5.72.2:

Asegúrese de subir el servicio de ghost v5.72.2
cd kraken
npm install 
./node_modules/kraken-node/bin/kraken-node run

#### Para la ejecución de las pruebs de la versión ghost v4.44:

Asegúrese de subir el servicio de ghost v5.72.2
cd kraken-2
npm install 
./node_modules/kraken-node/bin/kraken-node run

Traas la ejecución tendrá cerca de 60 imágenes que corresponden a los screenshots de referencia de cada una las versiones para cada uno de los scenarios y steps definidos. 

A continuación y video con la explicación de las configuraciones para kraken: https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EbyUksKM_e9DtZHDtbCckUABJOLopTZDSI5bZG5P1bsIfA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=ggIbsm



### Herramienta de Regresión Visual  Resemble.js
#### [Carpeta de Herramienta](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/resemble)
#### [Readme Resemble](https://github.com/pbuitragom/TSDC-Issue-Tracker/blob/main/resemble/README.md)


#### Ejecución de la Herramienta
Pasos para ejecutar:
1. Clonar el repositorio: `git clone https://github.com/pbuitragom/TSDC-Issue-Tracker.git`
2. Navegar al directorio: `cd TSDC-Issue-Tracker`
3. Cambiar al directorio de pruebas de resemble: `cd resemble`
4. Instalar dependencias:
   - `npm install playwright`
   - `npm install resemblejs`
5. Ejecutar con: `node index.js`

Se generará el directorio `results/prueba` [Carpeta](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/resemble/results/prueba) con imágenes de comparación.

#### Generación de Reportes
Genera automáticamente `report.html` en `./results/prueba` para comparaciones visuales y analíticas.


#### Detalles del Informe
- Encabezado con resultadol informe
- Imágenes de Comparación: originales (versión ghots v5.72.2), de comparación (versión ghots v4.44) y de diferencias.
- Análisis: Métricas de comparación, dimensiones, porcentajes de desajuste y tiempos.

![Reporte](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funiandes-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!vwqOSlQUMEm1xjJd1NI12ose1AFvZIpGnwnvBiu_FvzrifNfF2ugTJo4rV3r0FGB%2Fitems%2F01YH4BEZSVHVRSDNLNERDYH2ZZAXVMMG5L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5pYW5kZXMtbXkuc2hhcmVwb2ludC5jb21AZmFiZDA0N2MtZmY0OC00OTJhLThiYmItOGY5OGI5ZmI5Y2NhIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcwMDM5NTIwMCIsImV4cCI6IjE3MDA0MTY4MDAiLCJlbmRwb2ludHVybCI6IjNXWDk3VkhzclR5ZkExN3hHSno4aHoxNmtIem1hckM0anlDanFEMFZGekk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOR0U0WlRCaFltWXRNVFExTkMwME9UTXdMV0kxWXpZdE16STFaR1EwWkRJek5XUmgiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8aS5zaW5uaW5nQHVuaWFuZGVzLmVkdS5jbyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAyYmNhYTVhZjdAbGl2ZS5jb20iLCJzaWQiOiJjZmM4Y2QwOS1kODU3LTQzYTgtOTk4Yy0yZDYzNDEwNGM1ZTMiLCJ0dCI6IjAiLCJpcGFkZHIiOiIxODEuNTUuMTU4LjE1NiIsInNuaWQiOiI2Iiwic3RwIjoidCJ9.0tBlToVlva5ECl-jFKEZeKd-CHTBzjyUEC6PWN29VkI&cTag=%22c%3A%7B21633D55-6DB5-4724-83EB-3905EAC61BAB%7D%2C1%22&encodeFailures=1&width=623&height=489&srcWidth=623&srcHeight=489)

#### Videos Explicativos
- [Configuraciones para kraken](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EbyUksKM_e9DtZHDtbCckUABJOLopTZDSI5bZG5P1bsIfA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=ggIbsm)
- [Resemble](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EXcnu4wLTgROmponXoCe3aAB46111_vN5HGePolwxKwLfQ?e=Z0OlK1)
- [Ejecución y Reporte](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZf0JKl1d29NhJeouOYBrD8BupGmLeeJa-R2SGSFYDVmgQ?e=VLiGES)

#### Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT
- [Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Analisis-de--Pros-y-Contras-de-Herramienta-Resemble-Js)

#### Reporte de Incidencias
- [TSDC-Issue-Tracker](https://github.com/pbuitragom/TSDC-Issue-Tracker/issues)
#### 
- [Wiki](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Semana-6-%E2%80%90-Proyecto-de-Pruebas-Automatizadas-en-GHOST-con-Kraken-y-Cypress-modificados-para-tomar-screenshots,-resemble-y-backstop)

