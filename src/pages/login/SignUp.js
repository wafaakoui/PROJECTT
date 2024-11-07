import { Link } from "react-router-dom";
import imgg from "../../assets/logo.PNG";

const Signup = () => {

    return (
        <div className="signup">
            <div className="navimage">
                <img className="imm" src={imgg} alt="Logo" />

            </div>
            <div className="navimage">
                <h2 className="hh33">Sign up to UniNews</h2>
            </div>
            
            <div className="sss">
                <form>
                    <label className="jj" htmlFor="name">User Name</label><br />
                    <input type="text" minLength={3} maxLength={20} name="name" /> <br /><br />
                    <label className="jj" htmlFor="email">Email Address</label><br />
                    <input type="email" name="email" /> <br /><br />
                    <label className="jj" htmlFor="password">Password</label><br />
                    <input type="password" name="password" minLength={3} maxLength={20} /><br />
                    <button type="submit" className="btn2">Sign Up</button><br />
                    <div>
                        <p className="gh2">Already have an account? <Link className="ghha" to="/Signin"> Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
