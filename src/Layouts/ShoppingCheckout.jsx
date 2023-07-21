import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navtop } from '../components/NavTop/navtop'
import { Navbar } from '../components/Navbar/navbar'
import Footer from "../components/Footer/footer"

function ShoppingCheckout() {
  return (
    <>  
        <Navtop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default ShoppingCheckout