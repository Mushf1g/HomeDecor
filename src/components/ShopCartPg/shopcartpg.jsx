import React, { useState } from 'react';
import "./shopcartpg.css"
import { BsXLg } from 'react-icons/bs'
import shopcartimg from "../../assets/images/shopcartimg.jpg"
import { Link } from 'react-router-dom'
import Pagelink from '../PageLink/pagelink'

function Shopcartpg() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Grayson Premium Grey Wash Nest of Tables",
            price: 140,
            quantity: 0
        },
        {
            id: 2,
            name: "Grayson Premium Grey Wash Nest of Tables",
            price: 140,
            quantity: 0
        }
    ]);

    const handlePriceUpdate = (price) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
    };

    const handleCountUpdate = (itemId, count) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        quantity: item.quantity + count
                    };
                }
                return item;
            });
            return updatedItems;
        });

        setItemCount((prevItemCount) => prevItemCount + count);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + (count * 140));
    };

    const handleItemRemove = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);

        const removedItem = items.find(item => item.id === itemId);
        const removedItemCount = removedItem.quantity;
        setItemCount(prevItemCount => prevItemCount - removedItemCount);
        setTotalPrice(prevTotalPrice => prevTotalPrice - (removedItemCount * 140));
    };

    return (
        <>
            <Pagelink />
            <section className='container shopCartpg'>
                <h3>SHOPPING CART</h3>
                <div className='shopCartContent'>

                    <aside className='shopCartLeft'>
                        {items.map((item) => (
                            <div className='shopCartLeftItem' key={item.id}>
                                <div className='CloseX' onClick={() => handleItemRemove(item.id)}><BsXLg /></div>
                                <div className='a1'>
                                    <div className='shopcartimg'><img src={shopcartimg} alt="shopcartimg" /></div>
                                    <p className='shopcartprg'>{item.name}</p>
                                </div>
                                <div className='a2'>
                                    <div className='shopcartColor'></div>
                                    <div className='shopcartCount'>
                                        <button className='shopcartCountPlus' onClick={() => handleCountUpdate(item.id, 1)}>+</button>
                                        <span className='count'>{item.quantity}</span>
                                        <button className='shopcartCountMinus' onClick={() => handleCountUpdate(item.id, -1)}>-</button>
                                    </div>
                                </div>
                                <p className='shopcartPrice'>{item.price}$</p>
                            </div>
                        ))}
                    </aside>

                    <aside className='shopcartCheckout'>
                        <h4>SUMMARY</h4>
                        <p className='itemCount'><span>ITEM COUNT</span><span className='count'>{itemCount}</span></p>
                        <p className='totalPrice'><span>TOTAL PRICE</span><span>{totalPrice}$</span></p>
                        <div className='myAccount3'></div>
                        <Link to="/shopping-cart/checkout" className='checkoutLink'>CHECKOUT</Link>
                    </aside>

                </div>
            </section>
        </>
    )
}

export default Shopcartpg;
