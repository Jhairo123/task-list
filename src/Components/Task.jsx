/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../createContext";

export default function Task({ id, title, description, state }) {
  const [isVisible, setIsVisible] = useState(true);
  const [editField, setEditField] = useState({
    title: title,
    description: description,
  });
  const { handleTaskEdit, handleTaskDelete, handleCheckboxChange } =
    useContext(MyContext);

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
      className="content-tasks"
      id={isVisible ? "content-task" : "content-edit-task"}
    >
      <div className={isVisible ? "content-show" : "content-hiden"}>
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
          type="checkbox"
          checked={state}
          onChange={(e) => handleCheckboxChange(id, e)}
        />
        {/* Label tarea */}
        <label className="label">{title}</label>
        {/* Label descripcion */}
        <br />
        <label className="lbl2">{description}</label>
      </div>
      <div className={isVisible ? "content-hiden" : "content-show"}>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            id="input-text"
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Renombrar la tarea"
            onChange={handleOnChange}
          />
          <textarea
            className="input"
            id="input-textarea"
            name="description"
            defaultValue={description}
            placeholder="Editar la descripcion"
            onChange={handleOnChange}
          />
          <br />
          <button
            className="button-cancel-edit"
            type="button"
            onClick={() => handleToggleVisibility()}
          >
            Cancelar
          </button>
          <button className="button-save-edit" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
