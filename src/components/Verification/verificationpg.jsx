import React from 'react'
import "./verificationpg.css"
import { Link } from 'react-router-dom'
import Backarrow from "../../assets/images/arrowback.png"

function Verificationpg() {
  return (
    <>
            <div className='verificationpgLeft'>
                <Link to="/auth/resetpassword" className='backLink'><img src={Backarrow}/><span>BACK</span></Link>
                <form className="verificationpgFrom">
                <h3>VERIFICATION</h3>
                <input type="text" placeholder='ENTER VERIFICATION NUMBER'/>
                <div>
                    <p>Didn’t receive a code?</p>
                    <Link>Resend</Link>
                </div>
                <Link to="/auth/newpassword" className="VerificationpgFromVerify"><input type="submit" className='logInFormBtn' value="VERIFY"/></Link>
              </form>
            </div>
    </>
  )
}

export default Verificationpg