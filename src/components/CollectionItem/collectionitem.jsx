import React from 'react'
import "./collectionitem.css"

function Collectionitem({img, name}) {
  return (
    <>
        <div className='collectionImg container'>
            <div>
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
            <span></span>
        </div>
    </>
  )
}

export default Collectionitem




// import React from 'react';
// import "./collectionitem.css";
// import collectionsData from "../../data/collections.json";

// function Collectionitem() {
//   return (
//     <>
//       {collectionsData.map((collection) => (
//         <div className='collectionImg container' key={collection.id}>
//           <div>
//             <img src={collection.image} alt={collection.name} />
//           </div>
//           <p>{collection.name}</p>
//           <span></span>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Collectionitem;








