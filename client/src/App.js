import './App.css';
import StudentAttendanceSystem from './components/StudentAttendanceSystem';

function App() {
  return (
    <div className="App">
      <h1>Student Attendance System</h1>
      <h3>{new Date().toLocaleDateString()}</h3>
      <StudentAttendanceSystem />
    </div>
  );
}

export default App;
