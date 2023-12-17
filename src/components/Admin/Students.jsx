import React from 'react';
import { Link } from 'react-router-dom';


import './Students.css';


const Students = () => {
  return (
    <div className='students-details-container' id='studentsDetailsContainer'>
      <h2 className='custom-heading-2'>Students Details</h2>
      <div className='add-new-student-link'><button className='custom-btn custom-primary-btn'><Link to="/students/register" >Add New Student</Link></button></div>
      <div className="students-details-table-container">
      
      </div>
      
    </div>
  )
}

export default Students;




