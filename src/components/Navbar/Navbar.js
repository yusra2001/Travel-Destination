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


/////////////////////
// import { Link } from "react-router-dom";

// function Navbar(props) {
//     return (
//       <nav className="navbar">
//           <h1>Tour App</h1>
//           <div className="links">
//               <Link style={{color :"white" , margin:"10px" }} to="/" >Home</Link>
              
//           </div>
//       </nav>

//     );
// }

// export default Navbar