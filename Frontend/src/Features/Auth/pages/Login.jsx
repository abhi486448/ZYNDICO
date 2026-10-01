import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router-dom'
import { useAuth } from "../Hook/useAuth"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { user, loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await handleLogin(email, password)

        navigate("/")
    }

    if(loading){
        return (<main>
            <h1>Loading...</h1>
        </main>)
    }

    return (
        <main>
            <div className="form-container"> 
                <span className='logheading'>
                    <h1>Welcome Login</h1>
                </span>
                <form onSubmit={handleSubmit}>
                    <input
                     onInput={(e) => {setEmail(e.target.value)}}
                     type="email" 
                     name='email' 
                     id='email' 
                     placeholder="Enter Email">
                    </input>
                    <input
                     onInput={(e) => {setPassword(e.target.value)}}
                     type="Password" 
                     name='password' 
                     id='password' 
                     placeholder="Enter Password">

                    </input>

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