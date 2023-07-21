import React from 'react'
import "./registerpg.css"
import { Link } from "react-router-dom";
import Backarrow from "../../assets/images/arrowback.png"


function Registerpg() {


  return (
    <>
            <div className='registerpgLeft'>
                <Link to="/" className='backLink'><img src={Backarrow}/><span>HOME</span></Link>
                <form className='registerpgForm'>
                    <h3>REGISTER</h3>
                    <input type="text" placeholder='NAME, SURNAME'/>
                    <input type="text" placeholder='E-MAIL ADRESS'/>
                    <input type="password" placeholder='PASSWORD'/>
                    <input type="password" placeholder='REPEAT PASSWORD'/>
                    <Link to="/auth/login" className="registerpgFormBtn"><input type="submit" className='logInFormBtn' value="LOG IN"/></Link>
                    <div>
                        <p>Already have an account?</p>
                        <Link to="/auth/login">Log in</Link>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Registerpg


