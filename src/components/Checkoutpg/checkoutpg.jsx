import React from 'react'
import "./checkoutpg.css"
import { Link } from 'react-router-dom'
function Checkoutpg() {
  return (
    <>
        <div className='pagelink container'>
            <Link to="/" className='pagelink1'>Home</Link>
            <div>|</div>
            <Link to="/shopping-cart" className='pagelink1'>Shopping Cart</Link>
            <div>|</div>
            <Link to="/shopping-cart/checkout" className='pagelink2'>Checkout</Link>
        </div>

        <section className='container checkOutpg'>
            <h3>CHECKOUT</h3>
            <aside>

                <div className='checkOutpgTop'>
                    <div className='checkOutpg1'>
                        <p>PERSONAL&nbsp;INFORMATION</p>
                        <div className='checkOutpg1Inputs'>
                            <div><input type="text" placeholder='NAME'/><input type="text" placeholder='SURNAME'/></div>
                            <div><input type="text" placeholder='E-MAIL ADRESS'/><input type="number" placeholder='+ 994 (__) ___ __ __'/></div>
                            <div><input type="text" placeholder='CITY, STREET'/><input type="text" placeholder='POSTAL CODE'/></div>
                        </div>
                    </div>
        
                    <div className='checkOutpg2'>
                        <p>CARD&nbsp;INFORMATION</p>
                        <div className='checkOutpg2Inputs'>
                            <input type="text" placeholder='CARD NUMBER'/>
                            <input type="text" placeholder='EXPIRY DATE'/>
                            <input type="text" placeholder='CW'/>
                        </div>
                    </div>
                </div>

                <div className='checkOutpgBottom'>
                    <div className='checkOutpg3'>
                        <div className='checkOutpg3Div'>
                            <p>PAYMENT&nbsp;METHOD</p>
                            <div>
                                <div className='checkRadio'><input type="radio" name="payment" id="" /><span>CARD</span></div>
                                <div className='checkRadio'><input type="radio" name="payment" id="" /><span>CASH</span></div>
                            </div>
                        </div>
                        <div className='checkOutpg3Div'>
                            <p>DELIVERY&nbsp;METHOD</p>
                            <div>
                                <div className='checkRadio'><input type="radio" name="delivery" id="" /><span>COURIER</span></div>
                                <div className='checkRadio'><input type="radio" name="delivery" id="" /><span>PICKUP</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='checkOutpg4'>
                        <Link>FINISH&nbsp;ORDER</Link>
                    </div>
                </div>

            </aside>
        </section>
    </>
  )
}

export default Checkoutpg