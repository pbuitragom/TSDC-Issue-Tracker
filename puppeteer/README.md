# Pruebas Automatizadas para Ghost 5.74.1 con Puppeteer y estrategia de datos Faker.

## Descripción General
Este proyecto contiene un conjunto de pruebas automatizadas para la aplicación de gestión de contenidos Ghost versión 5.74.1. la cual se instalo de acuerdo a  [Guía de Instalación de Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#2).  Se emplea Puppeteer para interactuar con el navegador y Faker.js para generar datos dinámicos de prueba. Las pruebas se basan en la documentación oficial de Ghost de las funcionalidades login, pages, post, member, y tag. Estas pruebas se realizan siguiento el tutorial de [Puppeteer](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/puppeteer-tutorial/#1) proporcionado por The Software Design Lab  y consultas adicionales se encuentra en el [Repositorio](https://github.com/puppeteer/puppeteer)

Previamente instale Ghost como se indica en la guía: [Guía de Instalación de Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#2)

La versión que se debe utilizar es Ghost v5.74.1

Una vez instalado Ghost:

- Configurar la instalación local en [http://localhost:2369/ghost/#/setup](http://localhost:2369/ghost/#/setup)

![Configuración de Ghost](https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/a71f9e55-055c-4bc7-8b4c-0b50637e894b)

Configurando los campos de la imagen de arriba así:
- Site title: MISO Entrega 5
- Full Name: Pepito Perez
- Email address: pmbtgun@gmail.com
- Password: QAZwsx01@2023

En este punto tendrá el sitio así:

![Sitio configurado](https://github.com/pbuitragom/TSDC-Issue-Tracker/assets/142738381/1bae650f-338b-490a-bd66-95176aaf5333)










## Instalación de Puppeteer
Sigue las recomendaciones para la instalación de [Puppeteer](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/puppeteer-tutorial/#1)

Para comenzar con las pruebas automatizadas:

1. Asegúrate de tener Node.js y npm instalados. Para el desarrollo de estas pruebas de utilizo `nvm use v18.12.1` y `npm 8.19.2`
2. Clona el repositorio de pruebas `git clone https://github.com/pbuitragom/TSDC-Issue-Tracker.git` .
3. Abre la terminal y navega al directorio: `cd TSDC-Issue-Tracker`.
4. Cambiar al directorio de pruebas de resemble: `cd puppeteer`
5.  Ejecuta 
- `npm install` 
- `npm install puppeteer`
- `npm install @faker-js/faker `

para instalar Puppeteer junto con otras dependencias.
Esto agregará las líneas necesarias a su archivo package.json para declarar Puppeteer como dependencia del proyecto, creará un archivo package-lock.json e instalará Puppeteer en el directorio node_modules.

Si requiere consulta especifica consulte para el tutorial [faker](https://misovirtual.virtual.uniandes.edu.co/codelabs/faker-lib-data-generation/index.html?index=..%2F..index#2)

6. Para ejecutar una prueba, utiliza el comando:
- ```node tests/<nombre-del-test>.js ```

## Estructura de Directorios

La estructura de las pruebas se organiza de la siguiente manera:

- `node_modules/`: Contiene todas las dependencias del proyecto instaladas a través de npm.
- `pages/`: Almacena los scripts de las páginas que se usan para las pruebas, con clases para cada una.
- `tests/`: Directorio que contiene los scripts de pruebas automatizadas para diferentes funcionalidades.



### Integración de Escenarios con Estrategias de Generación de Datos

Las pruebas se diseñaron integrando estrategias de generación de datos para simular una amplia gama de escenarios posibles. A continuación se detalla la integración:

#### Estrategia de Datos A-Priori
Se predefinen conjuntos de datos válidos e inválidos en los scripts de pruebas para validar casos conocidos y gestionar errores esperados.

#### Estrategia de Datos Dinámicos y Aleatorios
Faker.js se utiliza para generar datos dinámicos y aleatorios, lo que permite simular comportamientos de usuarios y casos de uso variados y realistas.

#### Integración en las Pruebas
Cada script de prueba utiliza estas estrategias para verificar la funcionalidad correspondiente en Ghost. Por ejemplo, loginTestsInvalid.js prueba el inicio de sesión con credenciales aleatorias inválidas, mientras que memberNew.js utiliza datos válidos generados para crear un nuevo miembro.


## Pruebas Implementadas en tests
Las pruebas están organizadas dentro de la carpeta tests. Cada archivo de prueba se enfoca en un aspecto específico de la aplicación Ghost:

- `loginTests.js` - Verifica el inicio de sesión con credenciales correctas.
- `loginTestsInvalid.js` - Prueba el inicio de sesión con credenciales incorrectas.
- `memberInvalid.js` - Crea un miembro con un email inválido.
- `memberNew.js` - Añade un nuevo miembro con datos válidos.
- `pageError.js` - Intenta crear una página con un título que excede el límite permitido.
- `postError.js` - Trata de publicar un post con errores.
- `tagsTests.js` - Prueba la creación de tags con nombres no permitidos.

Para ejecutar una prueba, utiliza el comando:
- ```node tests/<nombre-del-test>.js ```

Ejemplo: 
- ```node tests/loginTests.js```
- ```node tests/loginTestsInvalid.js```
- ```node tests/memberInvalid.js```
- ```node tests/memberNew.js```
- ```node tests/pageError.js```
- ```node tests/postError.js```
- ```node tests/tagsTests.js```

### Resultados de las Pruebas 
Cada script de prueba proporciona logs en la consola que detallan el éxito o fallo de las acciones ejecutadas. Las capturas de pantalla ayudan a documentar y revisar los errores encontrados durante las pruebas.

Los resultados de las pruebas deben interpretarse de la siguiente manera:

Pruebas de inicio de sesión: Los resultados indican si la autenticación y el redireccionamiento funcionan como se espera.
Pruebas de miembros: Validan la gestión de errores y la creación de nuevos miembros en el sistema.
Pruebas de páginas y posts: Verifican la validación y publicación de contenido nuevo, así como el manejo adecuado de errores en los títulos.



### Código 
- [Código Escenarios Puppeteer](https://github.com/pbuitragom/TSDC-Issue-Tracker/tree/main/puppeteer/tests)

### Videos 

- [Video Pruebas Puppeteer](https://uniandes-my.sharepoint.com/:v:/g/personal/p_buitragom_uniandes_edu_co/EZEu6t5RjvBFnNkPUpzucSMBKzd120RfQR0u1C4P5CjsuA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=fKhZgO)

### Reporte de Incidencias
- [TSDC-Issue-Tracker](https://github.com/pbuitragom/TSDC-Issue-Tracker/issues)
