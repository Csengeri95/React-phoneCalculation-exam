import "../styles/Footer.css"

const config = require("../../package.json")
export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-inner">
                <h3>Minden jog fenntartva: SufniGSM &copy; {config.year} </h3>
                <h4>Készítő: {config.creator} </h4>
            </div>
        </div>
    )
}