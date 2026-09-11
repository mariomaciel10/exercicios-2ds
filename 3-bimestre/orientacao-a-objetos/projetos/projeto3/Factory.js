const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================

class Factory {

static criar(tipo, Notificacao) {

        if (tipo === "Email") {
            return new Factory(Email)
        }

        if (tipo === "SMS") {
            return new Factory(SMS)
        }

        if (tipo === "App") {
            return new Factory(App)
        }

        throw new Error("Tipo de usuário inválido")
    }
}
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory