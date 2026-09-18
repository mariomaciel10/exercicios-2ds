const CursoFactory = require("./class/CursoFactory")
const Modulo = require("./class/Modulo")
const Trilha = require("./class/Trilha")
const Certificado = require("./class/Certificado")

// Criando cursos através da Factory
const cursoGravado = CursoFactory.criar(
    "gravado",
    "POO na prática",
    40
)

const cursoAoVivo = CursoFactory.criar(
    "aovivo",
    "Introdução",
    8
)

const workshop = CursoFactory.criar(
    "workshop",
    "Avançado",
    12
)

// Criando módulos
const modulo1 = new Modulo("Introdução", 8)
const modulo2 = new Modulo("Avançado", 12)

// Criando uma trilha
const trilha = new Trilha("Trilha Backend")

trilha.adicionarCategoria(modulo1)
trilha.adicionarCategoria(modulo2)

trilha.adicionarMembro(cursoGravado)

// Criando certificados
const certificado1 = new Certificado(9, modulo1)
const certificado2 = new Certificado(8.5, modulo2)

cursoGravado.adicionarRegistro(certificado1)
cursoGravado.adicionarRegistro(certificado2)

// Exibindo informações
console.log(cursoGravado.titulo)
console.log(cursoGravado.cargaHoraria)
console.log(cursoGravado.descricao())

console.log(cursoAoVivo.descricao())
console.log(workshop.descricao())

console.log(trilha)
console.log(cursoGravado.registros)
