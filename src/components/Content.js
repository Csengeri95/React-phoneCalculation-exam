import { Route, Routes, useLocation } from "react-router-dom"



export default function Content ({route}){

    const location=useLocation()

    return(
        <Routes location={location} key={location.pathname}>
            {route.map(route=>(
                <Route key={route.path} path={route.path} element={route.element}  />
            ))}
        </Routes>
    )
}