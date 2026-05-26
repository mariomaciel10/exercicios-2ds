import Profile from "./components/Profile"
import Header from "./components/Pages/Header"
import Footer from "./components/Pages/Footer"
import { UsersRound } from 'lucide-react';
import "./styles/ProfileCSS.css"

export default function App() {
  return(
      <div className="container">
        <Header />

        <div className="apresentaca">
          <h1>Usuários do Sistema</h1>
          <p>Conheça os membros da nossa equipe</p>
        </div>
        
        <div className="card-container">
          <div className="profile-card">
            <Profile 
              foto={"https://randomuser.me/api/portraits/women/27.jpg"}
              nome={"Mariana Silva"}
              idade={29}
              profissao={"Desenvolvedora Frontend"}
            />
            <div className="colaboradoes">
              <UsersRound 
              style={{color: "blue"}}
              />
              <p style={{color: "blue", fontSize: "23px"}}>Colaboradores</p>
            </div>
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://randomuser.me/api/portraits/men/79.jpg"}
              nome={"João Santos"}
              idade={35}
              profissao={"Designer UX/UI"}
            />
            <div className="colaboradoes">
              <UsersRound 
              style={{color: "blue"}}
              />
              <p style={{color: "blue", fontSize: "23px"}}>Colaboradores</p>
            </div>
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://randomuser.me/api/portraits/men/91.jpg"}
              nome={"Carlos Alberto"}
              idade={41}
              profissao={"Gerente de Projetos"}
            />
            <div className="colaboradoes">
              <UsersRound 
              style={{color: "blue"}}
              />
              <p style={{color: "blue", fontSize: "23px"}}>Colaboradores</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}