# TSDC-Issue-Tracker

Previamente instale ghost cmoo se indica en la guía
https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#2
La versión que se debe utiliar es Ghost v5.72.2

Una vez instalado Ghost
- Configurar la instalación local en http://localhost:2368/ghost/#/setup

  <img width="710" alt="image" src="https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/a71f9e55-055c-4bc7-8b4c-0b50637e894b">

Configurando los campos de la imagen de arriba así:
  Site title: MISO Entrega 5
  Full Name: Pepito Perez
  Email address: pmbtgun@gmail.com	
  Password: QAZwsx01@2023

En este punto tendrá el sitio así:

<img width="780" alt="image" src="https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/1bae650f-338b-490a-bd66-95176aaf5333">


Para Kranken:

- Funciona para Node 16: nvm use v16
- Seguir el manual de instalación de kraken en su ambiente https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#2
- Instalar android-platform-tools, en nuestro caso: brew install android-platform-tools 
- Instalar npm install chai
- Clonar este repositorio
- npm install
- cd TSDC-Issue-Tracker/kraken
- Ejecutar ./node_modules/kraken-node/bin/kraken-node run
  
