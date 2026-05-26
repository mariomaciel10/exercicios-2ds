import "./style.css"

export default function Botao({ texto, ...rest }){
    <button className="botao" {...rest}>
      {texto}
    </button>
}