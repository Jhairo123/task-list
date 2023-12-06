import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dataList, setDataList] = useState([]);
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

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // localStorage.setItem("isCheckedValue", isChecked);
    // console.log(isChecked);
  };
  const handleButtonAdd = () => {
    if (inputValue.length > 3) {
      // let index = dataList.length;

      const newData = {
        // id: index,
        id: uuidv4(),
        titulo: inputValue,
        descripcion: textAreaValue,
        estado: false,
      };
      setDataList([...dataList, newData]);
      // if (index >= 1) newData[index].id = newData[index - 1].id + 1;
      // else newData[index].id = ++index;
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
  const handleTaskDelete = (id) => {
    console.log(dataList());

    const a = dataList.filter((list) => list.id != id);
    setDataList(a);
    alert("La tarea ha sido eliminada correctamente");
  };

  //   const handleCheckboxChange = (event) => {
  //     setIsChecked(event.target.checked);
  //   };
  //retornar objeto
  return [
    handleButtonAdd,
    handleTaskDelete,
    handleButtonDelete,
    dataList,
    setDataList,
    inputValue,
    setInputValue,
    textAreaValue,
    setTextAreaValue,
    handleCheckboxChange,
    isChecked,
  ];
};
