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

  const handleCheckboxChange = (id, event) => {
    const index = dataList.findIndex((dataList) => dataList.id == id);
    if (index >= 0) {
      dataList[index].state = event.target.checked;
      let newList = [...dataList];
      setDataList(newList);
    }

    // localStorage.setItem("isCheckedValue", isChecked);
    // console.log(isChecked);
  };
  const handleButtonAdd = () => {
    if (inputValue.length > 3) {
      // let index = dataList.length;

      const newData = {
        // id: index,
        id: uuidv4(),
        title: inputValue,
        description: textAreaValue,
        state: false,
      };
      setDataList([...dataList, newData]);
      setInputValue("");
      setTextAreaValue("");
      setTimeout(() => {
        alert("Se ha añadido la tarea a la lista satisfactoriamente");
      }, 100);
      // if (index >= 1) dataList[index].id = dataList[index - 1].id + 1;
      // else dataList[index].id = ++index;
    } else alert("No se pudo crear, la tarea es muy corta");
  };

  const handleButtonDelete = () => {
    if (dataList.length == 0) alert("No hay ninguna tarea");
    else {
      const accepted = window.confirm(
        "¿Está seguro que desea eliminar todas las tareas?"
      );
      if (accepted) {
        // Código a ejecutar si el usuario hace clic en "Aceptar"
        setDataList([]);
        setTimeout(() => {
          alert("Las tareas han sido borradas satisfactoriamente");
        }, 100);
      } else {
        // Código a ejecutar si el usuario hace clic en "Cancelar"
        alert("Operación cancelada");
      }
    }
  };

  const handleTaskDelete = (id) => {
    const accepted = window.confirm(
      "¿Está seguro que desea eliminar esta tarea?"
    );

    if (accepted) {
      // Código a ejecutar si el usuario hace clic en "Aceptar"
      setDataList(dataList.filter((list) => list.id != id));
      setTimeout(() => {
        alert("La tarea ha sido eliminada con exito");
      }, 100);
    } else {
      // Código a ejecutar si el usuario hace clic en "Cancelar"
      alert("Operación cancelada");
    }
  };

  const handleTaskEdit = (id, editField) => {
    const index = dataList.findIndex((list) => list.id == id);
    if (index >= 0) {
      dataList[index] = { ...dataList[index], ...editField };
      setDataList([...dataList]);
      alert("tarea actualizada correctamente");
    } else alert(`La tarea con el ID ${id} no existe`);
  };
  return [
    handleButtonAdd,
    handleTaskEdit,
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
