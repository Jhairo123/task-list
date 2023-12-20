/* eslint-disable react/prop-types */
import Task from "../Components/Task.jsx";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../createContext.js";
import { useForm } from "react-hook-form";
import { AddIcon, WarningIcon, DeleteIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";

import {
  Center,
  Box,
  Button,
  Input,
  StackDivider,
  Textarea,
  VStack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";

export default function TaskList() {
  const toast = useToast();
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

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    // delayError: 1000,
    defaultValues: {
      title: inputValue,
      description: textAreaValue,
    },
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
    // e.preventDefault();
    handleButtonAdd(e);
    toast({
      position: "top",
      title: "Tarea añadida en la lista",
      description: "Su tarea ha sido enviada satisfactoriamente.",
      status: "success",
      duration: 5000,
      // variant: "variant",
      isClosable: true,
    });

    reset();
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
      <Center>
        <VStack
          mt={3}
          width={400}
          // border="1px solid rgba(255, 255, 255, 0)"
          display="grid"
          // boxShadow="0px -5px 5px -5px rgba(85, 85, 85), 0px 5px 5px -5px rgba(85, 85, 85)"
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          // align="stretch"
        >
          <Box padding="10px" gridTemplateColumns="17rem" rowGap="0.5rem">
            <form onSubmit={handleSubmit(handleButton)}>
              {/* inputText */}
              <FormControl
                // isRequired
                id="text"
                isInvalid={errors.title}
                // onChange={handleInputChange}
              >
                <FormLabel>Agregar nueva tarea</FormLabel>
                <Input
                  placeholder="Agregar nueva tarea"
                  {...register("title", {
                    required: "Este campo es requerido",
                    minLength: {
                      value: 3,
                      message: "La longitud minima es de 3 caracteres",
                    },
                  })}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="area">
                <FormLabel textAlign="left">Agregar una descripcion</FormLabel>

                <Textarea
                  placeholder="Añade una descripción..."
                  {...register("description", {
                    required: false,
                  })}
                />
                <FormHelperText>La descripcion es opcional</FormHelperText>
              </FormControl>
              {/* <Input
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
            <label></label>
            <Textarea
              name="textArea"
              rows="4"
              cols="50"
              placeholder="Añade una descripción..."
              value={textAreaValue}
              onChange={handleTextareaChange}
            ></Textarea> */}
              <Button
                mt={2}
                mb={2}
                width="100%"
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                leftIcon={<AddIcon />}
              ></Button>
            </form>
            <Text
              display="inline"
              fontStyle="italic"
              fontSize="1rem"
              color="green"
            >
              Tienes {showLabelTasks(true)}{" "}
              {showLabelTasks(true) == 1
                ? "tarea completada"
                : "tareas completadas"}
            </Text>
          </Box>

          <Box
            // border="3px solid"
            display="grid"
            borderColor="rgba(255, 255, 255, 0)"
            // paddingLeft={5}
            paddingTop={2}
            paddingBottom={2}
            // paddingRight={10}
            boxShadow="0px -5px 5px -5px rgba(85, 85, 85), 0px 5px 5px -5px rgba(85, 85, 85)"
            rowGap={2}
            height={215}
            overflow="auto"
          >
            {dataList.map((arrayTarea) => (
              <Task
                key={arrayTarea.id}
                id={arrayTarea.id}
                title={arrayTarea.title}
                state={arrayTarea.state}
                description={arrayTarea.description}
              />
            ))}
          </Box>
          <Box display="grid" padding="10px" gridColumn="1 / span 2">
            <Text
              display="inline"
              fontStyle="italic"
              fontSize="1rem"
              color="red"
              marginBottom={3}
            >
              Tienes {showLabelTasks(false)}{" "}
              {showLabelTasks(false) == 1
                ? "tarea pendiente"
                : "tareas pendientes"}
            </Text>

            <Button
              leftIcon={<DeleteIcon />}
              border="2px"
              borderColor="red.500"
              variant="outline"
              // marginTop={10}
              // backgroundColor="#fd4242"
              // border="2px solid"
              color="white"
              onClick={handleButtonDelete}
            >
              {"Eliminar todo"}
            </Button>
          </Box>
        </VStack>
      </Center>
      {/* <div className="container-wrapped-all">
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
            <label></label>
            <textarea
              name="textArea"
              rows="4"
              cols="50"
              placeholder="Añade una descripción..."
              value={textAreaValue}
              onChange={handleTextareaChange}
            ></textarea>
            <button className="button-add" id="agregarTarea">
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
      </div> */}
    </>
  );
}
