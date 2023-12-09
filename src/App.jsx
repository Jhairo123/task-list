import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import TaskList from "./pages/TaskList";
import { MyContext } from "./createContext";
import { useTask } from "./customHook";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Menu } from "./Componentes/Menu";

export function AppRouter() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<TaskList />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

function App() {
  const [
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
  ] = useTask();

  return (
    <Router>
      <MyContext.Provider
        value={{
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
        }}
      >
        <div>
          <AppRouter />
          {/* <Header /> */}
          {/* <TaskList /> */}
        </div>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
