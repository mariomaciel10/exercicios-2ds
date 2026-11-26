
const fs = require("fs").promises

const ARQUIVO = process.env.ARQUIVO_LAVAGENS || "lavagens.json"


async function listar() {
    try {
        const dados = await fs.readFile(ARQUIVO, "utf8")
        return JSON.parse(dados)

    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}


async function salvar(lavagem) {
    const lista = await listar()

    lista.push(lavagem)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2)
    )

    return lavagem
}


async function atualizar(id, dados) {
    const lista = await listar()

    const indice = lista.findIndex(
        lavagem => lavagem.id === id
    )

    if (indice === -1) {
        return null
    }

    lista[indice] = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    }

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2)
    )

    return lista[indice]
}


async function remover(id) {
    const lista = await listar()

    const indice = lista.findIndex(
        lavagem => lavagem.id === id
    )

    if (indice === -1) {
        return false
    }

    lista.splice(indice, 1)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2)
    )
    return true
}


module.exports = {
    listar,
    salvar,
    atualizar,
    remover
}
