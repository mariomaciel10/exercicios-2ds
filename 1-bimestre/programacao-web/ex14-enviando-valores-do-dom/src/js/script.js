const nome = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")

botaoMostrar.addEventListener("click", () =>{
    resultado.textContent = `Olá, ${inputNome.value}`
})