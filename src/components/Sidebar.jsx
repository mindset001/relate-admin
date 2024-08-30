// components/Sidebar.js
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-teal-600 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Reflection</h2>
      </div>
      <nav>
        <ul>
          <li className={`mb-4 ${router.pathname === '/dashboard' ? 'text-teal-300' : ''}`}>
            <Link href="/dashboard">
              <p className="hover:text-teal-300">Dashboard</p>
            </Link>
          </li>
          <li className={`mb-4 ${router.pathname === '/user' ? 'text-teal-300' : ''}`}>
            <Link href="/user">
              <p className="hover:text-teal-300">User</p>
            </Link>
          </li>
          <li className={`mb-4 ${router.pathname === '/user' ? 'text-teal-300' : ''}`}>
            <Link href="/user">
              <p className="hover:text-teal-300">Transactions</p>
            </Link>
          </li>
          <li className={`mb-4 ${router.pathname === '/settings' ? 'text-teal-300' : ''}`}>
            <Link href="/settings">
              <p className="hover:text-teal-300">Settings</p>
            </Link>
          </li>
          <li>
            <p href="#" className="hover:text-teal-300">Log Out</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
