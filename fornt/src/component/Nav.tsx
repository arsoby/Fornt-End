import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Spacer,
  Heading,
  useBreakpointValue,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

//

function Nav() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("firestName");
    navigate("/");
  };
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <div>
      <Box as="section">
        <Box as="nav" h={20} border={2}>
          <Flex
            bg="#4890C4"
            boxShadow="lg"
            minWidth="max-content"
            alignItems="center"
            gap="2"
            h={59}
          >
            <Button onClick={logOut} bg="red.600"ml={3} variant="ghost" fontSize={15}>
              تسجيل خروج
            </Button>

            <Spacer bg="#4890C4" />

            <Box p="4" bg="#4890C4">
              <Heading bg="#4890C4" color={"black"} size="md">
                naem of project
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Nav;
