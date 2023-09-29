import { useState } from "react";

export const useTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dataList, setDataList] = useState([]);
  const handleButtonAdd = () => {
    if (inputValue.length > 3) {
      const newData = {
        titulo: inputValue,
        descripcion: textAreaValue,
        estado: false,
      };
      setDataList([...dataList, newData]);
      setInputValue("");
      setTextAreaValue("");
      alert("Se ha añadido la tarea a la lista satisfactoriamente");
    } else alert("No se pudo crear, la tarea es muy corta");
  };

  const handleButtonDelete = () => {
    if (dataList.length == 0) alert("No hay ninguna tarea");
    else {
      alert("las tareas han sido borradas satisfactoriamente");
      setDataList([]);
      // localStorage.clear();
    }
  };

  //   const handleCheckboxChange = (event) => {
  //     setIsChecked(event.target.checked);
  //   };
  return [
    handleButtonAdd,
    handleButtonDelete,
    dataList,
    setDataList,
    inputValue,
    setInputValue,
    textAreaValue,
    setTextAreaValue,
  ];
};
