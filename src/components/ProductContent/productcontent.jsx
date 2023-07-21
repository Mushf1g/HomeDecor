import React, {useState, useEffect} from 'react'
import "./productcontent.css"
import Product from "../Product/product"
import { BsChevronCompactDown, BsSortDown } from 'react-icons/bs'
import axios from 'axios'

function Productcontent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/products')
        .then(response => {
            setProducts(response.data);
        })},[]);

  return (
    <>
        <section className='productContent container'>

            <button className='sortBtn'><span>SORT BY</span><BsSortDown className="icon"/></button>
            <button className='categoriesBtn'><span>CATEGORIES</span><BsChevronCompactDown className='icon'/></button>
            <button className='collectionsBtn'><span>COLLECTIONS</span><BsChevronCompactDown className='icon'/></button>

            <div className='productContentLeft'>
                <div className='productContentLeft1'>
                    <p>CATEGORIES</p>
                    <ul>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;ALL</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;SOFAS</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;BEDS AND HEADBOARDS</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;RUGS</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;CUSHIONS</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;SOFAS</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;HEADBOARDS</li>
                    </ul>
                </div>
                <div className='productContentLeft2'>
                <p>COLLECTIONS</p>
                    <ul>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;ALL</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;BEDROOM</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;LIVING ROOM</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;KITCHEN</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;LIBRARY</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;OFFICE</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;LAUNDRY ROOM</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;GUEST ROOM</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;FAMILY ROOM</li>
                        <li><input type="checkbox" name="" id="" />&nbsp;&nbsp;&nbsp;BATHROOM</li>
                    </ul>
                </div>
            </div>

            <div className='productContentRight'>
                <div>
                    {products.map(product => {
                        return <Product key={product.id} id={product.id} name={product.name} desc={product.description} image={product.image} price={product.price} alt={product.name}/>
                    })} 
                </div>
            </div>

        </section>
    </>
  )
}

export default Productcontent