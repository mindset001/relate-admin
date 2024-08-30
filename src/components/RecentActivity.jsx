// components/RecentActivity.js
const RecentActivity = () => {
    const activities = [
      {
        date: '20 Apr. 2024',
        timeAgo: '10 mins ago',
        content: '2 New people joined',
        highlighted: '',
        color: 'bg-teal-500',
      },
    //   {
    //     date: '20 Apr. 2024',
    //     timeAgo: '50 mins ago',
    //     content: '20 New jobs posted.',
    //     highlighted: '',
    //     color: 'bg-blue-500',
    //   },
      {
        date: '19 Apr. 2024',
        timeAgo: '1 day ago',
        content: 'Abdulul replied to support request.',
        highlighted: '',
        color: 'bg-green-500',
      },
      {
        date: '16 Apr. 2024',
        timeAgo: '4 days ago',
        content: '2 New',
        highlighted: 'KYC updated.',
        color: 'bg-red-500',
      },
    //   {
    //     date: '8 Apr. 2024',
    //     timeAgo: '1 week ago',
    //     content: 'New message from',
    //     highlighted: 'Labi to Mammudo.',
    //     color: 'bg-teal-500',
    //   },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          {/* <div className="flex space-x-2">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">This Week</button>
            <button className="px-4 py-2 bg-gray-200 text-teal-600 rounded-lg">Last Week</button>
            <button className="px-4 py-2 bg-gray-200 text-teal-600 rounded-lg">Last Month</button>
          </div> */}
        </div>
        <ul>
          {activities.map((activity, index) => (
            <li key={index} className="mb-6 flex">
              <div className="flex-shrink-0">
                <div className={`w-4 h-4 ${activity.color} rounded-full`}></div>
                <div className="h-full border-l-2 border-gray-300 ml-2"></div>
              </div>
              <div className="ml-4">
                <div className="text-gray-600">{activity.date}</div>
                <div className="text-xs text-gray-400 mb-2">{activity.timeAgo}</div>
                <div className="text-sm">
                  {activity.content}{' '}
                  {activity.highlighted && (
                    <span className="font-semibold text-teal-600">{activity.highlighted}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentActivity;
  