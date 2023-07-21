import React from 'react'
import { Link } from 'react-router-dom'
import "./accountcard.css"
import { BsBoxArrowLeft, BsHeart, BsPersonFill } from 'react-icons/bs'

function Accountcard() {
  return (
    <>
        <section className='myAccount'>
            <h4>MY&nbsp;ACCOUNT</h4>
            <Link to="/myaccount/personal-information" className='myAccount1'><span><BsPersonFill/></span>PERSONAL&nbsp;INFORMATION</Link>
            <Link to="/myaccount/wishlist" className='myAccount2'><span><BsHeart/></span>WISHLIST</Link>
            <div  className='myAccount3'></div>
            <Link className='myAccount4'><span><BsBoxArrowLeft/></span>LOG&nbsp;OUT</Link>
        </section>
    </>
  )
}

export default Accountcard