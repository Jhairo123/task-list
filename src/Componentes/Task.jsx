/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../createContext";

export default function Task({ id, mensaje, descripcion }) {
  const [isVisible, setIsVisible] = useState(true);

  const { handleTaskEdit, handleTaskDelete, handleCheckboxChange, isChecked } =
    useContext(MyContext);

  // const [isChecked, setIsChecked] = useState(
  //   localStorage.getItem("isCheckedValue")
  // );

  // useEffect(() => {
  //   const savedIsCheckedValue = localStorage.getItem("isCheckedValue");
  //   if (savedIsCheckedValue) {
  //     setIsChecked(savedIsCheckedValue);
  //     // console.log(savedIsCheckedValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("isCheckedValue", isChecked); // Guarda inputValue
  // }, [isChecked]);
  // //Agrega esta funcion handleCheckboxChange al hook personalizado
  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  //   // localStorage.setItem("isCheckedValue", isChecked);
  //   // console.log(isChecked);
  // };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      style={{
        display: "inline-block",
        height: "6rem",
        width: "19.5em",
        overflow: "auto",
        backgroundColor: "whitesmoke",
        borderRadius: "1rem",
      }}
    >
      <div style={{ display: isVisible ? "block" : "none" }}>
        {/* imagen editar */}
        <img
          className="imagen"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgSizhklDH657yz3n7DSH6nCripsKtMhds9M8xic_cZm04rHSkwiNcg_fg502AWSC48g&usqp=CAU"
          onClick={() => handleToggleVisibility()}
        />
        {/* imagen eliminar */}
        <img
          className="imagen"
          src="https://png.pngtree.com/png-clipart/20220926/original/pngtree-delete-button-3d-icon-png-image_8633077.png"
          onClick={() => handleTaskDelete(id)}
        />
        <br />
        {/* checkbox */}
        <input
          id="checkbox1"
          type="checkbox"
          className="opcion1"
          checked={JSON.parse(isChecked)}
          onChange={handleCheckboxChange}
        />
        {/* Label tarea */}
        <label className="label">{mensaje}</label>
        {/* Label descripcion */}
        <br />
        <label className="lbl2">{descripcion}</label>
      </div>
      <div style={{ display: !isVisible ? "block" : "none" }}>
        <form onSubmit={handleTaskEdit}>
          <input
            style={{ width: "12.5rem", height: "1rem" }}
            type="text"
            placeholder="Renombrar la tarea"
          />
          <textarea
            style={{ width: "12.5rem", height: "1.5rem" }}
            placeholder="Editar la descripcion"
          />
          <br />
          <button type="submit">Guardar</button>
          <button onClick={handleToggleVisibility}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}
