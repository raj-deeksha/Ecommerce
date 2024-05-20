import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="information">
      <div className="container">
        <div className="signup">
        <h1>Signup</h1>
        </div>
        
        <div className="userdetails btn" >
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="gmail" placeholder="gmail" />
          <input type="password" placeholder="password" />
          <button className="submit"> Submit</button>
        </div>

        <div className="account"> Have an acoount? <Link to="/signin">Login</Link> </div>
          
        
      </div>
    </div>
  );
}

export default SignUp;
