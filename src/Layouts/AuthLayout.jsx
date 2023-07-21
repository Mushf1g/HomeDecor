import React from 'react'
import { Outlet } from 'react-router-dom'
import Loginimg from "../components/LogInImg/loginimg"
import { Navtop } from "../components/NavTop/navtop"
import  Footer  from "../components/Footer/footer"



function Authlayout() {
      const isMobile = window.innerWidth <= 768;
  return (
    
    <>
      {isMobile && <Navtop />}
      <section className='logIn registerpg newpasswordpg resetPasswordpg verificationpg'>
          <Outlet/>
          <Loginimg/>
      </section>
      {isMobile && <Footer />}
    </>
  )
}

export default Authlayout