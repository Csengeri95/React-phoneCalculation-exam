import "../styles/Logo.css"


const config = require("../../package.json")

export default function Logo(props) {

    return (
        <div className="logo">
            <h2>{config.title}</h2>
        </div>
    )
}