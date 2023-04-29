
//Validar que vengan las propiedades a actulizar
const notEmptyProperties = (req, res, next) => {

    const { id_task, ...resto } = req.body

    // Si no hay nada mandamos un error.
    if (Object.keys(resto).length === 0) {
        return res.status(400).json({
            msg: `No se recibieron propiedades a actulizar`
        })
    }

    next()

}

module.exports = { notEmptyProperties }