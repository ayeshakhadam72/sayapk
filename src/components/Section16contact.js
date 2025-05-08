


import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logosaya.png"

import {
    Mail,
    Phone,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full h-[100vh] relative bg-[#f6f6f6] text-[#1f1f1f] ">
            {/* Center Logo */}
            <div className="mb-10 md:mb-20 mt-4 md:pt-16 lg:pt-40 flex justify-center">
                <Image src={Logo}
                    className=" pt-20 sm:pt-0 object-cover "
                />
            </div>
            
            <div className="container mx-auto px-4">
                {/* Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-sm">
                    {/* Contact Info */}
                    <div className="space-y-3 mb-6 md:mb-0">
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                            <a href="mailto:sale@saya.pk" className="hover:text-gray-600 transition-colors">sale@saya.pk</a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                            <a href="tel:+922138227292" className="hover:text-gray-600 transition-colors">+9221 3822 (7292)</a>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a href="https://wa.me/922138227292" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                                <FaWhatsapp className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Help & Info */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-semibold pb-3 md:pb-4 text-base">Help & Information</h4>
                        <ul className="space-y-3 md:space-y-5">
                            <li>
                                <Link href="/blogs" className="hover:text-gray-600 transition-colors">Blogs</Link>
                            </li>
                            <li>
                                <Link href="/track-order" className="hover:text-gray-600 transition-colors">Track Your Order</Link>
                            </li>
                            <li>
                                <Link href="/shipping-return" className="hover:text-gray-600 transition-colors">Shipping & Return</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-semibold pb-3 md:pb-4 text-base">Customer Care</h4>
                        <ul className="space-y-3 md:space-y-5">
                            <li>
                                <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="font-semibold pb-3 md:pb-4 text-base">Newsletter Signup</h4>
                        <p className="text-sm pb-3 md:pb-4">Subscribe to our newsletter</p>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full px-3 py-3 md:py-4 bg-transparent border border-gray-600 rounded-full text-black focus:outline-none focus:border-gray-500 pr-24 md:pr-32 text-sm"
                            />
                            <button 
                                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 md:px-10 py-2 md:py-3 bg-black hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors text-xs md:text-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-xs sm:text-sm mt-10 md:mt-16 lg:mt-24 pt-6 md:pt-10 lg:pt-16 border-t border-gray-300">
                    <p className="text-center md:text-left">
                        Copyright © {new Date().getFullYear()} <strong>SAYA</strong> all
                        rights reserved. Powered by Alchemative
                    </p>
                </div>
            </div>
        </footer>
    );
}
// import Link from "next/link";
// import Image from "next/image";
// // import Logo from "../../public/logosaya.png"

// import {
//     Mail,
//     Phone,
//     Facebook,
//     Instagram,
//     Youtube,
//     Images,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// export default function Footer() {
//     return (
//         <footer className="h-[100%] w-[100%] relative bg-[#f6f6f6] text-[#1f1f1f] pt-16 pb-8">
//             {/* Center Logo */}
//             <div className="mb-20 pt-80 flex justify-center">

//                 <Image
//                     src="/logosaya.png" // Replace with actual logo path
//                     alt="Saya Logo"
//                     width={200}
//                     height={200} className="object-cover"
//                 />
//             </div>
//             {/*  */}
//             <div className="container mx-auto px-4">
//                 {/* Footer Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
//                     {/* Contact Info */}
//                     <div className="space-y-3">
//                         <div className="flex items-center">
//                             <Mail className="w-4 h-4 mr-2" />
//                             <a href="mailto:sale@saya.pk">sale@saya.pk</a>
//                         </div>
//                         <div className="flex items-center">
//                             <Phone className="w-4 h-4 mr-2" />
//                             <a href="tel:+922138227292">+9221 3822 (7292)</a>
//                         </div>
//                         <div className="flex items-center space-x-4 mt-2">
//                             <a href="https://facebook.com" target="_blank" rel="noreferrer">
//                                 <Facebook className="w-4 h-4" />
//                             </a>
//                             <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                                 <Instagram className="w-4 h-4" />
//                             </a>
//                             <a href="https://youtube.com" target="_blank" rel="noreferrer">
//                                 <Youtube className="w-4 h-4" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Help & Info */}
//                     <div className="">
//                         <h4 className="font-semibold  pb-4">Help & Information</h4>

//                         <ul className="space-y-5">
//                             <li>
//                                 <Link href="/blogs">Blogs</Link>
//                             </li>
//                             <li>
//                                 <Link href="/track-order">Track Your Order</Link>


//                             </li>
//                             <li>
//                                 <Link href="/shipping-return">Shipping & Return</Link>


//                             </li>



//                         </ul>
//                     </div>

//                     {/* Customer Care */}
//                     <div className="">
//                         <h4 className="font-semibold pb-4">Customer care</h4>
//                         <ul className="space-y-5">
//                             <li>
//                             <Link href="/contact">Contact us</Link>

//                             </li>
//                             <li>
//                             <Link href="/privacy-policy">Privacy Policy</Link>
//                             </li>
//                             <li>
//                             <Link href="/terms">Terms of use</Link>
//                             </li>

//                         </ul>
//                     </div>

//                     {/* Newsletter Signup */}
//                     <div>
//                         <h4 className="font-semibold pb-4">Newsletter Signup</h4>
//                         <p className="text-sm pb-4">Subscribe to our newsletter</p>
//                         {/* <form className="flex flex-col space-y-2">
//                             <input
//                                 type="email"
//                                 placeholder="Your email"
//                                 className="border border-gray-300 px-4 py-2 rounded-md text-sm"
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90"
//                             >
//                                 Subscribe
//                             </button>
//                         </form> */}
//   <div className="relative w-full max-w-md ">
//         <input
//           type="email"
//           placeholder="name@email.com"
        
//           className="w-full px-3 py-4 bg-transparent border border-gray-600 rounded-full text-black focus:outline-none focus:border-gray-500 pr-32"
//         />
//         <button 
//           className="absolute right-2 top-1/2 -translate-y-1/2 px-10 py-3 bg-black hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
//         >
//           Subscribe
//         </button>
//       </div>
//                         {/* update krna ha icon use  */}
//                         <div className="mt-3">
                          
//                         </div>
//                     </div>
//                 </div>



//                 {/* Bottom */}
//                 <div className="text-[15px]  pt-40">
//                     <p>
//                         Copyright © {new Date().getFullYear()} <strong>SAYA</strong> all
//                         rights reserved. Powered by Alchemative
//                     </p>
//                 </div>

               
//             </div>
//         </footer>
//     );
// }
