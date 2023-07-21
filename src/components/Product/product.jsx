import React from 'react'
import "./product.css"
import { BsHeart }  from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Product({desc,image,price,name,id}) {
  // console.log(id);
  return (
    <Link to={`/products/${id}`} className='productHover'>
        <div className='product'>
            <div>
                <img src={image} alt="product" />
            </div>
            <p>{desc}</p>
            <span>{price}$</span>
            <button><BsHeart/></button>
        </div>
    </Link>
  )
}

export default Product




