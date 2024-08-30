// pages/index.js
import Layout from './Layout';
import Card from './Card';
import RecentPayments from './RecentPayments.jsx';
import RecentActivity from './RecentActivity';
import RecentJobs from './RecentJobs';
import PieChart from './PieChart';

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card title="All Users" value="1000"  />
        <Card title="Verified Users" value="700" percentage="70%" color="green" />
        <Card title="Unverified Users" value="300" percentage="30%" color="red" />
        <Card title="Total Transactions" value="36.6K"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* <RecentPayments /> */}
        <RecentActivity />
        <PieChart />
      </div>

      <div className="hidden md:block mb-6">
        <RecentJobs />
      </div>
      </main>
    </Layout>
  );
}
