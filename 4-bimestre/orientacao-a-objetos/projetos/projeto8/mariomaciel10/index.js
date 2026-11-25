
const repositorio = require("./repositorio")

async function executar() {


    await repositorio.salvar({
        id: 1,
        motorista: "Ana",
        pacote: "Simples",
        valor: 35,
        situacao: "na fila"
    })

   
    console.log("Lavagens:")
    console.log(await repositorio.listar())

    
    const atualizada = await repositorio.atualizar(1, {
        situacao: "pronta"
    });

    console.log("Atualizada:", atualizada)


    const removida = await repositorio.remover(1)

    console.log("Foi removida?", removida)
}
executar()
