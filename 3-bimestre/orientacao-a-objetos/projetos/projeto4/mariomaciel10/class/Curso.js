class Curso {
    #titulo
    #cargaHoraria

    constructor(titulo, cargaHoraria) {
        this.#titulo = titulo
        this.#cargaHoraria = cargaHoraria
    }
    get titulo() {
        return this.#titulo
    }
    get cargaHoraria() {
        return this.#cargaHoraria
    }
    descricao() {
        return "Curso publicado na plataforma"
    }
}

module.exports = Curso