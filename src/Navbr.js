import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
            <nav>
                <div className="links">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/Signin" activeClassName="active">Sign In</NavLink>
                    <NavLink to="/Signup" activeClassName="active">Sign Up</NavLink>
                    <NavLink to="/AboutUs" activeClassName="active">About Us</NavLink> 
                    <NavLink to="#" activeClassName="">Latest News</NavLink>
                    <NavLink to="#" activeClassName="">Contact Us</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

