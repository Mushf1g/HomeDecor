
import React from 'react'
import "./collectionbottom.css"
import Collectionitem from "../CollectionItem/collectionitem"
import collectionsData from "../../data/collections.json";


function Collectionbottom() {
  return (
    <>
      
        <section className='collectionBottom container'>
          {collectionsData.map((collection) => (
          <Collectionitem key={collection.id} img={collection.image} name={collection.name} />
          ))}
        </section>
    </>
  )
}

export default Collectionbottom

