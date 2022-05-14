import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    return(
        <nav className="nav">
          <Link to="/" className="link">Home</Link>
          <Link to="#" className="link">About Us</Link>
          <Link to="#" className="link">Contact Us</Link>
        </nav>
    )
}

export default Navbar;