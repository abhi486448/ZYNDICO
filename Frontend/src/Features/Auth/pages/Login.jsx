import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form>
                    <input type="email" name='email' id='email' placeholder="Enter Email"></input>
                    <input type="Password" name='password' id='password' placeholder="Enter Password"></input>

                    <button className='button primery-button' >Login</button>
                </form>
                <Link to="/forgetpass">
                    <p className='forget'>
                        Forgot Password
                    </p>
                </Link>
                <p>Don't have an account ? <Link to="/register">Create One.</Link></p>
            </div>
        </main>
    )
}

export default Login