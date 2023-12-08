/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../createContext";

export default function Task({ id, title, description }) {
  const [isVisible, setIsVisible] = useState(true);
  const [editField, setEditField] = useState({
    title: "",
    description: "",
  });
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
  const handleSubmit = (e) => {
    e.preventDefault();
    handleTaskEdit(id, editField);
    handleToggleVisibility();
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(editField);

    setEditField({ ...editField, [name]: value });
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
          onChange={(e) => handleCheckboxChange(e)}
        />
        {/* Label tarea */}
        <label className="label">{title}</label>
        {/* Label descripcion */}
        <br />
        <label className="lbl2">{description}</label>
      </div>
      <div style={{ display: !isVisible ? "block" : "none" }}>
        <form
          style={{
            display: "inline",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{ width: "12.5rem", height: "1rem" }}
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Renombrar la tarea"
            onChange={handleOnChange}
          />
          <textarea
            style={{ width: "12.5rem", height: "1.5rem" }}
            name="description"
            defaultValue={description}
            placeholder="Editar la descripcion"
            onChange={handleOnChange}
          />
          <br />
          <button type="submit">Guardar</button>
        </form>
        <button onClick={() => handleToggleVisibility()}>Cancelar</button>
      </div>
    </div>
  );
}
