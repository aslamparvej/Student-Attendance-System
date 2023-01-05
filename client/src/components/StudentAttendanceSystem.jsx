import { useState, useEffect } from "react";
import "./StudentAttendanceSystem.css";

const StudentAttendanceSystem = () => {
  // Initialize the list of present students and numberOfStudent
  const [students, setStudents] = useState([]);
  const [numberOfStudents, setNumStudents] = useState([0]);

  // Use effect to update the number of students
  useEffect(() => {
    setNumStudents(students.length);
  }, [students]);

  // Add a new student to the list of present students
  const checkIn = (rollNumber, name) => {
    setStudents([...students, { rollNumber, name, checkInTime: new Date() }]);
  }

  // Update the check-out time for a student
  const checkOut = (rollNumber)=> {
    setStudents(
      students.map((student) => {
        if (student.rollNumber === rollNumber) {
          return { ...student, checkOutTime: new Date() };
        }
        return student;
      })
    );
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkIn(e.target.rollNumber.value, e.target.name.value);
        }}
      >
        <label>
          Roll Number:
          <input type="text" name="rollNumber" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Check In</button>
      </form>
      <h2>
      There are currently {numberOfStudents} students present in the school.
      </h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Checked in at</th>
            <th>Checked out at</th>
            <th>Check out</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNumber}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>
                <span> {student.checkInTime.toLocaleTimeString()}</span>
              </td>
              <td>
                <span>
                  {" "}
                  {student.checkOutTime
                    ? student.checkOutTime.toLocaleTimeString()
                    : "Present"}
                </span>
              </td>
              <td>
                <button onClick={() => checkOut(student.rollNumber)}>
                  Check Out
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAttendanceSystem;
