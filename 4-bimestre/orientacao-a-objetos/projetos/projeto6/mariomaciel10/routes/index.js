const express = require("express")
const router = express.Router()

const sessoesRouter = require("./sessoes")
const clientesRouter = require("./clientes")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Cinema"
    })
})

router.use("/sessoes", sessoesRouter)
router.use("/clientes", clientesRouter)

module.exports = router
