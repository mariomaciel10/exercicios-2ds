// CRIE SUA SOLUÇÃO ABAIXO ================
class Notificacao{           

    constructor(mensagem) {
        this.mensagem = mensagem
    }

    enviar(){
        return this.mensagem
    }

}

class Email extends Notificacao {
Notificacao (){
    return "E-mail enviado: MENSAGEM"
    }
}    

class SMS {
Notificacao (){
    return "SMS enviado: MENSAGEM"
    }
}

class App {
Notificacao (){
    return "Notificação no aplicativo: MENSAGEM"
    }
}


// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Notificacao
module.exports.Email = Email
module.exports.SMS = SMS
module.exports.App = App