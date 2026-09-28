import React from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"

const Register = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form>
                    <input type="text" name='name' id='name' placeholder="Enter Your Name"></input>
                    <input type="email" name='email' id='email' placeholder="Enter Email"></input>
                    <input type="Password" name='password' id='password' placeholder="Enter Password"></input>

                    <button className='button primery-button' >Create</button>
                </form>

                <p>Already have an account ? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}

export default Register