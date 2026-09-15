const ContratoTrabalho = require("./ContratoTrabalho")
// CRIE SUA SOLUÇÃO ABAIXO ================

const Clt = ContratoTrabalho.Clt
const Pj = ContratoTrabalho.Pj
const Estagio = ContratoTrabalho.Estagio

class Factory {
  
    static criar(tipo, funcionario) {

            if (tipo === "clt") {
                return new ContratoTrabalho.Clt(funcionario)
            }

            if (tipo === "pj") {
                return new ContratoTrabalho.Pj(funcionario)
            }
            
            if (tipo === "estagio") {
                return new ContratoTrabalho.Estagio(funcionario)
            }

                throw new Error("Tipo de contrato inválido")
        }
    }

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory