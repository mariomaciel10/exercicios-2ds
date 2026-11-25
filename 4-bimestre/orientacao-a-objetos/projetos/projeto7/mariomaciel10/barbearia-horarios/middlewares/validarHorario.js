function validarHorario(req, res, next) {
    const { cliente, corte, valor } = req.body

    if (!cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    if (!corte) {
        return res.status(400).json({
            erro: "O campo corte e obrigatorio"
        })
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    if (valor <= 0) {
        return res.status(400).json({
            erro: "O campo valor deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarHorario