import "../styles/Calculation.css"
import { GetproductsContext } from "../contexts/GetproductsContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

import saveConditions from "../utils/saveConditions"


export default function Calculation(props) {

    const { getProducts, setGetProducts } = useContext(GetproductsContext)
    const [list, setList] = useState([]);
    const [currency, setCurrency] = useState()
    const [defaultCurrency, setDefaultCurrency] = useState({
        name: "USD",
        rate: 1,
        symbol: "$"
    })




    function api() {
        axios.get("https://api.coinstats.app/public/v1/fiats")
            .then(res => {
                setCurrency(res.data)
            })

            .catch(error => console.log(error))
    }

    useEffect(() => {
        api()
    }, [])
    //console.log(currency)




    function handleSubmit(event) {
        event.preventDefault()
        let formData = {
            brand: event.target.brand.value,
            model: event.target.model.value,
            os: event.target.os.value,
            releaseYear: event.target.releaseYear.value,
            startPrice: event.target.startPrice.value,
            startScore: event.target.score.value,
            condition: event.target.condition.value
        }


        if (saveConditions(formData)) {
            axios.get(`https://softcamp.hu/webler/arkalkulator.php?brand=${formData.brand}&model=${formData.model}&os=${formData.os}&releaseYear=${formData.releaseYear}&startScore=${formData.startScore}&startPrice=${formData.startPrice}&condition=${formData.condition}`)
                .then(res => {
                    const result = res.data.data

                    if (result == null) {
                        alert(res.data.error)
                    }
                    let elements = {
                        brand: result.brand,
                        model: result.model,
                        os: result.os,
                        recommendedPrice: result.recommendedPrice,
                        releaseYear: result.releaseYear,
                        details: result.details
                    }

                    setList(elements)

                }

                )
                .catch(error => {
                    alert("Hiba történt ! A szerver nem érhető el ! ")
                })
        }




    }


    function handleChange(event) {
        const filtered = currency.filter(a => a.name === event.target.value)[0]
        // console.log(filtered.rate)
        setDefaultCurrency({
            name: event.target.value,
            rate: filtered.rate,
            symbol: filtered.symbol

        })

    }

    //console.log(defaultCurrency)





    return (
        <div className="calculation">
            <h2>A kijelölt termék adatai az űrlapban kerültek beillesztésre</h2>
            <div className="calculation-introduction">
                <p>Az <strong>operációs rendszer</strong>  választható értékei: <span style={{ color: `rgba(255,0,0,.8)` }}>android</span> és <span style={{ color: `rgba(255,0,0,.8)` }}>ios</span> !</p>

                <p><strong>Kiadásának dátuma:</strong> kérem csak <span style={{ color: `rgba(255,0,0,.8)` }}>10</span> évnél fiatalabb terméket írjon be ! </p>

                <p><strong>Kezdeti ár:</strong> kérem <span style={{ color: `rgba(255,0,0,.8)` }}>amerikai dollárban</span> adja meg az összeget és <span style={{ color: `rgba(255,0,0,.8)` }}>ne használjon</span> szimbólumot !</p>

                <p><strong>Telefon pontszáma: </strong> a telefon megjelenésének időpontjában, <span style={{ color: `rgba(255,0,0,.8)` }}>1-től 10-ig</span>, mennyire voltjó telefon megítélése</p>

                <p> <strong>Állapot:</strong> a telefon jelenlegi állapota <span style={{ color: `rgba(255,0,0,.8)` }}>0-tól 100-ig</span>. Alapértelmezetten <span style={{ color: `rgba(255,0,0,.8)` }}>80</span> pontot kap, amennyiben eltérne módosíthatja !</p>

            </div>
            <div className="calculation-grid">


                {getProducts.length !== 0 &&


                    <div key={getProducts.id} className="calculation-form-box">
                        <form onSubmit={handleSubmit} >

                            <label className="calculation-label">
                                A telefon gyártója: <br />
                                <input className="calculation-input" type="text" name="brand" defaultValue={getProducts.brand} />

                            </label><br />

                            <label className="calculation-label">
                                Model <br />
                                <input className="calculation-input" type="text" name="model" defaultValue={getProducts.model} />
                            </label>

                            <label className="calculation-label">
                                Operációs rendszer: <br />
                                <input className="calculation-input" type="text" name="os" defaultValue={getProducts.os} />

                            </label><br />

                            <label className="calculation-label">
                                Kiadásának dátuma:<br />
                                <input className="calculation-input" type="number" name="releaseYear" defaultValue={getProducts.releaseYear} />
                            </label><br />

                            <label className="calculation-label">
                                Kezdeti ára:<br />
                                <input className="calculation-input" type="number" name="startPrice" defaultValue={getProducts.startPrice} />
                            </label><br />

                            <label className="calculation-label">
                                Pontszáma:<br />
                                <input className="calculation-input" type="number" name="score" defaultValue={getProducts.score} />
                            </label>

                            <label className="calculation-label">
                                Állapot:<br />
                                <input className="calculation-input" name="condition" type="number" defaultValue="80" />
                            </label>

                            <button className="calculation-button" type="submit">Küldés</button>


                        </form>
                    </div>


                }


                {getProducts.length === 0 &&

                    <div className="calculation-form-box">
                        <form onSubmit={handleSubmit} >

                            <label className="calculation-label">
                                A telefon márkája: <br />
                                <input className="calculation-input" type="text" name="brand" />

                            </label><br />

                            <label className="calculation-label">
                                Operációs rendszer: <br />
                                <input className="calculation-input" type="text" name="text" />

                            </label><br />

                            <label className="calculation-label">
                                Kiadásának dátuma:<br />
                                <input className="calculation-input" type="number" name="releaseYear" />
                            </label><br />

                            <label className="calculation-label">
                                Kezdeti ára:<br />
                                <input className="calculation-input" type="number" name="startPrice" />
                            </label><br />

                            <label className="calculation-label">
                                Pontszáma:<br />
                                <input className="calculation-input" type="number" name="score" />
                            </label>

                            <label className="calculation-label">
                                Állapot:<br />
                                <input className="calculation-input" type="number" name="condition" />
                            </label>


                            <button className="calculation-button" type="submit">Küldés</button>

                        </form>
                    </div>
                }

                {list.length !== 0 &&


                    <div className="calculation-summary">
                        <h2>Összesítés</h2>



                        <h3>Termék neve: {list.brand} {list.model}</h3>
                        <h4>Az ajánlott fogyasztói ár az állapotot figyelembe véve: <span style={{ color: `rgba(255,0,0,.8)` }}>{Math.round(list.recommendedPrice * defaultCurrency.rate)} {defaultCurrency.symbol}</span> </h4>
                        <h4>Az évenkénti áresés (<span style={{ color: `rgba(255,0,0,.8)` }}>100 pontos</span> állapotot figyelembe véve) a következő:</h4>
                        <table style={{ margin: "0 auto" }}>
                            <thead>
                                <tr>
                                    <th>Év</th>
                                    <th>Ár </th>
                                </tr>
                            </thead>

                            <tbody>
                                {list.details.map((map, index) => (
                                    <tr key={index}>
                                        <td>{map.year}</td>
                                        <td>{Math.round(map.price * defaultCurrency.rate)} {defaultCurrency.symbol}</td>
                                    </tr>
                                ))}
                            </tbody>



                        </table>


                        <h4>A telefon értékét átválthatja a felsorolt devizákra !</h4>

                        <select onChange={handleChange}
                            defaultValue={defaultCurrency.name}>

                            {currency.map((map, index) => (

                                <option key={index} value={map.name}>{map.name} {map.symbol}</option>
                            ))}
                        </select>

                    </div>


                }

            </div>
        </div>
    )
}