
const express = require("express")

const app = express()

const routerPrincipal = require("./routes")

app.use("/api", routerPrincipal)

app.use((req, res) => {
    res.status(404).json({
        mensagem: "Rota não encontrada"
    })
})

module.exports = app

