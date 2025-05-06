// import { createContext, useState } from "react";


// export const CartData = createContext();
// export const CartDataProvider = ({ children }) => {


//     const [ProductLoad, setProductLoad] = useState(false)
//     const [ProductAnimation, setProductAnimation] = useState(false)
//     const [componentreload, setComponentreload] = useState(0)
//     const [basket, setBasket] = useState([])



//     const Addproduct = (data) => {

//         basket.push(data)
//         setBasket(basket)
//         setProductLoad(true)

//         setComponentreload(Math.random())
//         if (ProductLoad) {
//         }
//         setTimeout(() => {
//             setProductLoad(false)
//         }, 2000);
//         setTimeout(() => {

//             setProductAnimation(true)
//         }, 4000);
//     }

//     return(
//     <CartData.Provider value={{ setComponentreload, Addproduct, basket, setBasket, componentreload, ProductLoad, setProductLoad, ProductAnimation, setProductAnimation }}>
//         {
//             children
//         }

//     </CartData.Provider>)

// }
import { createContext, useState } from "react";

export const CartData = createContext();

export const CartDataProvider = ({ children }) => {
  const [ProductLoad, setProductLoad] = useState(false);
  const [ProductAnimation, setProductAnimation] = useState(false);
  const [componentreload, setComponentreload] = useState(0);
  const [basket, setBasket] = useState([]);

  const Addproduct = (data) => {
    // Don't mutate the basket directly!
    setBasket((prevBasket) => [...prevBasket, data]);

    // Trigger UI effects
    setProductLoad(true);
    setComponentreload(Math.random());

    // Set animation after loading
    setTimeout(() => {
      setProductLoad(false);
    }, 2000);

    setTimeout(() => {
      setProductAnimation(true);
    }, 4000);
  };

  return (
    <CartData.Provider
      value={{
        setComponentreload,
        Addproduct,
        basket,
        setBasket,
        componentreload,
        ProductLoad,
        setProductLoad,
        ProductAnimation,
        setProductAnimation,
      }}
    >
      {children}
    </CartData.Provider>
  );
};
