import "../styles/loading.css";
export default function Loading() {
  return (
    <>
      <div className="container-loading">
        <div className="cargando">
          <div className="pelotas"></div>
          <div className="pelotas"></div>
          <div className="pelotas"></div>
          <span className="texto-cargando">Cargando...</span>
        </div>
      </div>
    </>
  );
}
