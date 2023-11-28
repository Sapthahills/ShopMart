import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
         
          <input type="email" placeholder='Enter your Email' />
        <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="loginsignup-login">
          Don't have an account? <span><Link to='/signup' style={{textDecoration:'none'}}>Register</Link> </span>
        </p>
      </div>
    </div>
  )
}

export default SignIn