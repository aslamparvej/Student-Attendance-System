import React from "react";

import { Link } from "react-router-dom";

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
              <div className="card-body">
                <div className="card-body-content stat-total-no-student">
                  <p className="card-body-text stat-total-no-student-text">Total Number of Students</p>
                  <p className="card-body-value stat-total-no-student-value"><Link to="/students">400</Link><sup className="increase-value">+20</sup></p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-body-content stat-total-no-student">
                  <p className="card-body-text stat-total-no-student-text">Total Number of Teachers</p>
                  <p className="card-body-value stat-total-no-student-value"><Link to="/teachers">36</Link><sup className="increase-value">+2</sup></p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-body-content stat-total-no-student">
                  <p className="card-body-text stat-total-no-student-text">Total Number of Staff</p>
                  <p className="card-body-value stat-total-no-student-value"><Link to="/staff">21</Link><sup className="increase-value">+2</sup></p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-body-content stat-total-no-student">
                  <p className="card-body-text stat-total-no-student-text">Total Earning</p>
                  <p className="card-body-value stat-total-no-student-value"><Link to="/earning">$325M</Link><sup className="increase-value">+20M</sup></p>
                </div>
              </div>
            </div>
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
