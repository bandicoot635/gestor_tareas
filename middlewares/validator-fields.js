const { validationResult } = require('express-validator');

const validatorFields = (req, res, next) => {

    //Express-validator valida que no haya errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    //Si no hay errores continua
    next()
}

module.exports = {
    validatorFields
}