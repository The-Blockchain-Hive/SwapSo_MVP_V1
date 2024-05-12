import React from "react";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>Welcome to Your Dashboard</h2>
      </div>
      <div className="user-profile">
        <FaUser size={50} />
        <span className="username">John Doe</span>
      </div>
      {/* Add more dashboard content as needed */}
    </div>
  );
};

export default Dashboard;
