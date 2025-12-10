import React from "react";
import { FiUsers, FiCheckCircle, FiClock, FiClipboard } from "react-icons/fi";

const OverView = () => {
  const stats = [
    {
      title: "Total Tasks",
      value: 320,
      icon: <FiClipboard />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Completed Tasks",
      value: 220,
      icon: <FiCheckCircle />,
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Pending Tasks",
      value: 80,
      icon: <FiClock />,
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Team Members",
      value: 12,
      icon: <FiUsers />,
      bg: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center p-6 bg-white  shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <div className={`p-4 rounded-full ${stat.bg} text-2xl`}>
            {stat.icon}
          </div>
          <div className="ml-4">
            <h4 className="text-gray-500">{stat.title}</h4>
            <p className={`text-xl font-bold ${stat.textColor}`}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverView;
