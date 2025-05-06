// import Image from "next/image";
// import React from "react";
// import Logo from "../../public/OnlineStorelogo.png"


// import {
//     FaFacebook,
//     FaGithub,
//     FaInstagram,
//     FaTwitter,
//     FaTwitch,
// } from "react-icons/fa";
// import Magnet from "../components/Magnet";
// // import CosmosBackground from "../cosmos-background";

// const sections = [


//     {
//         title: "Company",
//         items: ["About", "Ali", "Jobs", "Press", "Partners"],
//     },
//     {
//         title: "Legal",
//         items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
//     },
// ];

// const items = [
//     { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
//     { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
//     { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
//     { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
//     { name: "Github", icon: FaGithub, link: "https://github.com/" },
// ];

// const Footer = () => {
//     return (
//       <>
//         <div className="pt-16 w-full mt-24 bg-gradient-to-r from-[#000000] to-[#000000] text-gray-300 py-y px-2">
            
//             <div className="max-w-[1240px] mx-auto gap-6 grid grid-cols-3 md:grid-cols-6 border-b-2 border-gray-600 py-8">
//                 {/* Logo Section with More Space */}
//                 <div className="col-span-1 md:col-span-2 space-y-4"> {/* Adjusted to take more space */}
//                    <Magnet>
//                     <Image src={Logo} className="object-cover w-48" /> {/* Increased size */}
//                     </Magnet> 
//                     <Magnet>
//                     <p>
//                         Ayesha Gadget Store is your one-stop destination for the latest and most
//                         innovative gadgets. From cutting-edge smartphones to essential tech
//                         accessories, we bring you high-quality products at competitive prices.
//                     </p>
//                     </Magnet>
                    
//                 </div>

//                 {/* Other Sections */}
//                 {sections.map((section, index) => (
//                     <div key={index}>
//                         <h6 className="font-bold uppercase pt-2">{section.title}</h6>
//                         <ul>
//                             {section.items.map((item, i) => (
//                                 <li key={i} className="py-1 text-gray-500 hover:text-white">
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}

//                 {/* Newsletter Section */}
//                 <div className="col-span-2 pt-8 md:pt-2">
//                     <p className="font-bold uppercase">Subscribe to our newsletter</p>
//                     <p className="py-4">
//                         The latest news, articles, and resources, sent to your inbox weekly.
//                     </p>
//                     <form className="flex flex-col sm:flex-row">
//                         <input
//                             className="w-full p-2 mr-4 rounded-md mb-4"
//                             type="email"
//                             placeholder="Enter email.."
//                         />
//                         <button className="p-2 mb-4">Subscribe</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
//                 <p className="py-4">2025 Ayesha Gadget Store. All rights reserved</p>
//                 <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
//                     {items.map((x, index) => {
//                         return (
//                             <>
//                             <Magnet>

//                                 <x.icon key={index} className="hover:text-white" />
//                             </Magnet>
//                             </>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//       </>

//     );
// };

// export default Footer;
import Image from "next/image";
import React from "react";
import Logo from "../../public/OnlineStorelogo.png";

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";
import Magnet from "../components/Magnet";

const sections = [
    {
        title: "Company",
        items: ["About", "Ali", "Jobs", "Press", "Partners"],
    },
    {
        title: "Legal",
        items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
    },
];

const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
    return (
      <>
        <div className="pt-16 w-full mt-24 bg-gradient-to-r from-[#000000] to-[#000000] text-gray-300 py-y px-2">
            
            <div className="max-w-[1240px] mx-auto gap-6 grid grid-cols-3 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                {/* Logo Section with More Space */}
                <div className="col-span-1 md:col-span-2 space-y-4"> {/* Adjusted to take more space */}
                   <Magnet>
                    <Image src={Logo} className="object-cover w-48" alt="Ayesha Gadget Store Logo" /> {/* Added alt */}
                    </Magnet> 
                    <Magnet>
                    <p>
                        Ayesha Gadget Store is your one-stop destination for the latest and most
                        innovative gadgets. From cutting-edge smartphones to essential tech
                        accessories, we bring you high-quality products at competitive prices.
                    </p>
                    </Magnet>
                    
                </div>

                {/* Other Sections */}
                {sections.map((section, index) => (
                    <div key={index}>
                        <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className="py-1 text-gray-500 hover:text-white">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter Section */}
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletter</p>
                    <p className="py-4">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    <form className="flex flex-col sm:flex-row">
                        <input
                            className="w-full p-2 mr-4 rounded-md mb-4"
                            type="email"
                            placeholder="Enter email.."
                        />
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2025 Ayesha Gadget Store. All rights reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    {items.map((x, index) => {
                        return (
                            <Magnet key={index}>
                                <a href={x.link} target="_blank" rel="noopener noreferrer">
                                    <x.icon className="hover:text-white" />
                                </a>
                            </Magnet>
                        );
                    })}
                </div>
            </div>
        </div>
      </>

    );
};

export default Footer;
