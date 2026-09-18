const Curso = require("./Curso")

class Gravado extends Curso {
    constructor(titulo, cargaHoraria) {
        super(titulo, cargaHoraria)
        this.registros = []
    }
    descricao() {
        return "Curso gravado disponível"
    }
    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}
module.exports = Gravado