import React from 'react'
import "./loginimg.css"
import LoginImg from "../../assets/images/loginjpg.jpg"

function Loginimg() {
  return (
    <div className='logInRight'>
        <img src={LoginImg} alt="Login" />
    </div>
  )
}

export default Loginimg