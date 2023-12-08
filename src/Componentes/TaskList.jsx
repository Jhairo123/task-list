/* eslint-disable react/prop-types */
import Task from "./Task";
import { useContext, useEffect, useState } from "react";
import { useTask } from "../customHook.js";
import { MyContext } from "../createContext.js";

export default function TaskList() {
  const [enableButton, setEnableButton] = useState(false);
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

  // const handleButtonDelete = () => {
  //   if (dataList.length == 0) alert("No hay ninguna tarea");
  //   else {
  //     alert("las tareas han sido borradas satisfactoriamente");
  //     setDataList([]);
  //     // localStorage.clear();
  //   }
  // };

  // const handleButtonAdd = () => {
  //   if (inputValue.length > 3) {
  //     const newData = {
  //       titulo: inputValue,
  //       descripcion: textAreaValue,
  //       estado: false,
  //     };
  //     setDataList([...dataList, newData]);
  //     setInputValue("");
  //     setTextAreaValue("");
  //     alert("Se ha añadido la tarea a la lista satisfactoriamente");
  //   } else alert("No se pudo crear, la tarea es muy corta");
  // };
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
        console.log(effectIsOn);
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

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   registerUser(field);
  // };

  return (
    <>
      <div className="contenedorTaskList1">
        <form onSubmit={handleButtonAdd}>
          <div
            style={{
              display: "inline-grid",
              gridColumn: "1 / span 2",
              // boxShadow: "0.5px 0.5px 4px rgb(   </form>85, 85, 85)",
              padding: "10px",
              gridColumnStart: "1",
              gridRowEnd: "1",
              gridTemplateColumns: "17rem",
              columnGap: "0.5rem",
              rowGap: "0.5rem",
            }}
          >
            <input
              className="grid-item-a"
              type="text"
              name="inputText"
              value={inputValue}
              id="nuevaTarea"
              placeholder="Agregar nueva tarea"
              onChange={handleInputChange}
            />
            <span className="error" role="alert">
              {error.inputText}
            </span>
            <label></label>
            <textarea
              name="textArea"
              rows="4"
              cols="50"
              placeholder="Añade una descripción..."
              value={textAreaValue}
              onChange={handleTextareaChange}
            ></textarea>
            <button className="grid-item-b" id="agregarTarea">
              {"+"}
            </button>
            <label></label>
            <span className="error" role="alert">
              {error.textArea}
            </span>
          </div>
        </form>
        <div className="contenedorTaskList2">
          {dataList.map((arrayTarea) => (
            <Task
              key={arrayTarea.id}
              id={arrayTarea.id}
              title={arrayTarea.title}
              description={arrayTarea.description}
            />
          ))}
        </div>
        <div
          style={{
            display: "grid",

            padding: "10px",
            gridColumn: "1 / span 2",

            // width: "20rem",
            // boxShadow: "2px 2px 5px rgb(85, 85, 85)",
          }}
        >
          <p
            style={{
              marginTop: "0px" /* Margen superior de 20px */,
              marginBottom: "15px",
            }}
          >
            Tienes {dataList.length} tarea(s) pendientes
          </p>
          <button
            style={{
              display: "inline-grid",
              gridTemplateColumns: "18rem",
              backgroundColor: "red",
              color: "white",
            }}
            id="agregarTar"
            onClick={handleButtonDelete}
          >
            {"Eliminar todo"}
          </button>
        </div>
      </div>
    </>
  );
}
