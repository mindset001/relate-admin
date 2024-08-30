'use client';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Man from '../../public/images/man2.png';

const Layout = ({ children }) => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path) => {
    return pathname === path ? 'bg-white text-[#D024C2] rounded-lg' : 'text-white';
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#D024C2] text-white p-5">
        <h2 className="text-2xl mb-8 uppercase font-[900] italic">Relate</h2>
        <nav>
          <ul>
            <li className={`mb-4 rounded-lg ${isActive('/dashboard')}`}>
              <Link href="/dashboard">
                <p className={`text-lg font-semibold block p-2 cursor-pointer ${isActive('/dashboard')}`}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className={`mb-4 rounded-lg ${isActive('/user')}`}>
              <Link href="/user">
                <p className={`text-lg font-semibold block p-2 cursor-pointer ${isActive('/user')}`}>
                  User
                </p>
              </Link>
            </li>
            <li className={`mb-4 rounded-lg ${isActive('/transaction')}`}>
              <Link href="/transaction">
                <p className={`text-lg font-semibold block p-2 cursor-pointer ${isActive('/transaction')}`}>
                  Transactions
                </p>
              </Link>
            </li>
            <li className={`mb-4 rounded-lg ${isActive('/settings')}`}>
              <Link href="/settings">
                <p className={`text-lg font-semibold block p-2 cursor-pointer ${isActive('/settings')}`}>
                  Settings
                </p>
              </Link>
            </li>
            <li className="rounded-lg">
              <Link href="/">
                <p className="text-lg font-semibold block p-2 cursor-pointer">
                  Logout
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-sm">
          <div className="flex items-center w-1/2">
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" 
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hello, Austine</span>
            <Image src={Man} alt="Profile picture" className="w-10 h-10 rounded-full object-cover" />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
