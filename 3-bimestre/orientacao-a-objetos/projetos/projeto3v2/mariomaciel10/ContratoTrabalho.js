// CRIE SUA SOLUÇÃO ABAIXO ================

class ContratoTrabalho {

    constructor(funcionario) {
        this.funcionario = funcionario
    }
    
}

class Clt extends ContratoTrabalho {

    emitir() {
        return `Contrato CLT emitido para: ${this.funcionario}`
    }

}

class Pj extends ContratoTrabalho {
    
    emitir() {
        return `Contrato PJ emitido para: ${this.funcionario}`
    }

}

class Estagio extends ContratoTrabalho {

    emitir() {
        return `Contrato de estágio emitido para: ${this.funcionario}`
    }

}
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = ContratoTrabalho
module.exports.Clt = Clt
module.exports.Pj = Pj
module.exports.Estagio = Estagio