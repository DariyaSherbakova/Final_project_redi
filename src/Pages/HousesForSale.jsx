import React from 'react'

function HousesForSale({ properties }) {
    console.log(properties);
    return (
        <div className='container justify-items-center lg:flex lg:flex-wrap lg:gap-8 lg:ml-16 lg:justify-items-center'>
            {properties.map(i => <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={i.pics[0]} alt="Houses" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{i.name}</h2>
                    <p>${i.price}</p>
                    <p>{i.beds} bds | {i.baths} ba | {i.area} sqft </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default HousesForSale

// import React from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// function HousesForSale({ properties }) {
//   console.log(properties);
//   return (
//     <div className='container lg:flex lg:flex-wrap lg:gap-8 lg:items-center'>
//       {properties.map((i) => (
//         <div className="card w-96 bg-base-100 shadow-xl" key={i.id}>
//           <figure>
//             <img src={i.pics[0]} alt="House" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">{i.name}</h2>
//             <p>Price: ${i.price}</p>
//             <p>
//               <FaMapMarkerAlt /> Address: {i.address}
//               <a
//                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                   i.address
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View on Google Maps
//               </a>
//             </p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HousesForSale;
