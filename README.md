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

- Site title: MISO Entrega 6
- Full Name: Pepito Perez
- Email address: pmbtgun@gmail.com
- Password: QAZwsx01@2023

Es importante asegurar que en la aplicación ghost no existan posts, pages, tags ni members. 

#### Pasos de Instalación

#### Para Kraken:
Funciona para Node 16: nvm use v16
- Seguir el manual de instalación de Kraken en su ambiente aquí
- `Instalar android-platform-tools`, en nuestro caso: `brew install android-platform-tools`
- `Instalar npm install chai`
- Clonar este repositorio https://github.com/pbuitragom/TSDC-Issue-Tracker.git

En este punto para kraken tendrá dos carpetas

- `kraken`: Pruebas para la version `ghost v5.72.2`
- `kraken-v2`: Pruebas para la version `ghots v4.44`

#### Para la ejecución de las pruebs de la versión `ghost v5.72.2`:

- Asegúrese de subir el servicio de `ghost v5.72.2`
- `cd kraken`
- `npm install`
- `./node_modules/kraken-node/bin/kraken-node run`

#### Para la ejecución de las pruebs de la versión `ghost v4.44`:

Nota: Es importante tener en cuenta que los archivos kraken-2/a_create_post.feature, kraken-2/b_update_post.feature ,  kraken-2/c_delete_post.feature , kraken-2/d_create_page.feature  y  kraken-2/e_update_page.feature actualmente apunta a una máquina en AWS en la sentencia Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin", es necesario que quién realice las pruebas haga la configuración de la url según aplique ya que la url http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin NO está disponible para terceros. 

- Asegúrese de subir el servicio de `ghost v4.44`
- `cd kraken-2`
- `npm install`
- `./node_modules/kraken-node/bin/kraken-node run`

Traas la ejecución tendrá cerca de 60 imágenes que corresponden a los screenshots de referencia de cada una las versiones para cada uno de los scenarios y steps definidos. 

A continuación y video con la explicación de las configuraciones para kraken: https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EbyUksKM_e9DtZHDtbCckUABJOLopTZDSI5bZG5P1bsIfA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=ggIbsm

### [WIKI](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Semana-6-%E2%80%90-Proyecto-de-Pruebas-Automatizadas-en-GHOST-con-Kraken-y-Cypress-modificados-para-tomar-screenshots,-resemble-y-backstop)

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

#### Pasos de Instalación
#### Para Cypress:

