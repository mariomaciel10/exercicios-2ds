const Curso = require("./Curso")

class Workshop extends Curso {
    descricao() {
        return "Workshop disponível"
    }
}
module.exports = Workshop
