import Painel from "./Painel";

export default function App() {
  return (
    <>
      <Painel>
        <h2>Bem-vindo</h2>
        <p>Este é o primeiro painel.</p>
      </Painel>

      <Painel>
        <button>Clique aqui</button>
      </Painel>

      <Painel>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Painel>
    </>
  );
}