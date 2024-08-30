import Image from 'next/image';
import React from 'react';
import Man from '../../public/images/man2.png'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Reflection</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/dashboard" className="text-lg font-semibold">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="/user" className="text-lg font-semibold">User</a>
            </li>
            <li className="mb-4">
              <a href="/transaction" className="text-lg font-semibold">Transactions</a>
            </li>
            <li className="mb-4">
              <a href="/settings" className="text-lg font-semibold">Settings</a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">Logout</a>
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
          
            <Image src={Man} alt=''   className="w-10 h-10 rounded-full object-cover" />
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
