import React from "react";
import "./resetpassword.css";
import { Link } from "react-router-dom";
import Backarrow from "../../assets/images/arrowback.png"

function Resetpasswordpg() {
  return (
    <>
          <div className="resetPasswordpgLeft">
              <Link to="/auth/login" className='backLink'><img src={Backarrow}/><span>BACK</span></Link>
              <form className="resetPasswordpgForm">
                <h3>RESET PASSWORD</h3>
                <input type="text" placeholder='E-MAIL ADRESS'/>
                <Link to="/auth/verification" className="resetPasswordpgFormSend"><input type="submit" className='logInFormBtn' value="SEND"/></Link>
                <div>
                    <p>Don’t have an account?</p>
                    <Link to="/auth/register">Register</Link>
                </div>
              </form>
          </div>
    </>
  );
}

export default Resetpasswordpg;
