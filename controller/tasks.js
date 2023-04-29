const { response, request } = require('express')
const Task = require('../models/tasks')

const { v4: uuidv4 } = require('uuid');

const tasksGet = async (req = request, res = response) => {

    const { id_task } = req.query

    try {

        if (id_task) {

            // Realiza busqueda de una sola tarea por id
            const task = await Task.findOne({ where: { id_task } })

            // Regresa información de una tarea.
            return res.status(200).json({
                msg: 'Consulta exitosa',
                task
            })
        }

        //Busca todas las tareas en la base de datos.
        const tasks = await Task.findAll()

        // Regresa información breve de todas las tareas.
        res.status(200).json({
            msg: 'Consulta exitosa',
            tasks
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            msg: 'Error en el servidor'
        })

    }
}
const tasksPost = async (req = request, res = response) => {

    const {
        title,
        description,
        completion_status,
        due_date,
        comments,
        tags
    } = req.body

    try {

        //Genera un identificador unico para el usuario (Identifica al usuario).
        const assignee = uuidv4();

        //Se crea una nueva instancia del modelo Task (Se crea una nueva tarea).
        const task = new Task({
            title,
            description,
            completion_status,
            due_date,
            comments,
            assignee,
            tags
        })

        //Guarda la instancia creada.
        await task.save()

        res.status(200).json({
            msg: 'Tarea creada exitosamente',
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor',
            error: error.message
        })

    }
}

const tasksPut = async (req = request, res = response) => {

    const { id_task, ...resto } = req.body

    try {

        //Editar una tarea.
        await Task.update({
            ...resto
        }, {
            where: { id_task }
        })

        res.status(200).json({
            msg: `Campos actulizados correctamente`,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            msg: 'Error en el servidor'
        })
    }
}

const tasksDelete = async (req = request, res = response) => {

    const { id_task } = req.body

    try {

        // Elimina una tarea.
        await Task.destroy({ where: { id_task } });

        // Regresa la informacion de la tarea eliminada.
        res.status(200).json({
            msg: `Tarea ${id_task} eliminada`,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            msg: 'Error en el servidor'
        })
    }
}


module.exports = {
    tasksGet,
    tasksPost,
    tasksPut,
    tasksDelete
}