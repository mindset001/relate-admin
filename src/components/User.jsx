import React from 'react'
import Layout from './Layout'
import UserTable from './UserTable';

// Sample data for the table
const usersData = [
  { username: 'johndoe', verificationStage: 'Verified', walletBalance: '₦50,000', email: 'johndoe@example.com' },
  { username: 'janedoe', verificationStage: 'Pending', walletBalance: '₦30,000', email: 'janedoe@example.com' },
  // Add more users as needed...
  // You can generate more sample users or fetch them from an API
];

function User() {
  return (
    <main>
        <Layout>
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <UserTable users={usersData} />
        </Layout>
    </main>
  )
}

export default User