import { useState } from "react";

export default function FormularioMensagem() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem(event) {
    event.preventDefault();

    alert(
      `Nome: ${nome}\nMensagem: ${mensagem}`
    );

    setNome("");
    setMensagem("");
  }

  return (
    <form onSubmit={enviarMensagem}>
      <h2>Formulário de Mensagem</h2>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
      />

      <textarea
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChange={(e) =>
          setMensagem(e.target.value)
        }
      />

      <button type="submit">
        Enviar Mensagem
      </button>
    </form>
  );
}