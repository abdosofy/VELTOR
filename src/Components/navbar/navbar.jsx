import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="header">
            <div className="logo-header">
                <Link to="/">VELTOR</Link>
            </div>
            <div className="nav-header">
                <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/new">NEW</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
            <div className="button-header">
                <Link to="/products">SHOP NOW</Link>
            </div>
        </div>
    )
}