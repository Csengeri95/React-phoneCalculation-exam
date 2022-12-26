import { useContext } from "react"
import { GetproductsContext } from "../contexts/GetproductsContext"
import { Link } from "react-router-dom"
import "../styles/Products.css"

const products = require("../datasource/phones_schema.json")





export default function Products(props) {

    const { getProducts, setGetProducts } = useContext(GetproductsContext)




    return (
        <div className="products">
            <h1>Termékek</h1>
            <h2>Kattintson a választani kívánt termékre ! Majd lépjen át a <Link to="/calculation">Calculation oldalra</Link> !</h2>

            <div className="products-grid">
                {products.map((actual,index) => {
                    let classes = "products-box"

                    if (getProducts.id == actual.id) {
                        classes = "products-box-active"
                    }

                    return (
                        <div key={index} className={classes} onClick={() => setGetProducts(actual)}>
                            <h3>Telefon gyártója: {actual.brand}</h3>
                            <h4>Model: {actual.model}</h4>
                            <h4>Operációs rendszer: {actual.os}</h4>
                            <p>Kiadásának dátuma: {actual.releaseYear}</p>
                            <p>Kezdeti ára: {actual.startPrice} $</p>
                            <p>Pontszáma: {actual.score}</p>
                            <p></p>
                        </div>
                    )


                })}


            </div>
        </div>
    )
}