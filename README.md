# Gestor Tareas
Este es un proyecto backend en Node.js con MySQL y Express.

## Instalación
1. Clona el repositorio a tu máquina local.
2. Ejecuta `npm install` para instalar todas las dependencias.
3. Crea la base de datos ejecutando el script `create_database.sql` que se encuentra en la ruta `database/scripts/create_database.sql`.

## Configuración
Para configurar la conexión a la base de datos, debes modificar los valores correspondientes en el archivo `connection.js`, que se encuentra en la ruta `database/connection.js`.

## Ejecución
Para iniciar el servidor, utiliza el comando: 
`npm start`
El servidor se ejecutará en `http://localhost:8090`.

## Dependencias
Este proyecto depende de las siguientes librerías:

- express: Framework para crear aplicaciones web en Node.js
- cors: Librería que permite el acceso a recursos de otro dominio.
- dotenv: Módulo para cargar variables de entorno desde un archivo .env
- express-validator: Librería que valida datos de entrada en las rutas de Express.
- mysql2: Librería para conectarse a bases de datos MySQL.
- sequelize: ORM de Node.js que se utiliza para interactuar con bases de datos relacionales.
- uuid: Librería que generar identificadores únicos.

## Documentación de la API
Puedes encontrar la documentación de la API en el siguiente enlace:

`https://documenter.getpostman.com/view/19972795/2s93eSZF9z`