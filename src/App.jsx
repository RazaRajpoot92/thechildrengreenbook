import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Books from "./pages/Books"
import AboutUs from "./pages/AboutUs"
import OrderForm from "./components/OrderForm"
import Reivews from "./pages/Reivews"
import LogSignForm from "./components/LogSignForm"
function App() {

  return (

    <Router >
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/books"} element={<Books/>}/>
        <Route path={"/about"} element={<AboutUs/>}/>
        <Route path={"/orderbook"} element={<OrderForm/>}/>
        <Route path={"/reviews"} element={<Reivews/>}/>
        <Route path={"/signuplogin"} element={<LogSignForm/>}/>
      </Routes>

    <Footer />
    </Router>

  )
}

export default App
