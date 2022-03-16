import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
    <div className='loginWrapper'>
        <div className='loginLeft'>
            <h1 className='loginLogo'>Ayamaya</h1>
            <span className='loginDesc'>Connect with friends and the world around you on Ayamaya.</span>
        </div>
        <div className='loginRight'>
            <div className='loginRightWrapper'>
                <div className='loginRightInput'>
                    <input placeholder='Email' className='email'></input>
                    <input placeholder='Password' className='password'></input>
                    <button className='loginButton'>Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New Account</button>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}