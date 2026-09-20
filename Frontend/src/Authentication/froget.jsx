import { Link } from "react-router-dom";
import './authen.css';

function ForgotPassword() {
  return (
    <>
      <div className="form-container">
        <h1 className="headingauth"  style={{fontSize:"2rem"}}>Forgot password</h1>
        <form className="forminfo">
          <input type="email" placeholder="Enter Email" className="enterinfo"/>
          <input type="text" placeholder="Enter OTP" className="enterinfo"/>
        </form>

      </div>
    </>
  );
}

export default ForgotPassword;