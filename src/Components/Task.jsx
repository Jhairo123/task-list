/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MyContext } from "../createContext";
import {
  Button,
  Textarea,
  Text,
  Box,
  Image,
  Grid,
  Flex,
  grid,
} from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

export default function Task({ id, title, description, state }) {
  const [isVisible, setIsVisible] = useState(true);
  const [editField, setEditField] = useState({
    title: title,
    description: description,
  });
  const { handleTaskEdit, handleTaskDelete, handleCheckboxChange } =
    useContext(MyContext);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <Box
      w="350px"
      marginLeft={2}
      // marginRight={1}
      // display="inline-block"
      // width="19.5rem"
      overflow="auto"
      backgroundColor="whitesmoke"
      borderRadius="1rem"
      id={isVisible ? "content-task" : "content-edit-task"}
    >
      <Box
        display="grid"
        gridTemplateColumns="15% 85%"
        // paddingRight={90}
        className={isVisible ? "content-show" : "content-hiden"}
      >
        <Box gridColumnStart="1" border="1px transparent">
          {/* imagen editar */}
          <Image
            marginTop={1.5}
            // marginBottom={0}
            boxSize="40px"
            // className="imagen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgSizhklDH657yz3n7DSH6nCripsKtMhds9M8xic_cZm04rHSkwiNcg_fg502AWSC48g&usqp=CAU"
            onClick={() => handleToggleVisibility()}
          />
          {/* imagen eliminar */}
          <Image
            // marginTop={1}
            // marginBottom={0}
            boxSize="40px"
            className="imagen"
            src="https://png.pngtree.com/png-clipart/20220926/original/pngtree-delete-button-3d-icon-png-image_8633077.png"
            onClick={() => handleTaskDelete(id)}
          />
        </Box>
        <Box gridColumnStart="2" border="1px solid">
          <Box display="grid" gridTemplateColumns="19% 90%">
            {/* <br /> */}
            {/* checkbox */}
            <Box
              gridColumnStart="1"
              display="flex"
              alignItems="center"
              border="1px solid"
            >
              {/* <Switch size="lg" /> */}
              <input
                type="checkbox"
                checked={state}
                onChange={(e) => handleCheckboxChange(id, e)}
              />
            </Box>
            <Box
              gridColumnStart="2"
              // display="flex"
              // alignItems="center"
              border="1px solid"
            >
              <Text textAlign="left" paddingLeft={1} className="label">
                {title}
              </Text>
            </Box>
            <Box gridColumnStart="1" gridColumnEnd="3" border="1px solid">
              <Text textAlign="left" className="lbl2">
                {description}
              </Text>
            </Box>
            {/*
             */}
          </Box>
          {/* Label tarea */}
          {/* Label descripcion */}
          {/* <br /> */}
        </Box>
      </Box>
      <div className={isVisible ? "content-hiden" : "content-show"}>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            id="input-text"
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Renombrar la tarea"
            onChange={handleOnChange}
          />
          <textarea
            className="input"
            id="input-textarea"
            name="description"
            defaultValue={description}
            placeholder="Editar la descripcion"
            onChange={handleOnChange}
          />
          <br />
          <button
            className="button-cancel-edit"
            type="button"
            onClick={() => handleToggleVisibility()}
          >
            Cancelar
          </button>
          <button className="button-save-edit" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </Box>
  );
}
