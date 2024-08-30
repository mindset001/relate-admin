'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import Man from '../../public/images/man2.png';

const Layout = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#D024C2] text-white shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FiMenu className="text-2xl" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-16 left-4 bg-white text-[#D024C2] shadow-md rounded-lg w-48">
              <ul>
                <li className="border-b">
                  <Link href="/dashboard" passHref>
                    <p className="text-lg font-semibold block p-2 cursor-pointer">Dashboard</p>
                  </Link>
                </li>
                <li className="border-b">
                  <Link href="/user" passHref>
                    <p className="text-lg font-semibold block p-2 cursor-pointer">User</p>
                  </Link>
                </li>
                <li className="border-b">
                  <Link href="/transaction" passHref>
                    <p className="text-lg font-semibold block p-2 cursor-pointer">Transactions</p>
                  </Link>
                </li>
                <li className="border-b">
                  <Link href="/settings" passHref>
                    <p className="text-lg font-semibold block p-2 cursor-pointer">Settings</p>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <p className="text-lg font-semibold block p-2 cursor-pointer">Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white">Hello, Austine</span>
          <Image src={Man} alt="Profile picture" className="w-10 h-10 rounded-full object-cover" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
