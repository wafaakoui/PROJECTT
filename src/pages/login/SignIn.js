import { Link } from "react-router-dom";
import imgg from "../../assets/logo.PNG";
import { useState } from "react";

const Signin = () => {

    return ( 
        <div className="signin">
            
            <img className="im" src={imgg} alt="Logo" />
            <h2 className="hh3">Sign in to UniNews</h2>
           <form>
               <div className="lab">
                   <label className="gh" htmlFor="email">Email address</label> <br /><br />
                   <input className="gh" type="text" minLength={3} name="email" /><br /><br />
                   <label className="gh" htmlFor="password">Password</label><br />
                   <input className="gh" type="password" minLength={7} maxLength={20} name="password" /><br />
                   <Link className="hh" to="#">Forgot password?</Link> <br /><br />
                   <button className="btn">Sign In</button><br />
               </div>
           </form>

           <div className="par">
               <p className="gh">New to UniNews? <Link className="ghha" to="/Signup"> Create an account</Link> </p>
           </div>
        </div>
    );
}
 
export default Signin;
