const Task = require('../models/tasks')

//Se valida que exista el id
const checkIdExistence = async (id_task = '') => {

    const existeId = await Task.findOne({ where: { id_task } })

    // Si no existe se manda el error
    if (!existeId) {
        throw new Error(`Id no encontrado`)
    }
}

module.exports = {
    checkIdExistence
}