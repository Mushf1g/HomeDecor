import React from 'react'
import "./aboutbtn.css"
import { Link } from 'react-router-dom'

function Aboutbtn() {
  return (
    <Link to="/about">
        <button className='aboutBtn'>LEARN MORE</button>
    </Link>
  )
}

export default Aboutbtn