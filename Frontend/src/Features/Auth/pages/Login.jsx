import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router-dom'
import { useAuth } from "../Hook/useAuth"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        try {
            await handleLogin(email, password)
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message || "Unable to log in. Check your connection and try again.")
        }
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
                {error && <p role="alert">{error}</p>}
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