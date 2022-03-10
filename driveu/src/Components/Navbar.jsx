import {Link} from "react-router-dom";

export const Navbar=()=>{
    return <div className="Nav">
        <div className="Navbar">
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
        <Link to="/garage">GARAGE</Link>
        <Link to="/booking">BOOKING</Link>
        </div>
    </div>
}