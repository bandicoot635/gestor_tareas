const { Router } = require('express');
const { tasksGet, tasksPost, tasksPut, tasksDelete } = require('../controller/tasks')
const router = Router();

//Middlewares
const { check } = require('express-validator');
const { validatorFields } = require('../middlewares/validator-fields');
const { validatorStatus } = require('../middlewares/validator-status');
const { notEmptyProperties } = require('../middlewares/validator-task');
const { checkIdExistence } = require('../helpers/validation-db');


//Endpoint para Obtener las tareas
router.get('/', [
    check('id_task').custom(checkIdExistence).optional({ checkFalsy: true }),
    validatorFields
], tasksGet)

//Endpoint para Crear nuevas tareas
router.post('/', [
    check('title', 'El Titulo es obligario').notEmpty(),
    check('description', 'La Descripción es obligaria').notEmpty(),
    check('completion_status', 'El Estatus es obligario').notEmpty(),
    check('due_date', 'La fecha de entrega es obligaria').notEmpty(),
    check('due_date', 'La fecha debe tener este formato YYYY-MM-DD').isDate({ format: 'YYYY-MM-DD' }),
    validatorStatus('EN PROCESO', 'TERMINADO', 'POR INICIAR'),
    validatorFields
], tasksPost)

//Endpoint para Actulizar tareas
router.put('/', [
    notEmptyProperties,
    check('id_task').custom(checkIdExistence),
    check('due_date').optional({ checkFalsy: true }).isDate({ format: 'YYYY-MM-DD' }).withMessage('La fecha debe tener este formato YYYY-MM-DD'),
    validatorStatus('EN PROCESO', 'TERMINADO', 'POR INICIAR'),
    validatorFields
], tasksPut)

//Endpoint para Eliminar tareas
router.delete('/', [
    check('id_task').custom(checkIdExistence),
    validatorFields
], tasksDelete)


module.exports = router; 