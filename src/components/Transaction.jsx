// pages/transactions.js
import React from 'react';
import Layout from './Layout';
import TransactionTable from '../components/TransactionTable';

// Sample data for the table
const transactionsData = [
  { username: 'johndoe', type: 'Top-Up', id: 'TX1234567890', amount: '₦50,000', status: 'Completed', time: '10:30 AM, Apr 20, 2024' },
  { username: 'janedoe', type: 'Received', id: 'TX0987654321', amount: '₦30,000', status: 'Pending', time: '11:00 AM, Apr 19, 2024' },
  { username: 'janedoe', type: 'sent', id: 'TX0987654321', amount: '₦30,000', status: 'Pending', time: '11:00 AM, Apr 19, 2024' },
  // Add more transactions as needed...
  // You can generate more sample transactions or fetch them from an API
];

const TransactionsPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <TransactionTable transactions={transactionsData} />
    </Layout>
  );
};

export default TransactionsPage;
