import React, { useEffect } from 'react'
import "./header.css"
import { BsBasket3 } from "react-icons/bs"
import headerpng from "./header.png"

function Header() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <header className='header container'>
        <div className='headerStart'>
            <h1>THE FURNITURE THAT&nbsp;DEFINES YOU</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
            <div className='headerStartBtn'>
                <button><BsBasket3/>&nbsp;&nbsp;&nbsp;SHOP&nbsp;NOW</button>
            </div>
            <div  className='headerPng'>
                <div>
                    <img src={headerpng} alt="headerpng" />
                </div>
                <span className='blur'></span>
            </div>
        </div>
    </header>
  )
}

export default Header