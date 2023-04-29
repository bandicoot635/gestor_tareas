
// Valida que el estatus sea uno correcto
const validatorStatus = (...resto) => {
    return (req, res, next) => {

        const { completion_status } = req.body

        if (completion_status) {
            if (!resto.includes(completion_status.toUpperCase())) {
                return res.status(400).json({
                    msg: `El estatus "${completion_status}" no es valido`
                })
            }
        }

        next()
    }
}

module.exports = {
    validatorStatus
}