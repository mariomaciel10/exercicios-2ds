const Gravado = require("./Gravado")
const AoVivo = require("./AoVivo")
const Workshop = require("./Workshop")
class CursoFactory {
    static criar(tipo, titulo, cargaHoraria) {
        switch (tipo) {
            case "gravado":
                return new Gravado(titulo, cargaHoraria)

            case "aovivo":
                return new AoVivo(titulo, cargaHoraria)

            case "workshop":
                return new Workshop(titulo, cargaHoraria)

            default:
                throw new Error("Tipo de curso inválido")
        }
    }
}

module.exports = CursoFactory
