// components/Card.js
const Card = ({ title, value, percentage, icon, color }) => {
    return (
      <div className={`bg-white p-4 rounded-lg shadow-sm`}>
        <div className="flex items-center justify-between">
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className={`text-${color}-600`}>
            <span className="text-lg">{percentage}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  