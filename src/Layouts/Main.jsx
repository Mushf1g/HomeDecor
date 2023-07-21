import React from 'react'
import { Navtop } from '../components/NavTop/navtop'
import { Navbar } from '../components/Navbar/navbar'
import  Footer  from '../components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
        <Navtop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Main