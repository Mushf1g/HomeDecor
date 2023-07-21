import React from 'react'
import Registerpg from "../components/Registerpg/registerpg"
// import Navtop from "../components/NavTop/navtop"
import Footer from '../components/Footer/footer'

function Register() {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
        {/* {isMobile && <Navtop />} */}
        {/* <Navtop/> */}
        <Registerpg/>
        {isMobile && <Footer />}
    </>
  )
}

export default Register

