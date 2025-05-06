// import React, { useContext, useEffect, useState } from 'react'


// // import Logo from "../../../public/navbar/OnlineStorelogo.png";
// import Logo from "../../public/OnlineStorelogo.png"
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaSearch } from "react-icons/fa";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaCartShopping } from "react-icons/fa6";
// import { CartData } from '../../context/cart';
// import Magnet from '../components/Magnet';


// const Navbar = () => {
//     const { ProductLoad, basket } = useContext(CartData);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [openIcon, setOpenIcon] = useState(false);

//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const openSidebar = () => setOpenIcon(true);
//     const closeSidebar = () => setOpenIcon(false);

//       // Calculate total cart price
//   const myTotal = () => basket.reduce((total, item) => total + item.productprice, 0);

//   // Prevent sidebar from opening when screen width is >1000px
//   useEffect(() => {
//     if (ProductLoad && window.innerWidth < 1000) {
//       setOpenIcon(true);
//     }
//   }, [ProductLoad]);

//   // Close sidebar on window resize if screen width >1000px
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1000) {
//         setOpenIcon(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//    <>
//    <div className='py-3 flex justify-around items-center bg-black border-t border-b border-gray-200'>
//         <div>
//           <Image className="object-cover w-32" src={Logo}  alt="Logo" />
//         </div>
//         <div>
//           <ul className={`text-white hidden md:flex space-x-16 font-medium text-md uppercase`}>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About</Link></li>
//             <li className="relative group">
//               <Link href="/product" className="flex items-center">
//                 Product 
//               </Link>
             
//             </li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         <div className='flex gap-5 items-center text-2xl'>
//           {/* Mobile Menu Toggle */}
//           <div onClick={toggleMenu} className='md:hidden text-yellow-400 text-3xl cursor-pointer'>
//             {menuOpen ? "X" : "☰"}
//           </div>

//           <p className='bg-green-400 text-white p-2 rounded-full'>
//             <FaSearch className='text-xl' />
//           </p>

//           {/* Cart Icon */}
//           <div className='relative' onClick={openSidebar}>
//             <p className='bg-green-400 text-white p-2 rounded-full flex'>
//               <FaCartShopping className='text-xl' />
//             </p>
//             <p className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
//               <span className='text-black bg-white p-1 px-2 font-bold rounded-full text-sm'>
//                 {basket.length}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* side bar */}
//       <div className="flex justify-end">
//         <div
//           className={`fixed right-0 top-0 h-full bg-black shadow-2xl z-50 overflow-auto transition-width duration-500 ${
//             openIcon ? 'w-[350px]' : 'w-0'
//           }`}
//         >
//           <div className='pt-5 px-5'>
//             <span onClick={closeSidebar} className='border border-gray-400 px-2 py-1 rounded-full text-gray-400 cursor-pointer'>
//               X
//             </span>
//           </div>

//           <div className="p-5">
//             <p className='text-xl font-bold text-white border-b border-gray-300 pb-2'>Shopping Cart</p>

//             {basket.map((b, index) => (
//               <div key={index} className='py-3 border-b border-gray-300 flex gap-6'>
//                 <Magnet>
//                   <Image src={b.productimage} width={70} height={70} className='object-cover rounded-full' alt="Product" />
//                 </Magnet>
//                 <div>
//                   <h2 className='text-lg font-medium text-white'>{b.productname}</h2>
//                   <p className='text-lg font-bold text-yellow-400'>Rs {b.productprice} PKR</p>
//                 </div>
//               </div>
//             ))}

//             <div className='border-t border-gray-300 pt-5 flex justify-between text-white'>
//               <p className='text-lg font-medium'>Subtotal:</p>
//               <p className='text-lg font-bold text-yellow-400'>Rs {myTotal()}</p>
//             </div>

//             <div className='text-center mt-5'>
//               <button className='text-md font-semibold py-2 rounded-full bg-gray-100 w-full' onClick={closeSidebar}>
//                 Continue Shopping
//               </button>
//               <Link href="/checkout">
//                 <button className='text-md font-semibold text-white py-2 w-full rounded-full bg-yellow-500 mt-3'>
//                   CHECKOUT
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* mob view */}
//       <div className={`${menuOpen ? 'block' : 'hidden'} bg-gray-100 md:hidden border-b border-gray-200`}>
//         <ul className="space-y-4 py-5 pl-5 text-lg">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/product">Product</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//           <li><Link href="/blog">Blog</Link></li>
//         </ul>
//       </div>
//    </>
//   )
// }

