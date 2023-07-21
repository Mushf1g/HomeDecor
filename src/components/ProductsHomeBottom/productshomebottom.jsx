import React, { useEffect, useState} from 'react'
import "./productshomebottom.css"
import Product from "../Product/product"
import axios from 'axios'

function Productshomebottom() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/products')
        .then(response => {
            setProducts(response.data.slice(0,8));
        })},[]);
  return (
    <>
        <section className='productsHomeBottom container'>
        {products.map(product => {
             return <Product key={product.id} id={product.id} name={product.name} desc={product.description} image={product.image} price={product.price} alt={product.name}/>
        })} 
        </section>
    </>
  )
}

export default Productshomebottom