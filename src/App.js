import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import StudentAttendanceSystem from './components/StudentAttendanceSystem';
import Students from "./components/Admin/Students";
import Teachers from "./components/Admin/Teachers";
import Staff from "./components/Admin/Staff";
import ModalForm from "./components/UI/ModalForm";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route
          path="/students/register"
          element={
            <ModalForm
              formDetails={formObjectForStudentRegistration}
              actions="students/register"
              parentRoute="/students"
              formTitle="Student Registration Form"
            />
          }
        />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/teachers/register"
          element={
            <ModalForm
              formDetails={formObjectForTeacherRegistration}
              actions="teachers/register"
              parentRoute="/teachers"
              formTitle="Teacher Registration Form"
            />
          }
        />
        <Route path="/staff" element={<Staff />} />
        <Route
          path="/staff/register"
          element={
            <ModalForm
              formDetails={formObjectForStaffRegistration}
              actions="staff/register"
              parentRoute="/staff"
              formTitle="Staff Registration Form"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

const formObjectForStudentRegistration = [
  {
    "input-field-label": "Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Peter Parker",
  },
  {
    "input-field-label": "Father Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Richard Parker",
  },
  {
    "input-field-label": "Mother Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Mary Parker",
  },
];
const formObjectForTeacherRegistration = [
  {
    "input-field-label": "Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Peter Parker",
  },
  {
    "input-field-label": "Father Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Richard Parker",
  },
  {
    "input-field-label": "Mother Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Mary Parker",
  },
];
const formObjectForStaffRegistration = [
  {
    "input-field-label": "Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Peter Parker",
  },
  {
    "input-field-label": "Father Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Richard Parker",
  },
  {
    "input-field-label": "Mother Name",
    "input-field-type": "text",
    "input-field-placeholder": "e.g. Mary Parker",
  },
];
