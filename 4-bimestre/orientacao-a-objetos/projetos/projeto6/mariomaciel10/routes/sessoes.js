const express = require("express")

const router = express.Router()

const sessoes = [
    { id: 1, filme: "Duna", formato: "2D", preco: 25, disponivel: true },
    { id: 2, filme: "Interestelar", formato: "3D", preco: 32, disponivel: true },
    { id: 3, filme: "Matrix", formato: "2D", preco: 22, disponivel: false }
]

router.get("/", (req, res) => {
    res.status(200).json(sessoes)
})

router.get("/disponiveis", (req, res) => {
    const sessoesDisponiveis = sessoes.filter(sessao => sessao.disponivel === true)

    res.status(200).json(sessoesDisponiveis)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: sessoes.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de sessao realizado"
    })
})

module.exports = router
