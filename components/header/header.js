import Navbar from "../Navbar/Navbar";
import './Header.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../home/Home";
function Header(){
    return(
    <>
    <h1 className="title">This is the tours website header, welcome ..</h1>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
    )
}
export default Header;