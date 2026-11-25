const express = require("express")
const router = express.Router()

const validarHorario = require("../middlewares/validarHorario")

let horarios = [
    { id: 1, cliente: "Ana", corte: "Social", valor: 35, situacao: "faltou" },
    { id: 2, cliente: "Bruno", corte: "Degrade", valor: 45, situacao: "atendido" },
    { id: 3, cliente: "Carla", corte: "Navalhado", valor: 55, situacao: "atendido" }
]

// RF01 - Listar horarios
router.get("/", (req, res) => {
    const { situacao, valorMin } = req.query

    let resultado = horarios

    if (situacao) {
        resultado = resultado.filter(h => h.situacao === situacao)
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(h => h.valor >= Number(valorMin))
    }

    res.status(200).json(resultado)
})

// RF02 - Buscar horario por ID
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const horario = horarios.find(h => h.id === id)

    if (!horario) {
        const erro = new Error("Horario nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(horario)
})

// RF03 - Criar horario
router.post("/", validarHorario, (req, res) => {
    const { cliente, corte, valor } = req.body

    const novoHorario = {
        id: Math.max(...horarios.map(h => h.id)) + 1,
        cliente,
        corte,
        valor,
        situacao: "marcado"
    }

    horarios.push(novoHorario)

    res.status(201).json({
        mensagem: "Registro de horario criado"
    })
})

module.exports = router