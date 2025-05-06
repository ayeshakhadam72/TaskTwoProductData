// import React, { useContext } from 'react'
// import Reusecard from './reuseCart'



// import { CartData } from '../../context/cart'
// import Productdata from './productData'

// const ProductCart = () => {
//   const { Addproduct, ProductLoad } = useContext(CartData)

//   return (
//     <>
//     <h2 className='text-center text-3xl py-10'> Trending Products</h2>
//     <div className={`mx-5 lg:mx-0   justify-center  flex gap-10 flex-wrap `}>


// {
//   Productdata.map((b , index) => {
//     return (
//       <div key={index}>
//         <Reusecard ProductLoad={ProductLoad} border={'mt-5    border-none hover:text-[#161880]'} image={b.productimage} heading={b.productname} price={'$720.00'} pricenew={b.productprice} b={b} Addproduct={Addproduct}
//           graytext={b.productstock} stars={''} view={'1 view'} />
//       </div>
//     )
//   })

// }


// </div>
//         </>
//   )
// }

// export default ProductCart
import React, { useContext } from 'react';
import Reusecard from './reuseCart';
import { CartData } from '../../context/cart';
import Productdata from './productData';

const ProductCart = () => {
  const { Addproduct, ProductLoad } = useContext(CartData);

  return (
    <>
      <h2 className="text-center text-3xl py-10">Trending Products</h2>

      <div className="mx-5 lg:mx-0 justify-center flex gap-10 flex-wrap">
        {Productdata.map((b, index) => (
          <div key={index}>
            <Reusecard
              ProductLoad={ProductLoad}
              border="mt-5 border-none hover:text-[#161880]"
              image={b.productimage || '/default.jpg'}
              heading={b.productname || 'Product'}
              price="$720.00"
              pricenew={b.productprice || 'N/A'}
              b={b}
              Addproduct={Addproduct}
              graytext={b.productstock || 'Out of stock'}
              view="1 view"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCart;

