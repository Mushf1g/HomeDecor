import React, { useEffect, useState } from 'react'
import "./productsdetail.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function ProductsDetailpg() {
const {id} = useParams()
    const [products, setProducts] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5001/products/'+id)
        .then(response => {
            setProducts(response.data);
        })},[]);

  return (
    <>

        <div className='pagelink container'>
                <Link to="/" className='pagelink1 pagelinkHome'>Home</Link>
                <div className='pagelinkHome'>|</div>
                <Link to="/products" className='pagelink1'>Products</Link>
                <div>|</div>
                <Link className='pagelink2'>{products.description}</Link>
        </div>

        <section className='container ProductsDetail'>
            <p className='productDesc productDescMob'>{products.description}</p>
            <div className='ProductsDetailContent'>
                <div className='ProductsDetailContentLeft'>
                    <div className='productMainImg'><img src={products.image} alt="" /></div>
                    <div className='productButtomImgs'>
                        <div><img className='productButtomImg1' src={products.image} alt="" /></div>
                        <div><img src={products.image} alt="" /></div>
                        <div><img src={products.image} alt="" /></div>
                    </div>
                </div>
                <div className='ProductsDetailContentRight'>
                    
                    <p className='productDesc productDescDesk'>{products.description}</p>
                    
                    <p className='productText'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    <div className='productColor'>
                        <p>COLORS</p>
                        <span className='productColor1'></span>
                        <span className='productColor2'></span>
                        <span className='productColor3'></span>
                    </div>
                    <div className='productCount'>
                        <button className='productCountPlus'>+</button>
                        <span className='count'>0</span>
                        <button className='productCountMinus'>-</button>
                    </div>
                    <h3 className='productPrice'>{products.price}$</h3>
                    <div className='productBtns'>
                        <button className='productBuy'>BUY NOW</button>
                        <button className='productAdd'>ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div>
            </div>

        </section>
    </>
  )
}

export default ProductsDetailpg