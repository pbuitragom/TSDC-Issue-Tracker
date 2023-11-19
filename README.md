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

Pasos de Instalación
Para Kraken:
Funciona para Node 16: nvm use v16
Seguir el manual de instalación de Kraken en su ambiente aquí
Instalar android-platform-tools, en nuestro caso: brew install android-platform-tools
Instalar npm install chai
Clonar este repositorio https://github.com/pbuitragom/TSDC-Issue-Tracker.git

En este punto para kraken tendrá dos carpetas

- kraken: Pruebas para la version ghots v5.72.2
- kraken-v2: Pruebas para la version ghots v4.44

Para la ejecución de las pruebs de la versión ghots v5.72.2:

Asegúrese de subir el servicio de ghost v5.72.2
cd kraken
npm install 
./node_modules/kraken-node/bin/kraken-node run

Para la ejecución de las pruebs de la versión ghots v4.44:

Asegúrese de subir el servicio de ghost v5.72.2
cd kraken-2
npm install 
./node_modules/kraken-node/bin/kraken-node run

Traas la ejecución tendrá cerca de 60 imágenes que corresponden a los screenshots de referencia de cada una las versiones para cada uno de los scenarios y steps definidos. 






