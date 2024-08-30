// pages/user.js
import Transaction from '../../components/Transaction'
import Sidebar from '../../components/Sidebar'

const UserPage = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1">
        <Transaction />
      </main>
    </div>
  );
};

export default UserPage;
