import { Link } from "wouter"
import "./Navbar.css"

const NavbarC = ()=>{
    return(
        <div className="navbar">
            <li className="li">
            <Link to="/">HOME</Link>
            </li>
            <li className="li">
            <Link to="/list">Countries</Link>
            </li>
        </div>
    )
}

export default NavbarC