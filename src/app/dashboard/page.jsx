// pages/dashboard.js
import Dashboard from '../../components/Dashboard';
import Sidebar from '../../components/Sidebar'

const DashboardPage = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
