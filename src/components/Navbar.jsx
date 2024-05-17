import { Link } from "wouter"
import "./Navbar.css"
import SearchBar from "./SearchBar"

const NavbarC = ()=>{
    return(
        <div className="navbar">
            <li className="li">
            <Link to="/">HOME</Link>
            </li>
            <li className="li">
            <Link to="/list">Countries</Link>
            </li>
            <div className="searchBar">
                <SearchBar/>
            </div>
        </div>
    )
}

export default NavbarC