Asegúrese de tener Node.js instalado. Si no lo tiene, puede instalarlo desde [https://nodejs.org/](https://nodejs.org/).

Clone el repositorio Cypress del proyecto:
```bash
git clone https://github.com/pbuitragom/TSDC-Issue-Tracker.git
cd TSDC-Issue-Tracker
```

En este punto, tendrá dos carpetas relevantes para Cypress:

- `cypress`: Pruebas para la versión `ghost v5.72.2`
- `cypress-4.44`: Pruebas para la versión `ghost v4.44`

#### Para la ejecución de las pruebas de la versión `ghost v5.72.2`:

- Asegúrese de tener el servicio de `ghost v5.72.2` en funcionamiento.
- Navegue a la carpeta de pruebas:
  ```bash
  cd cypress
  ```
- Instale las dependencias:
  ```bash
  npm install
  ```
- Ejecute las pruebas:
  ```bash
  npx cypress open
  ```

#### Para la ejecución de las pruebas de la versión `ghost v4.44`:

Nota: Asegúrese de que los archivos `cypress-4.44/a_create_post.feature`, `cypress-4.44/b_update_post.feature`, `cypress-4.44/c_delete_post.feature`, `cypress-4.44/d_create_page.feature` y `cypress-4.44/e_update_page.feature` estén configurados correctamente para apuntar al entorno de prueba. Actualmente, apuntan a una máquina en AWS en la declaración "Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"". Ajuste las URL según sea necesario, ya que la URL proporcionada no estará disponible para terceros.

- Asegúrese de tener el servicio de `ghost v4.44` en funcionamiento.
- Navegue a la carpeta de pruebas:
  ```bash
  cd cypress-4.44
  ```
- Instale las dependencias:
  ```bash
  npm install
  ```
- Ejecute las pruebas:
  ```bash
  npx cypress open
  ```

Después de la ejecución, encontrará las imágenes correspondientes a las capturas de pantalla de referencia para cada versión, escenario y paso definido.


#### Detalles del Informe
- Encabezado con resultadol informe
- Imágenes de Comparación: originales (versión ghots v5.72.2), de comparación (versión ghots v4.44) y de diferencias.
- Análisis: Métricas de comparación, dimensiones, porcentajes de desajuste y tiempos.

![Reporte](https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Funiandes-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!vwqOSlQUMEm1xjJd1NI12ose1AFvZIpGnwnvBiu_FvzrifNfF2ugTJo4rV3r0FGB%2Fitems%2F01YH4BEZSVHVRSDNLNERDYH2ZZAXVMMG5L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5pYW5kZXMtbXkuc2hhcmVwb2ludC5jb21AZmFiZDA0N2MtZmY0OC00OTJhLThiYmItOGY5OGI5ZmI5Y2NhIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcwMDM5NTIwMCIsImV4cCI6IjE3MDA0MTY4MDAiLCJlbmRwb2ludHVybCI6IjNXWDk3VkhzclR5ZkExN3hHSno4aHoxNmtIem1hckM0anlDanFEMFZGekk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOR0U0WlRCaFltWXRNVFExTkMwME9UTXdMV0kxWXpZdE16STFaR1EwWkRJek5XUmgiLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8aS5zaW5uaW5nQHVuaWFuZGVzLmVkdS5jbyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAyYmNhYTVhZjdAbGl2ZS5jb20iLCJzaWQiOiJjZmM4Y2QwOS1kODU3LTQzYTgtOTk4Yy0yZDYzNDEwNGM1ZTMiLCJ0dCI6IjAiLCJpcGFkZHIiOiIxODEuNTUuMTU4LjE1NiIsInNuaWQiOiI2Iiwic3RwIjoidCJ9.0tBlToVlva5ECl-jFKEZeKd-CHTBzjyUEC6PWN29VkI&cTag=%22c%3A%7B21633D55-6DB5-4724-83EB-3905EAC61BAB%7D%2C1%22&encodeFailures=1&width=623&height=489&srcWidth=623&srcHeight=489)

#### Videos del Proyecto
- [Resemble](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EXcnu4wLTgROmponXoCe3aAB46111_vN5HGePolwxKwLfQ?e=Z0OlK1)
- [Ejecución y Reporte](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZf0JKl1d29NhJeouOYBrD8BupGmLeeJa-R2SGSFYDVmgQ?e=VLiGES)

#### Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT
- [Análisis de Resemble.js: Herramienta de Comparación Visual/Pruebas VRT](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Analisis-de--Pros-y-Contras-de-Herramienta-Resemble-Js)


### Herramienta de Regresión Visual con BackstopJS

#### Carpeta de la Herramienta

- **Carpeta:** [backstop](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/backstop)

#### Instrucciones de Uso

#### Configuración Inicial

1. Instalar BackstopJS localmente:
    ```bash
    npm install backstopjs
    ```

2. Configurar BackstopJS con el comando:
    ```bash
    backstop init
    ```

4. Personalizar la configuración en el archivo `backstop.json` según las necesidades de tu proyecto.

#### Hosting Local de Imágenes con HTTP-Server

#### Pre-requisitos
- Asegúrate de tener Node.js instalado desde [nodejs.org](https://nodejs.org/).

#### Pasos

1. **Instalación de http-server:**
   - Abre una terminal o línea de comandos.
   - Instala http-server globalmente usando npm:
     ```bash
     npm install -g http-server
     ```

2. **Organiza tus Imágenes:**
   - Crea una carpeta para almacenar las imágenes que desees hostear, como "mis_imagenes".
   - Coloca todas las imágenes en esta carpeta.

3. **Iniciar el Servidor HTTP:**
   - Abre la terminal y navega a la carpeta de imágenes:
     ```bash
     cd ruta/a/mis_imagenes
     ```
   - Inicia el servidor con el comando:
     ```bash
     http-server
     ```
   - El servidor se iniciará y mostrará las direcciones para acceder a los archivos, generalmente algo como [http://127.0.0.1:8080](http://127.0.0.1:8080).

4. **Acceder a las Imágenes:**
   - Abre un navegador y visita la dirección proporcionada por http-server.
   - Verás un listado de tus imágenes. Haz clic en cualquier imagen para visualizarla.

5. **Detener el Servidor:**
   - Cuando hayas terminado, detén el servidor presionando Ctrl + C en la terminal.

#### Notas
- Para características específicas (CORS, caché, etc.), http-server ofrece opciones de configuración. Consulta la [documentación de http-server](https://www.npmjs.com/package/http-server).



#### Ejecución de Pruebas

#### Desde la línea de comandos:

1. Para realizar una referencia de pantallas:
    ```bash
    backstop reference
    ```

2. Para ejecutar pruebas y comparar pantallas:
    ```bash
    backstop test
    ```

#### Usando NPM Scripts:

Añade los siguientes scripts a tu archivo `package.json`:

```json
"scripts": {
  "reference": "backstop reference",
  "test": "backstop test"
}
```

#### Comparación de Imágenes:
Utilizando BackstopJS, se analizan las imágenes y se almacenan los resultados.

Para más detalles consulte [README Backstop](https://github.com/pbuitragom/TSDC-Issue-Tracker/blob/main/backstop/README.md)  

#### Videos del Proyecto

* [Creación de referencias](https://app.usebubbles.com/4EbGReqJj6Q3FJcTt1Q9jS/untitled?threadId=8Yq8cCK9MU1L3B7QtchgVx)

* [Creación de diferencias](https://app.usebubbles.com/fUPXpQEhnoW6tatuGdemvv/untitled)

#### Análisis de BackstopJS
* [Análisis de BackstopJS: Herramienta de Comparación Visual Pruebas VRT](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/An%C3%A1lisis-de-BackstopJS:-Herramienta-de-Comparaci%C3%B3n-Visual-Pruebas-VRT)


#### Videos Explicativos Generales
- [Configuraciones para kraken](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EbyUksKM_e9DtZHDtbCckUABJOLopTZDSI5bZG5P1bsIfA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=ggIbsm)
- [Resemble](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EXcnu4wLTgROmponXoCe3aAB46111_vN5HGePolwxKwLfQ?e=Z0OlK1)
- [Ejecución y Reporte](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZf0JKl1d29NhJeouOYBrD8BupGmLeeJa-R2SGSFYDVmgQ?e=VLiGES)

* [Creación de referencias BackStop](https://app.usebubbles.com/4EbGReqJj6Q3FJcTt1Q9jS/untitled?threadId=8Yq8cCK9MU1L3B7QtchgVx)

* [Creación de diferencias BackStop](https://app.usebubbles.com/fUPXpQEhnoW6tatuGdemvv/untitled)

------------------
## Semana 7 - Proyecto de Pruebas Automatizadas en GHOST con Kraken y Cypress modificados para utilizar data pools apriori, y Puppeteer automatizados  dinámicos y aleatorios  [WIKI ](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Estrategias-de-Generaci%C3%B3n-de-Datos-en-Pruebas-Automatizadas)



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

Asegúrese de tener Node.js instalado. Si no lo tiene, puede instalarlo desde [https://nodejs.org/](https://nodejs.org/).

Clone el repositorio Cypress del proyecto:
```bash
git clone https://github.com/pbuitragom/TSDC-Issue-Tracker.git
cd TSDC-Issue-Tracker
```

En este punto, tendrá dos carpetas relevantes para Cypress:

- `cypress`: Pruebas para la versión `ghost v5.72.2`
- `cypress-4.44`: Pruebas para la versión `ghost v4.44`

#####  Para la ejecución de las pruebas de la versión `ghost v5.72.2`:

- Asegúrese de tener el servicio de `ghost v5.72.2` en funcionamiento.
- Navegue a la carpeta de pruebas:
  ```bash
  cd cypress
  ```
- Instale las dependencias:
  ```bash
  npm install
  ```
- Ejecute las pruebas:
  ```bash
  npx cypress open
  ```

##### Para la ejecución de las pruebas de la versión `ghost v4.44`:

Nota: Asegúrese de que los archivos `cypress-4.44/a_create_post.feature`, `cypress-4.44/b_update_post.feature`, `cypress-4.44/c_delete_post.feature`, `cypress-4.44/d_create_page.feature` y `cypress-4.44/e_update_page.feature` estén configurados correctamente para apuntar al entorno de prueba. Actualmente, apuntan a una máquina en AWS en la declaración "Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"". Ajuste las URL según sea necesario, ya que la URL proporcionada no estará disponible para terceros.

- Asegúrese de tener el servicio de `ghost v4.44` en funcionamiento.
- Navegue a la carpeta de pruebas:
  ```bash
  cd cypress-4.44
  ```
- Instale las dependencias:
  ```bash
  npm install
  ```
- Ejecute las pruebas:
  ```bash
  npx cypress open
  ```

Después de la ejecución, encontrará las imágenes correspondientes a las capturas de pantalla de referencia para cada versión, escenario y paso definido.


#### Pruebas Automatizadas para Ghost 5.74.1 con Puppeteer y Estrategia de Datos Faker 

##### [README Puppeteer](https://github.com/pbuitragom/TSDC-Issue-Tracker/blob/main/puppeteer/README.md)

##### Descripción General
Este proyecto presenta pruebas automatizadas para Ghost v5.74.1, utilizando Puppeteer para la interacción con el navegador y Faker.js para la generación de datos. Las pruebas cubren funcionalidades clave de Ghost como login, pages, post, member y tag.

##### Instalación de Ghost
Instala Ghost siguiendo la [Guía de Instalación de Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#2) y configura tu sitio localmente en [http://localhost:2369/ghost/#/setup](http://localhost:2369/ghost/#/setup).

##### Instalación de Puppeteer
Para iniciar las pruebas automatizadas:
1. Asegúrate de tener Node.js y npm instalados.
2. Clona el repositorio de pruebas.
3. Navega al directorio del proyecto y ejecuta `npm install`, `npm install puppeteer` y `npm install @faker-js/faker`.

##### Estructura de Directorios
- `node_modules/`: Dependencias del proyecto.
- `pages/`: Scripts de páginas para las pruebas.
- `tests/`: Scripts de pruebas automatizadas.

##### Integración de Escenarios con Estrategias de Generación de Datos
Las pruebas combinan datos a-priori y dinámicos/aleatorios para validar diferentes escenarios en Ghost.

##### Pruebas Implementadas
- `loginTests.js`: Inicio de sesión con credenciales correctas.
- `loginTestsInvalid.js`: Inicio de sesión con credenciales incorrectas.
- `memberInvalid.js`: Creación de miembro con email inválido.
- `memberNew.js`: Adición de nuevo miembro.
- `pageError.js`: Creación de página con título excesivo.
- `postError.js`: Publicación de post con errores.
- `tagsTests.js`: Creación de tags con nombres inválidos.

Ejecuta pruebas con `node tests/<nombre-del-test>.js`.

Ejemplo: `node tests/tagsTests.js`

##### Resultados de las Pruebas
Los scripts proveen información detallada sobre el éxito o fallo de las pruebas. Las capturas de pantalla documentan errores encontrados.


### - [WIKI semana 7](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Estrategias-de-Generaci%C3%B3n-de-Datos-en-Pruebas-Automatizadas)

### - [Listado Escenarios](https://uniandes-my.sharepoint.com/:x:/g/personal/p_buitragom_uniandes_edu_co/ETOxuBgdZuVJq8v1D5EW0gQBbxNuO-iJKiDRC1LRxTCJ3g?e=uMdnh7)

### - [Codigo Escenarios](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main)

- [Código Escenarios Kraken](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/kraken/features)
- [Código Escenarios Cypress]()
- [Código Escenarios Puppeteer](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/puppeteer)

### - [Videos](https://github.com/pbuitragom/TSDC-Issue-Tracker/wiki/Estrategias-de-Generaci%C3%B3n-de-Datos-en-Pruebas-Automatizadas)

#### Kraken

- [ Video Contexto General Kraken](https://uniandes-my.sharepoint.com/personal/p_buitragom_uniandes_edu_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Fp%5Fbuitragom%5Funiandes%5Fedu%5Fco%2FDocuments%2FPruebasAutomatizadas%20%2D%20TrabajoEnGrupo%2FEntrega7%2FContextoGeneral%2Emov&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview)

- [Video Escenarios de Pruebas Ejecución Kraken](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EbXupyxiasVMkfsftprYQ7gBkHFpZCSeMPfqFMqzmAriew?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=ZHvIq3)

#### Cypress

- [Cypress](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/ERr2-hautqJOhUExJDqlSmABBT-tihLqs-kmX6uN7b5xsg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=gvrtvh)


#### Puppeteer

- [Video Pruebas Puppeteer](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZEu6t5RjvBFnNkPUpzucSMBKzd120RfQR0u1C4P5CjsuA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=fKhZgO)




### Reporte de Incidencias
- [TSDC-Issue-Tracker](https://github.com/pbuitragom/TSDC-Issue-Tracker/issues)
