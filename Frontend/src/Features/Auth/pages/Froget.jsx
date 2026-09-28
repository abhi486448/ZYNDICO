import React from 'react'
import "../style/form.scss"


const Froget = () => {
  return (
    <main>
      <div className="form-container">
        <span className='logheading'>
          <h1>Forgot password</h1>
        </span>
        
        <form>
        <input type="email" name='email' id='email' placeholder="Enter Email"></input>
        <input type="Password" name='password' id='password' placeholder="Enter OTP"></input>
        <button className='button primery-button' >Submit</button>
        </form>

      </div>
    </main>
  )
}

export default Froget