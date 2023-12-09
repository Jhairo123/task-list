import React from "react";
import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/">Lista de tareas</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
