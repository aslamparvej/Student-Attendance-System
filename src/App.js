import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import StudentAttendanceSystem from './components/StudentAttendanceSystem';



const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<StudentAttendanceSystem />}/>
        
      </Routes>
    </div>
  );
};

export default App;
