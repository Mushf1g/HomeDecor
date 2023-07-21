import React from 'react'
import "./wishlistpg.css"
import Product from '../Product/product'

function Wishlistpg() {
  return (
    <>
        <section className='wishlistpg'>
            <div className='wishlistGrid'>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>
    </>
  )
}

export default Wishlistpg

