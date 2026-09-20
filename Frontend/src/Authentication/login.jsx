import { Link } from "react-router-dom"
import './authen.css'
function Loginuser(){
  return(
    <>
    <div className="form-container">
        <h1 className="headingauth">Login</h1>
          <form className="forminfo">
              <input type="email" placeholder="Enter Email" className="enterinfo"></input><br/>
              <input type="Password" placeholder="Enter Password" className="enterinfo"></input>
          </form>
          <Link to="/forgetpass">
          <p style={{marginTop:"20px",marginRight:"15px",fontSize:"15px",textAlign:"right",color:"#ddd",cursor:"pointer"}}>
            Forgot Password
          </p>
          </Link>
          <Link to="/Register"><button className="google-btn">Countinue with google</button></Link>
      </div>
    </>
  )
}

export default Loginuser;