import React from 'react'
import "./contact.css"
import Contactform from "../ContactForm/contactform"
import contactImg from "./contactPng.jpg"

function Contact() {
  return (
    <>
        <section className='contact container'>
            <h3>CONTACT</h3>
            <div className='contactContent'>
                <div>
                  <Contactform/>
                </div>
                <div className='contactImg'>
                  <img src={contactImg} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact