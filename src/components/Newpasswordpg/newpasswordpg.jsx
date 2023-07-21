import React from 'react'
import "./newpasswordpg.css"
import { Link } from "react-router-dom";
import Backarrow from "../../assets/images/arrowback.png"

function Newpasswordpg() {
  return (
    <>
            <div className='newpasswordpgLeft'>
                <Link to="/login" className='backLink'><img src={Backarrow}/><span>BACK</span></Link>
                <form className="newpasswordpgForm">
                    <h3>NEW PASSWORD</h3>
                    <input type="text" placeholder='ENTER NEW PASSWORD'/>
                    <input type="text" placeholder='CONFIRM PASSWORD'/>
                    <Link to="/auth/login" className="newpasswordpgFormSubmit"><input type="submit" className='logInFormBtn' value="SUBMIT"/></Link>  
                </form>
            </div>
    </>
  )
}

export default Newpasswordpg