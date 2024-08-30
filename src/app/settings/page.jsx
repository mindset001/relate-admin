// pages/settings.js
import Settings from '../components/Settings';

const SettingsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Settings />
      </main>
    </div>
  );
};

export default SettingsPage;
