import "./styles/app.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContext } from "./createContext";
import { useTask } from "./customHook";
// import TaskList from "./pages/TaskList";
// import HomePage from "./pages/HomePage";
// import AboutUs from "./pages/AboutUs";
import { Menu } from "./Componentes/Menu";
import Loading from "./pages/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const TaskList = lazy(() => import("./pages/TaskList"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export function AppRouter() {
  return (
    <>
      <Menu />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/" element={<TaskList />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
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
        </div>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
