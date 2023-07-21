import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navtop } from "../components/NavTop/navtop"
import { Navbar } from '../components/Navbar/navbar'
import Footer from "../components/Footer/footer"
import Accountcard from "../components/AccountCard/accountcard";
import { Link } from 'react-router-dom'

function Myaccount() {
  return (
    <>
        <Navtop/>
        <Navbar/>
        <div className='pagelink container'>
            <Link to="/" className='pagelink1'>Home</Link>
            <div>|</div>
            <Link className='pagelink2'>Myaccount</Link>
        </div>
        <section className='container myAccountPage'>
            <Accountcard/>
            <Outlet/>
        </section>
        <Footer/>
    </>
  )
}

export default Myaccount