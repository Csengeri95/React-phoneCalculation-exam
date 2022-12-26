import "../styles/PageNotFound.css"
import { Link } from "react-router-dom"

export default function PageNotFound(props) {
    return (
        <div className="pageNotFound">
            <h2>404- A keresett oldal nem található !</h2>
            <h3>Bizonyosodjon meg arról, hogy megfelelően írta-e be a weboldal címét !</h3>
            <Link to="/">Vissza a Főoldalra</Link>
        </div>
    )
}