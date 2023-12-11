export default function HomePage() {
  return (
    <>
      <h1>Lista de tareas</h1>
      <div style={{ textAlign: "justify", textJustify: "inter-word" }}>
        <h2>¿Qué es mi producto y para que sirve?</h2>
        <p>
          Mi producto es una aplicación de lista de tareas ✅.
          <br />
          Se ha diseñado para ayudar a los usuarios a administrar y organizar
          sus actividades diarias, proyectos y responsabilidades de manera
          eficiente y sin complicaciones. Con mi aplicación, los usuarios pueden
          crear, editar, eliminar y visualizar sus tareas en una lista.
          Permitiéndoles mantenerse enfocados en sus objetivos y tareas
          pendientes.
        </p>
        <h2>
          ¿Cuáles son las funcionalidades más importantes y porque los usuarios
          las usarían?
        </h2>
        <p>
          Mi aplicación de lista de tareas ✅ ofrece una serie de
          funcionalidades clave que hacen que sea una herramienta indispensable
          para la gestión efectiva de tareas:
        </p>
        <nav>
          <ul>
            <li>
              <b> Crear, editar y eliminar tareas:</b> Los usuarios pueden crear
              nuevas tareas de manera rápida y sencilla, asignarles un título y
              proporcionar una descripción detallada. Además, tienen la
              flexibilidad de editar o eliminar tareas en cualquier momento, lo
              que les permite adaptar sus listas de acuerdo a sus necesidades
              cambiantes.
            </li>
            <br />
            <li>
              <b>Titulo y descripcion: </b>
              Cada tarea debe incluir un título y una descripción. Esta
              funcionalidad es especialmente útil cuando se tratan tareas más
              complejas o proyectos en los que se requiere documentar
              información adicional para una comprensión completa.
            </li>
            <br />
            <li>
              <b>Seguimiento de las tareas completadas:</b> Una de las
              funcionalidades más importantes es la capacidad de marcar las
              tareas como completadas. Esto permite a los usuarios realizar un
              seguimiento efectivo de su progreso y tener una sensación de logro
              a medida que avanzan en sus actividades.
            </li>
            <br />
            <li>
              <b>Visualización de tareas completadas y pendientes:</b> Los
              usuarios pueden acceder fácilmente a tres listas principales: una
              lista de tareas completadas, una lista de tareas pendientes y por
              último una lista de todas las tareas. Esto les brinda una visión
              clara de lo que han logrado y de lo que aún deben realizar.
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
