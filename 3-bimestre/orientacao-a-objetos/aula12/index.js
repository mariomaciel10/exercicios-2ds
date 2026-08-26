class Usuario {
   static quantidade = 0 

   constructor (nome) {
      this.nome = nome

      Usuario.quantidade++
   }
}

const usuario1 = new Usuario("Ana")
const usuario2 = new Usuario("Carlos")
const usuario3 = new Usuario("Maria")

console.log(usuario1.quantidade)
console.log(usuario2.quantidade)
console.log(usuario3.quantidade)