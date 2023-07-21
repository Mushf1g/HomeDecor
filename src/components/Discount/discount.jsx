import React from 'react'
import "./discount.css"
import discountPng from "./discountPng.png"
import { BsBasket3 } from "react-icons/bs"

function Discount() {
  return (
    <section className='discount'>
        <div className='discountImg'>
            <img src={discountPng} alt="" />
            <div className='discountContent'>
                <h2>20%DISCOUNT</h2>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </p>
                <button><BsBasket3/>&nbsp;&nbsp;&nbsp;SHOP&nbsp;NOW</button>
            </div>
        </div>
    </section>
  )
}

export default Discount