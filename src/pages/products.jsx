import React, { useEffect } from 'react'
import Pagelink from '../components/PageLink/pagelink'
import Producttop from "../components/ProductTop/producttop"
import Productcontent from "../components/ProductContent/productcontent"

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Pagelink/>
      <Producttop/>
      <Productcontent/>
    </>
  )
}

export default Products