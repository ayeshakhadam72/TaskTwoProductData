// import Image from 'next/image'
// import React, { useState } from 'react'

// import Productdata from '../components/productData'
// import { IoCartOutline } from "react-icons/io5";
// import { CiHeart } from "react-icons/ci";
// import { MdOutlineStar } from "react-icons/md";
// import { FaSpinner } from 'react-icons/fa';

// const Reusecard = ({ ImgClassName, NoShadow, ProductLoad, image, New, view, myproduct, graytext, heading, price, pricenew, border, Addproduct, b }) => {



//   return (
//     <>

//       <div className={`${border} ${ProductLoad && 'opacity-50'} ${NoShadow && 'shadow-none'} bg-white group relative sameclass shadow-2xl rounded-xl  border-[1px] border-gray-300   `} >

//         <div className=''>
//           <Image src={image} className={`${border} ${ImgClassName}`} width={252} height={254} />
//         </div>
//         <div className='Quick Shop items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex 
// justify-center  absolute  bottom-[36%]  w-full bg-[#000000] hover:bg-black ' >

//           <button onClick={() => { Addproduct(b) }} className='uppercase flex gap-1 text-[#55e6a5] text-md p-3   '>
//             <span className='flex items-center uppercase'><IoCartOutline className='text-xl ' /></span>
//             <span>Add To Cart</span>{ProductLoad && <FaSpinner className='text-white mt-1 mx-2 animate-spin' />} </button>
//         </div>

//         <div className='absolute bottom-[89%]  '>
//           <h2 className='bg-[#161880] text-white ml-3 px-3  rounded-tl-lg rounded-br-lg'>
//             {New}
//           </h2>
//         </div>

//         <div onClick={() => { Addproduct(b) }} className='absolute bottom-[87%] left-[80%] '>
//           <div className=''>
//             <button className='     opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md shadow-2xl
//     bg-white hover:bg-black text-black hover:text-white px-2 py-1  '> <CiHeart className='text-2xl' /></button>
//           </div>

//         </div>

//         <div className='pl-5'>

//           <h2 className={`${border} text-black text-lg font-semibold py-2   `} >
//             {heading} </h2>

//           <h2>
//             <span className='text-black text-md font-semibold ' >Rs: {pricenew}$ </span>
//           </h2>
//           <h2 className='pt-2 flex gap-1'>
//             <span className='flex text-yellow-500 items-center text-lg '>
//               <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></span>

//             <span className='text-md' >{view}</span>
//           </h2>
//           <h2 className='text-[#337239]  pt-2 pb-5 '>
//             <li > <span className='text-md'>{graytext}</span>  </li>
//           </h2>

//         </div>
//       </div>




//     </>

//   )
// }

// export default Reusecard
import Image from 'next/image';
import React from 'react';

import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { FaSpinner } from 'react-icons/fa';

const Reusecard = ({
  ImgClassName = '',
  NoShadow = false,
  ProductLoad = false,
  image = '/default.jpg', // default image fallback
  New = '',
  view = '',
  myproduct = '',
  graytext = '',
  heading = '',
  price = '',
  pricenew = '',
  border = '',
  Addproduct = () => {},
  b = null,
}) => {
  return (
    <div
      className={`${border} ${ProductLoad ? 'opacity-50' : ''} ${NoShadow ? 'shadow-none' : ''} 
        bg-white group relative sameclass shadow-2xl rounded-xl border border-gray-300`}
    >
      <div>
        <Image
          src={image}
          alt={heading || 'Product Image'}
          className={`${ImgClassName}`}
          width={252}
          height={254}
          unoptimized // remove if using Vercel Image Optimization
        />
      </div>

      <div
        className="Quick Shop items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex 
        justify-center absolute bottom-[36%] w-full bg-[#000000] hover:bg-black"
      >
        <button
          onClick={() => Addproduct(b)}
          className="uppercase flex gap-1 text-[#55e6a5] text-md p-3"
        >
          <span className="flex items-center uppercase">
            <IoCartOutline className="text-xl" />
          </span>
          <span>Add To Cart</span>
          {ProductLoad && <FaSpinner className="text-white mt-1 mx-2 animate-spin" />}
        </button>
      </div>

      {New && (
        <div className="absolute top-2 left-2">
          <h2 className="bg-[#161880] text-white px-3 rounded-tl-lg rounded-br-lg">
            {New}
          </h2>
        </div>
      )}

      <div className="absolute top-2 right-2">
        <button
          onClick={() => Addproduct(b)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md shadow-2xl bg-white hover:bg-black text-black hover:text-white px-2 py-1"
        >
          <CiHeart className="text-2xl" />
        </button>
      </div>

      <div className="pl-5">
        <h2 className="text-black text-lg font-semibold py-2">{heading}</h2>

        {pricenew && (
          <h2>
            <span className="text-black text-md font-semibold">Rs: {pricenew}$</span>
          </h2>
        )}

        <h2 className="pt-2 flex gap-1">
          <span className="flex text-yellow-500 items-center text-lg">
            <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
          </span>
          <span className="text-md">{view}</span>
        </h2>

        {graytext && (
          <h2 className="text-[#337239] pt-2 pb-5">
            <li><span className="text-md">{graytext}</span></li>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Reusecard;

