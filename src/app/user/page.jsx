// pages/user.js
import User from '../../components/User';
import Sidebar from '../../components/Sidebar'

const UserPage = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1">
        <User />
      </main>
    </div>
  );
};

export default UserPage;
