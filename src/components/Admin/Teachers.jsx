import React from "react";
import { Link } from "react-router-dom";

import "./Students.css";

const Teachers = () => {
  return (
    <div className="students-details-container" id="studentsDetailsContainer">
      <h2 className="custom-heading-2">Teachers Details</h2>
      <div className="add-new-student-link">
        <Link to="/teachers/register">
          <button className="custom-btn custom-primary-btn">
            Add New Teacher
          </button>
        </Link>
      </div>
      <div className="students-details-table-container"></div>
    </div>
  );
};

export default Teachers;
