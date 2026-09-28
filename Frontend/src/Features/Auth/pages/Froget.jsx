import React from 'react'

const Froget = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Forgot password</h1>
        <form>
          <input type="email" placeholder="Enter Email" className="enterinfo"/>
          <input type="text" placeholder="Enter OTP" className="enterinfo"/>
        </form>

      </div>
    </main>
  )
}

export default Froget