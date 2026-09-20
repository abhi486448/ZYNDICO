import { Link } from "react-router-dom";
import './authen.css';

function Registeruser() {
  return (
    <>
      <div className="form-container">
        <h1 className="headingauth">Register</h1>
        <form className="forminfo">
          <input type="text" placeholder="Enter Name" className="enterinfo" /><br/>
          <input type="email" placeholder="Enter Email" className="enterinfo" /><br/>
          <input type="password" placeholder="Enter Password" className="enterinfo" /><br/>
          <input type="password" placeholder="Confirm Password" className="enterinfo" /><br/>
          <button type="submit" className="google-btn">Register</button>
        </form>

        <Link to="/forgetpass"><p  style={{color:"#fff",marginTop:"15px",marginRight:"20px",fontSize:"15px",textAlign:"right"}}>Already have an account?</p></Link>
        <div className="social-login">
          <button className="google-btn">Continue with Google</button>
        </div>
      </div>
    </>
  );
}

export default Registeruser;
