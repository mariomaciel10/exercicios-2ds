export default function Perfil() {

        let usuario = {
  nome: "Mario Pietro",
  idade: 16,
  cidade: "Genas"
};

return(
<>
  <p>nome: {usuario.nome}</p>,
        <p>profissão: {usuario.profissao}</p>
        <p>idade: {usuario.idade}</p>
        

        <p>
        {usuario.idade < 18 ?(
        "Você é maior de idade."
        ):("Você é menor de idade.")
        };
    </p>
   </>
    )
}