// import Navbar from "@/components/navbar";
// import "@/styles/globals.css";
// import { CartDataProvider } from "../../context/cart";

// export default function App({ Component, pageProps }) {


//     return (
//         <>
//             <CartDataProvider >
                
//                 <Component  {...pageProps} />
//             </CartDataProvider>
//         </>)
// }

import Navbar from "../components/Navbar";
import "@/styles/globals.css";
import { CartDataProvider } from "../../context/cart"; // ✅ Use absolute path for consistency
import Footer from "@/components/footer";
import ProductCart from "@/components/productCart";

export default function App({ Component, pageProps }) {
  return (
    <CartDataProvider>
     
      <Component {...pageProps} />
     
    </CartDataProvider>
  );
}
