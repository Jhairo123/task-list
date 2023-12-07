import "./App.css";
import Header from "./Componentes/Header";
import TaskList from "./Componentes/TaskList";
import { MyContext } from "./createContext";
import { useTask } from "./customHook";

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
        <Header />
        <TaskList />
      </div>
    </MyContext.Provider>
  );
}

export default App;
