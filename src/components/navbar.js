
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';

import Icon from '../../public/icon.png';
import Logo from '../../public/logosaya.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between px-6 py-4  bg-opacity-50   items-end">
      {/* Left: Logo */}
      <div className="flex items-end space-x-2">
        <Image src={Icon} alt="Icon" width={20} height={20} className="pb-1" />
        <Image src={Logo} alt="Logo" width={100} height={30} />
      </div>

      {/* Right: Navigation */}
      <nav>
        <ul className="flex space-x-6 text-black uppercase text-[11px] items-center">
          <li>
            <Link href="/" className="flex items-center space-x-1">
              <CiSearch className="text-xl md:hidden mb-[-2px] "  />
              <span className="hidden md:inline">search</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-1">
              <VscAccount className="text-xl md:hidden" />
              <span className="hidden md:inline">account</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-1">
              <CiShoppingCart  className="text-2xl md:hidden mb-[-3px]" />
              <span className="hidden md:inline">wishlist</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-1">
              
              <span className="hidden md:inline">cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
