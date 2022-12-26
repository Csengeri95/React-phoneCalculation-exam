import "../styles/Home.css"

import Image2 from "../images/home2.jpg"


export default function Home (props){
    return(
        <div className="home" style={{backgroundImage:`url(${Image2})`}}>
            <h1>Üdvözöljük a SufniGSM weboldalán !</h1>

            <h2>Honlapokun ajánlott árat kaphat készülékéről a megadott tulajdonságok alapján !  </h2>
        </div>
    )
}