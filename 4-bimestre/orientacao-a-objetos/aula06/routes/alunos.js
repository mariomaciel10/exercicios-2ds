const express = require('express')
const router = express.Router()

// Array de alunos
const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Bruno", nota: 6 }
]


router.get('/', (req, res) => {
    res.json(alunos)
})

// Listar aluno
router.get('/aprovados', (req, res) => {
    const aprovados = alunos.filter(aluno => aluno.nota >= 7)

    res.json(aprovados)
})
module.exports = router
