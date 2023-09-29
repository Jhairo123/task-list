/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Task({ mensaje, descripcion }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isCheckedValue")
  );

  useEffect(() => {
    const savedIsCheckedValue = localStorage.getItem("isCheckedValue");
    if (savedIsCheckedValue) {
      setIsChecked(savedIsCheckedValue);
      // console.log(savedIsCheckedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isCheckedValue", isChecked); // Guarda inputValue
  }, [isChecked]);
  //Agrega esta funcion handleCheckboxChange al hook personalizado
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // localStorage.setItem("isCheckedValue", isChecked);
    // console.log(isChecked);
  };

  const handleImageClick = () => {};

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

      {/* imagen editar */}
      <img
        className="imagen"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgSizhklDH657yz3n7DSH6nCripsKtMhds9M8xic_cZm04rHSkwiNcg_fg502AWSC48g&usqp=CAU"
        onClick={handleImageClick}
      />

      {/* imagen eliminar */}
      <img
        className="imagen"
        src="https://png.pngtree.com/png-clipart/20220926/original/pngtree-delete-button-3d-icon-png-image_8633077.png"
        onClick={handleImageClick}
      />

      {/* Label descripcion */}
      <label className="lbl2">{descripcion}</label>
    </div>
  );
}
