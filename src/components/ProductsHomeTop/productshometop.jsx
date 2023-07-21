import React from 'react'
import "./productshometop.css"
import { Link } from 'react-router-dom'

function Productshometop() {
  return (
    <>
        <div className='productsHomeTop container'>
            <h3>PRODUCTS</h3>
            <Link to="/products">SEE&nbsp;&nbsp;ALL</Link>
        </div>
    </>
  )
}

export default Productshometop