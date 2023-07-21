import React from 'react'
import "./contactform.css"
import Modal from './modal';
function Contactform() {
  return (
    <form className="contactForm">
        <input type="text" placeholder='NAME, SURNAME'/>
        <input type="text" placeholder='E-MAIL ADRESS'/>
        <input type="text" placeholder='THEME'/>
        <textarea name="" id="" placeholder='YOUR MESSAGE' cols="30" rows="6"></textarea>
        {/* <button>LOG IN</button> */}
        <Modal/>
    </form>
  )
}

export default Contactform