// export default Navbar
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { CartData } from '../../context/cart';
import Magnet from '../components/Magnet';
import Logo from '/public/OnlineStorelogo.png'; // ✅ Correct import for public assets

const Navbar = () => {
  const { ProductLoad, basket } = useContext(CartData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openSidebar = () => setOpenIcon(true);
  const closeSidebar = () => setOpenIcon(false);

  const myTotal = () => basket.reduce((total, item) => total + item.productprice, 0);

  useEffect(() => {
    if (ProductLoad && typeof window !== 'undefined' && window.innerWidth < 1000) {
      setOpenIcon(true);
    }
  }, [ProductLoad]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth > 1000) {
        setOpenIcon(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='py-3 flex justify-around items-center bg-black border-t border-b border-gray-200'>
        <div>
          <Image className="object-cover w-32" src={Logo} alt="Logo" priority />
        </div>
        <div>
          <ul className='text-white hidden md:flex space-x-16 font-medium text-md uppercase'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className='flex gap-5 items-center text-2xl'>
          {/* Mobile Menu */}
          <div onClick={toggleMenu} className='md:hidden text-yellow-400 text-3xl cursor-pointer'>
            {menuOpen ? "X" : "☰"}
          </div>

          <p className='bg-green-400 text-white p-2 rounded-full'>
            <FaSearch className='text-xl' />
          </p>

          <div className='relative' onClick={openSidebar}>
            <p className='bg-green-400 text-white p-2 rounded-full flex'>
              <FaCartShopping className='text-xl' />
            </p>
            <p className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
              <span className='text-black bg-white p-1 px-2 font-bold rounded-full text-sm'>
                {basket.length}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="flex justify-end">
        <div className={`fixed right-0 top-0 h-full bg-black shadow-2xl z-50 overflow-auto transition-width duration-500 ${openIcon ? 'w-[350px]' : 'w-0'}`}>
          <div className='pt-5 px-5'>
            <span onClick={closeSidebar} className='border border-gray-400 px-2 py-1 rounded-full text-gray-400 cursor-pointer'>
              X
            </span>
          </div>

          <div className="p-5">
            <p className='text-xl font-bold text-white border-b border-gray-300 pb-2'>Shopping Cart</p>

            {basket.map((b, index) => (
              <div key={index} className='py-3 border-b border-gray-300 flex gap-6'>
                <Magnet>
                  <Image src={b.productimage} width={70} height={70} className='object-cover rounded-full' alt="Product" />
                </Magnet>
                <div>
                  <h2 className='text-lg font-medium text-white'>{b.productname}</h2>
                  <p className='text-lg font-bold text-yellow-400'>Rs {b.productprice} PKR</p>
                </div>
              </div>
            ))}

            <div className='border-t border-gray-300 pt-5 flex justify-between text-white'>
              <p className='text-lg font-medium'>Subtotal:</p>
              <p className='text-lg font-bold text-yellow-400'>Rs {myTotal()}</p>
            </div>

            <div className='text-center mt-5'>
              <button className='text-md font-semibold py-2 rounded-full bg-gray-100 w-full' onClick={closeSidebar}>
                Continue Shopping
              </button>
              <Link href="/checkout">
                <button className='text-md font-semibold text-white py-2 w-full rounded-full bg-yellow-500 mt-3'>
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${menuOpen ? 'block' : 'hidden'} bg-gray-100 md:hidden border-b border-gray-200`}>
        <ul className="space-y-4 py-5 pl-5 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

