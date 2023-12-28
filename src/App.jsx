import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Books from "./pages/Books"
import AboutUs from "./pages/AboutUs"
function App() {


  return (

    <Router >
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/books"} element={<Books/>}/>
        <Route path={"/about"} element={<AboutUs/>}/>
      </Routes>
    <Footer />
    </Router>

  )
}

export default App
