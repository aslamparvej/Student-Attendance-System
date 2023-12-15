import { Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
        <Link to="/" className="logo-text">School Portal</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
