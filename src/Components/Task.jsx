/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../createContext";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import {
  Button,
  Textarea,
  Text,
  Box,
  Image,
  Grid,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Tooltip,
} from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";

import editImg from "../img/edit.png";

export default function Task({ id, title, description, state }) {
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
      title: title,
      description: description,
    },
  });
  const [visibility, setVisibility] = useBoolean(true);
  // const [visibility, setIsVisible] = useState(true);
  const [editField, setEditField] = useState({
    title: title,
    description: description,
  });
  const { handleTaskEdit, handleTaskDelete, handleCheckboxChange } =
    useContext(MyContext);

  const handleToggleVisibility = () => {
    setVisibility.toggle();
    // console.log(visibility);

    // setIsVisible(!isVisible);
  };
  const handleSendSubmit = (e) => {
    // e.preventDefault();
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
    <Grid
      // w="20px"
      marginLeft={2}
      // marginRight={1}
      // display="inline-block"
      // width="19.5rem"
      overflow="auto"
      backgroundColor="whitesmoke"
      borderRadius="1rem"
      height={visibility ? "6rem" : "12.5rem"}
    >
      <Grid
        gridTemplateColumns="15%"
        // paddingRight={90}
        display={visibility ? "grid" : "none"}
      >
        <Grid
          // my={1}
          placeContent="center"
          gridColumn="1 / span 1"
          border="1px transparent"
        >
          {/* imagen editar */}
          <Image
            // marginTop={1}
            cursor="pointer"
            marginTop={0}
            boxSize="40px"
            // className="imagen"
            src={editImg}
            // src=""
            onClick={() => handleToggleVisibility()}
          />
          {/* imagen eliminar */}
          <Image
            marginBottom={0.5}
            cursor="pointer"
            // marginBottom={0}
            boxSize="40px"
            className="imagen"
            src="https://png.pngtree.com/png-clipart/20220926/original/pngtree-delete-button-3d-icon-png-image_8633077.png"
            onClick={() => handleTaskDelete(id)}
          />
        </Grid>
        <Grid gridColumn="2 / span 1" border="1px transparent">
          <Grid
            // my={1}
            border="1px transparent"
            gridTemplateColumns="19% 1fr"
            gridTemplateRows="auto auto"
          >
            {/* <br /> */}
            {/* checkbox */}
            <Grid
              gridColumn="1 / span 1"
              placeContent="center"
              border="1px transparent"
            >
              <Switch
                // colorScheme="green"
                name="check"
                size="lg"
                isChecked={state}
                onChange={(e) => handleCheckboxChange(id, e)}
              />
              {/* <input
                type="checkbox"
                checked={state}
                onChange={(e) => handleCheckboxChange(id, e)}
              /> */}
            </Grid>
            <Grid
              gridColumn="2 / span 1"
              alignItems="center"
              border="1px transparent"
            >
              <Text textAlign="left" paddingLeft={1}>
                {title}
              </Text>
            </Grid>
            <Grid
              // alignContent="center"
              gridColumn=" 1/ span 2"
              border="1px transparent"
            >
              <Text textAlign="left">{description}</Text>
            </Grid>
            {/*
             */}
          </Grid>
          {/* Label tarea */}
          {/* Label descripcion */}
          {/* <br /> */}
        </Grid>
      </Grid>
      <Box mx={5} mt={5} display={!visibility ? "grid" : "none"}>
        <form onSubmit={handleSubmit(handleSendSubmit)}>
          {/* inputText */}
          <FormControl id="title" isInvalid={errors.title}>
            {/* <FormLabel>Renombrar tarea</FormLabel> */}
            <Tooltip
              label="Editar el titulo"
              placement="top-start"
              // isOpen
              closeOnClick={false}
            >
              <span>
                {/* Ícono de información que indica que hay un tooltip */}
                <Input
                  mb={errors.title ? "0px" : "5px"}
                  placeholder="Editar tarea"
                  {...register("title", {
                    required: "Este campo es requerido",
                    minLength: {
                      value: 3,
                      message: "La longitud minima es de 3 caracteres",
                    },
                  })}
                />
                <FormErrorMessage m={0}>
                  {errors.title?.message}
                </FormErrorMessage>
              </span>
            </Tooltip>
          </FormControl>

          <FormControl mt={2} id="description">
            {/* <FormLabel>Renombrar tarea</FormLabel> */}
            <Tooltip
              label={
                watch("description")
                  ? "Editar la descripcion de esta tarea"
                  : "Agregar una descripcion"
              }
              placement="top-start"
              // isOpen
              closeOnClick={false}
            >
              <span>
                <Textarea
                  size="s"
                  rows={1} // Número de filas
                  cols={30}
                  placeholder="    Agregar una descripcion..."
                  {...register("description")}
                />
              </span>
            </Tooltip>
          </FormControl>
          {/* <input
            className="input"
            id="input-text"
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Renombrar la tarea"
            onChange={handleOnChange}
          /> */}
          {/* <textarea
            className="input"
            id="input-textarea"
            name="description"
            defaultValue={description}
            placeholder="Editar la descripcion"
            onChange={handleOnChange}
          /> */}
          <br />
          <Button
            variant="outline"
            colorScheme="red"
            type="button"
            mt={-2}
            mr={1}
            _hover={{
              borderColor: "red.500",
              color: "red.500",
              // Cambia el color del borde al hacer hover
            }}
            onClick={() => handleToggleVisibility()}
          >
            Cancelar
          </Button>
          <Button mt={-2} colorScheme="teal" ml={1} type="submit">
            Guardar
          </Button>
        </form>
      </Box>
    </Grid>
  );
}
