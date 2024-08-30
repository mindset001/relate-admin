// components/RecentJobs.js
const RecentJobs = () => {
    const jobs = [
        { username: 'johndoe', type: 'Top-Up', id: 'TX1234567890', amount: '₦50,000', status: 'Completed', time: '10:30 AM, Apr 20, 2024' },
        { username: 'janedoe', type: 'Received', id: 'TX0987654321', amount: '₦30,000', status: 'Pending', time: '11:00 AM, Apr 19, 2024' },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Transaction</h3>
        <ul>
          {jobs.map((job, index) => (
            <li key={index} className="mb-3">
              <div className="flex justify-between">
                <span>{job.username}</span>
                <span>{job.type}</span>
                <span>{job.time}</span>
                <span>{job.id}</span>
                <span className={`font-bold ${job.status === 'Completed' ? 'text-green-600' : 'text-blue-600'}`}>{job.status}</span>
                <span className="font-bold">{job.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentJobs;
  