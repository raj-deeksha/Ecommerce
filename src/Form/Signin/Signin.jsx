import React from 'react'
import './signin.css';
function Signin() {
  return (
    <div className='signin'>
        <div className="signincontainer btns" >
            <h3>SignIn</h3>
        <input type="text" placeholder='Enter your email'/>
      <input type="password" placeholder='Enter your password'/>
      <button>Submit</button>
        </div>
      
   </div>
  )
}

export default Signin