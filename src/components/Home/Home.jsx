import React from "react";

import './Home.css';

// import StudentAttendanceSystem from "../StudentAttendanceSystem";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-left">
        work in progress
      </div>
      <div className="home-container-right" >
        <div className="home-container-details">
            <h3>Admin  Dashboard</h3>
            <p>Home</p>
        </div>
        <div className="stats-container">
            <div className="card">

            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        <div className="graph-stats-container">
            <div className="card card-xl w-2x"></div>
            <div className="card card-xl"></div>
            <div className="card card-xl"></div>
        </div>
        <div className="notification-container">
        <div className="card card-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
