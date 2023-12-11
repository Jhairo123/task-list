import "../styles/menu.css";
import React from "react";
import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/Home" className="navigation-link">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            Lista de tareas
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/AboutUs" className="navigation-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
