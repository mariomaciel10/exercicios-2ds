const express = require("express")
const app = express()

const horariosRouter = require("./routes/horarios")

// Permite receber JSON no body
app.use(express.json())

// Rotas de horarios
app.use("/horarios", horariosRouter)

// Tratamento de rota inexistente
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

// Middleware global de erros
app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app