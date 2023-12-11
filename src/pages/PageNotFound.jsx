import { Link } from "react-router-dom";
import "../styles/pageNotFound.css";
export default function PageNotFound() {
  return (
    <div>
      <h1>404 - página no encontrada</h1>
      <p className="zoom-area">
        La página que estas buscando <b>no existe</b>.
      </p>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Ir a la página principal
        </Link>
      </div>
    </div>
  );
}
