import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { WiDaySunny } from "react-icons/wi";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Button,
  Link as ChakraLink,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
// import "../styles/header.css";

import logoImg from "../img/img.jpg";
// import menuImg from "../img/menu.png";
/* eslint-disable react/prop-types */
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
      bgColor="#101922"
      boxShadow="0px 1px 10px rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex="10"
      top="0"
      left="0"
      width="100%"
      height="65px"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="90%"
        maxW="1500px"
        mx="auto"
      >
        <Flex align="center">
          <Image borderRadius="50%" boxSize="50px" src={logoImg} alt="Logo" />
          <Heading
            as="h1"
            display="inline"
            position="fixed"
            my="15px"
            ml="65px"
            color="#fff"
            fontWeight="400"
            fontSize="24px"
            cursor="default"
          >
            Lista de tareas
          </Heading>
        </Flex>

        <Flex flexDirection="row" gap={5} my={3}>
          <IconButton
            colorScheme={colorMode === "light" ? "yellow" : "messenger"}
            // mt="6px"
            // color="black"
            border="3px solid white"
            borderRadius="30px"
            size="md"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          ></IconButton>
          <ChakraLink mt="7px" color="white" as={ReactRouterLink} to="/Home">
            Inicio
          </ChakraLink>
          <ChakraLink mt="7px" color="white" as={ReactRouterLink} to="/">
            Lista de tareas
          </ChakraLink>
          <ChakraLink mt="7px" color="white" as={ReactRouterLink} to="/AboutUs">
            Sobre mi
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
