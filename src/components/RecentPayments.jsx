// components/RecentPayments.js
const RecentPayments = () => {
    const payments = [
      {
        name: 'Austine Asteria',
        date: 'Mar. 27, 2024 - 11:45AM',
        amount: '₦20,000',
        avatarColor: 'bg-teal-100 text-teal-600',
      },
      {
        name: 'Austine Asteria',
        date: 'Mar. 27, 2024 - 11:45AM',
        amount: '₦20,000',
        avatarColor: 'bg-yellow-100 text-yellow-600',
      },
      {
        name: 'Austine Asteria',
        date: 'Mar. 27, 2024 - 11:45AM',
        amount: '₦20,000',
        avatarColor: 'bg-blue-100 text-blue-600',
      },
      {
        name: 'Austine Asteria',
        date: 'Mar. 27, 2024 - 11:45AM',
        amount: '₦20,000',
        avatarColor: 'bg-green-100 text-green-600',
      },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Payments</h3>
          <a href="#" className="text-teal-600 hover:underline">
            View all &rarr;
          </a>
        </div>
        <ul>
          {payments.map((payment, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${payment.avatarColor} mr-4`}
                >
                  <span className="font-bold">{payment.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">{payment.name}</div>
                  <div className="text-sm text-gray-500">{payment.date}</div>
                </div>
              </div>
              <div className="font-bold text-gray-800">{payment.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentPayments;
  