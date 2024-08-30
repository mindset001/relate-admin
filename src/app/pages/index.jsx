// pages/index.js
import Layout from '../components/Layout';
import Card from '../components/Card';

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="All Jobs" value="36.6K" percentage="+12%" color="green" />
        <Card title="New Jobs" value="36.6K" percentage="-10%" color="red" />
        <Card title="Ongoing Jobs" value="36.6K" percentage="-10%" color="red" />
        <Card title="Completed Jobs" value="36.6K" percentage="+10%" color="blue" />
      </div>
      {/* Add more components like RecentPayments, RecentActivity, etc. */}
    </Layout>
  );
}
