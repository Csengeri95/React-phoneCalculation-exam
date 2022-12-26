import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header';
import Content from './components/Content';
import Products from './pages/Products';
import Calculation from './pages/Calculation';
import Home from "./pages/Home"
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import { useEffect, useState } from 'react';
import { GetproductsContext, GetproductsContextDefaults } from './contexts/GetproductsContext';

const config = require("../package.json")

function App() {

  const [getProducts, setGetProducts] = useState(GetproductsContextDefaults.value)



  const pages = [
    { name: "Homepage", path: "/", element: <Home />, status: true },
    { name: "Products", path: "/products", element: <Products />, status: true },
    { name: "Calculation", path: "/calculation", element: <Calculation />, status: true },
    { name: "PageNotFound", path: "/*", element: <PageNotFound />, status: false }
  ]

  useEffect(() => {
    document.title = config.title
  })

  return (
    <GetproductsContext.Provider value={{ getProducts, setGetProducts }}>

      <div className="App">
        <Router>

          <Header menu={pages} />
          <Content route={pages} />
          <Footer />
        </Router>


      </div>

    </GetproductsContext.Provider>

  );
}

export default App;
