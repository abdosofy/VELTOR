import Navbar from "./Components/navbar/navbar";
import Home from "./Components/HomeImg/home";
import { Routes , Route } from "react-router-dom";
import "./App.css"
import New from "./Components/HomeImg/newimg/newcollection";
export default function App(){
  return(
    <>
    <div className="style-nav-home">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    <New/>
    </>
  )
}