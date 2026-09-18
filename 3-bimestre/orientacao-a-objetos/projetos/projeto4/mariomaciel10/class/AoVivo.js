const Curso = require("./Curso")

class AoVivo extends Curso {
    descricao() {
        return "Curso ao vivo disponível"
    }
}
module.exports = AoVivo
