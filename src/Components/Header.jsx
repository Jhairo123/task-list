import { Link } from "react-router-dom";
import "../styles/header.css";
import logoImg from "../img/img.jpg";
import menuImg from "../img/menu.png";
/* eslint-disable react/prop-types */
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="content-logo">
          <img src={logoImg} alt="Logo" />
          <h1>Lista de tareas</h1>
        </div>
        <div className="boton">
          <label htmlFor="btn-menu">
            <img className="img-menu" src={menuImg} alt="Logo" />
          </label>
        </div>
        <input type="checkbox" id="btn-menu" />
        <nav className="nav-menu">
          <Link className="li" to="/Home">
            Home
          </Link>

          <Link className="li" to="/">
            Lista de tareas
          </Link>

          <Link className="li" to="/AboutUs">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
