import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../Hook/useAuth'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const {loading, handleRegister} = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await handleRegister(username, email, password)
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message || "Unable to register. Check your connection and try again.")
        }
    }

    if(loading){
        return (<main>
            <h1>Please Wait ...</h1>
        </main>)
    }

    return (
        <main>
            <div className="form-container">
                 <span className='logheading'>
                    <h1>Register User</h1>
                </span>
                {error && <p role="alert">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                     onChange={(e)=>{setUsername(e.target.value)}}
                     type="text"
                     name='name'
                     id='name'
                     placeholder="Enter Your Name"
                     required></input>
                    <input
                     onChange={(e)=>{setEmail(e.target.value)}}
                     type="email"
                     name='email'
                     id='email'
                     placeholder="Enter Email"
                     required></input>
                    <input
                     onChange={(e)=>{setPassword(e.target.value)}}
                     type="password"
                     name='password'
                     id='password'
                     placeholder="Enter Password"
                     required></input>

                    <button className='button primery-button' >Create</button>
                </form>

                <p>Already have an account ? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}

export default Register