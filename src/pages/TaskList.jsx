/* eslint-disable react/prop-types */
import Task from "../Components/Task.jsx";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../createContext.js";

export default function TaskList() {
  const {
    handleButtonAdd,
    handleButtonDelete,
    dataList,
    setDataList,
    inputValue,
    setInputValue,
    textAreaValue,
    setTextAreaValue,
  } = useContext(MyContext);

  const [error, setError] = useState({
    inputText: "",
    textArea: "",
  });

  //Esta variable permite que el use effect se ejecute una sola vez
  let effectIsOn = false;
  useEffect(() => {
    const savedInputValue = localStorage.getItem("inputValue");
    const savedTextAreaValue = localStorage.getItem("textAreaValue");
    const savedDataList = JSON.parse(localStorage.getItem("dataList"));
    //Se ejecuta dos veces por alguna razón que desconozco
    // console.log(savedDataList);
    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
    if (savedTextAreaValue) {
      setTextAreaValue(savedTextAreaValue);
    }
    if (savedDataList) {
      if (effectIsOn == false) {
        effectIsOn = true;
        // console.log(effectIsOn);
        setDataList(savedDataList);
      }
    }
  }, []); //Esto se muestra cuando se monta el componente (una sola vez)

  useEffect(() => {
    localStorage.setItem("inputValue", inputValue); // Guarda inputValue
    localStorage.setItem("textAreaValue", textAreaValue); // Guarda textareaValue
    localStorage.setItem("dataList", JSON.stringify(dataList)); // Guarda dataList

    if (inputValue == "")
      setError((error) => ({
        ...error,
        inputText: "Es necesario agregar un nombre a la tarea",
      }));
    else setError((error) => ({ ...error, inputText: "" }));

    if (textAreaValue == "")
      setError((error) => ({
        ...error,
        textArea: "No es obligatorio agregar una descripción",
      }));
    else
      setError((error) => ({
        ...error,
        textArea: "",
      }));
  }, [inputValue, textAreaValue, dataList]); // Guarda cuando cambian

  // Guardar el valor en localStorage cuando el input cambie

  // localStorage.setItem("inputValue", newInputValue);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue(value);
  };
  // preguntar al localstorage guardar la info en una variable y hacer un if

  const handleTextareaChange = (event) => {
    setTextAreaValue(event.target.value);
    // Guardar en localStorage cuando el textarea cambie
    // localStorage.setItem("textAreaValue", value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    handleButtonAdd();
  };
  const showLabelTasks = (state) => {
    let count = 0;
    for (const task of dataList) {
      if (!state) {
        if (task.state === false) {
          count++;
        }
      } else {
        if (task.state === true) {
          count++;
        }
      }
    }

    return count;
  };

  return (
    <>
      <div className="container-wrapped-all">
        <form onSubmit={handleButton}>
          <div className="content-north">
            <input
              className="content-north-input-text"
              type="text"
              name="inputText"
              value={inputValue}
              placeholder="Agregar nueva tarea"
              onChange={handleInputChange}
            />
            <span className="span-label" id="span-label-error">
              {error.inputText}
            </span>
            <textarea
              name="textArea"
              rows="4"
              cols="50"
              placeholder="Añade una descripción..."
              value={textAreaValue}
              onChange={handleTextareaChange}
            ></textarea>
            <button className="button-add">
              +
            </button>
            <label></label>
            <span className="span-label" id="span-label-alert">
              {error.textArea}
            </span>
          </div>
        </form>
        <div className="content-center">
          <p className="p-label" id="completed-task">
            Tienes {showLabelTasks(true)}{" "}
            {showLabelTasks(true) == 1
              ? "tarea completada"
              : "tareas completadas"}
          </p>
          {dataList.map((arrayTarea) => (
            <Task
              key={arrayTarea.id}
              id={arrayTarea.id}
              title={arrayTarea.title}
              state={arrayTarea.state}
              description={arrayTarea.description}
            />
          ))}
        </div>
        <div className="content-south">
          <p className="p-label" id="pending-task">
            Tienes {showLabelTasks(false)}{" "}
            {showLabelTasks(false) == 1
              ? "tarea pendiente"
              : "tareas pendientes"}
          </p>

          <button className="button-delete-all" onClick={handleButtonDelete}>
            {"Eliminar todo"}
          </button>
        </div>
      </div>
    </>
  );
}
