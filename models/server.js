const express = require('express')
const cors = require('cors')
const sequelize = require('../database/connection')

class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT

        //Rutas
        this.tasks = '/api/tasks'

        this.middlewares()

        //Conectar base de datos 
        this.dbConnection()

        this.routes()

    }


    async dbConnection() {

        try {
            await sequelize.authenticate()
            console.log('DataBase online.');
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura del body
        this.app.use(express.json())

    }

    routes() {
        this.app.use(this.tasks, require('../routes/tasks'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;