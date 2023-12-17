import React from "react";
import { Link } from "react-router-dom";

import "./Students.css";

const Staff = () => {
  return (
    <div className="students-details-container" id="studentsDetailsContainer">
      <h2 className="custom-heading-2">Staff Details</h2>
      <div className="add-new-student-link">
        <Link to="/staff/register">
          <button className="custom-btn custom-primary-btn">
            Add New Staff
          </button>
        </Link>
      </div>
      <div className="students-details-table-container"></div>
    </div>
  );
};

export default Staff;
