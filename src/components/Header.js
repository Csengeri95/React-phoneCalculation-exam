import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"


import Logo from "./Logo"


export default function Header({ menu }) {
   


    const location = useLocation();
    return (
        <div className="header">

            <div className="menu-box-left">
                <Logo />
            </div>

            {menu.filter(a => a.status === true).map(menu => {
                 let classes = "menu-box-right";
                if(menu.path===location.pathname){
                    classes="menu-box-right-active"
                }

                return (
                    <div key={menu.name} className={classes}>

                        <Link to={menu.path}>{menu.name}</Link>
                    </div>)

            })}
        </div>
    )
}