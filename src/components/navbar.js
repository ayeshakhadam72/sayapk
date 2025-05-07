// import React from 'react';
// import Link from "next/link";
// import Image from 'next/image';


// import Icon from "../../public/icon.png";
// import Logo from "../../public/logosaya.png";

// const Navbar = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full z-50 flex justify-between px-10 py-4 bg-white bg-opacity-50 items-end">
//       <div className="flex items-end space-x-2">
//         <Image src={Icon} alt="Icon" width={20} height={20}  className='pb-1'/>
//         <Image src={Logo} alt="Logo" width={100} height={30} />
//       </div>

//       <nav>
//         <ul className="space-x-6 text-black uppercase text-[11px] flex">
//           <li><Link className="hover:underline" href="/">search</Link></li>
//           <li><Link className="hover:underline" href="/">account</Link></li>
//           <li><Link className="hover:underline" href="/">wishlist</Link></li>
//           <li><Link className="hover:underline" href="/">cart</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import Icon from "../../public/icon.png";
import Logo from "../../public/logosaya.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between px-10 py-4 bg-opacity-50 items-end">
      <div className="flex items-end space-x-2">
        <Image src={Icon} alt="Icon" width={20} height={20}  className='pb-1'/>
        <Image src={Logo} alt="Logo" width={100} height={30} />
      </div>

      <nav>
        <ul className="space-x-6 text-black uppercase text-[11px] flex">
          <li><Link className="hover:underline" href="/">search</Link></li>
          <li><Link className="hover:underline" href="/">account</Link></li>
          <li><Link className="hover:underline" href="/">wishlist</Link></li>
          <li><Link className="hover:underline" href="/">cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
