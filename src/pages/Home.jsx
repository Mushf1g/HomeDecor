import React, { useEffect } from 'react';
import Header from "../components/Header/header";
import About from '../components/Aboutus/about';
import Discount from '../components/Discount/discount';
import Contactform from '../components/Contact/contact';
import Headerslide from "../components/Headerslide/headerslide";
import Mostpopular from "../components/MostPopular/mostpopular";
import Collectionslide from "../components/CollectionSlide/collectionslide";
import Productshometop from "../components/ProductsHomeTop/productshometop";
import Productshomebottom from "../components/ProductsHomeBottom/productshomebottom"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header/>
      <Headerslide/>
      <About/>
      <Discount/>
      <Productshometop/>
      <Productshomebottom/>
      <Mostpopular/>
      <Collectionslide/>
      <Contactform/>
    </>
  )
}

export default Home