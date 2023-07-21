import React from 'react'
import { useLocation , Link } from 'react-router-dom'
import "./pagelink.css"


function Pagelink() {
    const location = useLocation();
    const url = location.pathname.slice(1)[0].toUpperCase()+location.pathname.slice(2)
  return (
    
    <>
        <div className='pagelink container'>
            <Link to="/" className='pagelink1'>Home</Link>
            <div>|</div>
            <Link className='pagelink2'>{url}</Link>
        </div>
    </>
  )
}

export default Pagelink