import { Calendar, BriefcaseBusiness } from 'lucide-react';

export default function Profile({ nome, idade, profissao, foto }) {
  return(
    <>
      <div className="container-pessoas">
        <div className="pessoa-apresentacao">
          <img src={foto} />
          <h1>{nome}</h1>
          <div className="linha"></div>
        </div>

        <div className="informacoes">
          <p
            style={{fontSize: "16px"}}
          >
            <Calendar
              style={{color: "blue", marginRight: "10px"}}
            />
            <strong>Idade:</strong> {idade} anos
          </p>

          <p
            style={{fontSize: "16px"}}
          >
            <BriefcaseBusiness 
              style={{color: "blue", marginRight: "10px"}}
            />
            <strong>Profissão:</strong> {profissao}
          </p>
        </div>
      </div>
    </>
  )
}