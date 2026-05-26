import { User, UsersRound } from 'lucide-react'
import "../../styles/HeaderCSS.css"    

export default function Header() {
    return(
        <div className="header-conteiner"> 
            <div className="left">
                <UsersRound />
                <h1>TechVision</h1>
            </div>

            <div className="right">
                <User />
                <h1>Sistema Interno</h1>
            </div>
        </div>
    )
}