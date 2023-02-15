import {
  useDisclosure,
  Button,
  Drawer,
  Text,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Switch,
  Flex,
  Box,
  localStorageManager,
} from "@chakra-ui/react";
import React from "react";
import { AiFillRobot } from "react-icons/ai";

function Chatbot() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [number, setNumber] = React.useState<any>();
  const [data, setData] = React.useState<any>();

  const show = (n: any) => {
    switch (n) {
      case 1:


         setData(`الاكثر رحبا سدايا`)
        console.log(data);
        break;
      case 2:
        // execute case y code block
        setData(" الاكثر خساره هي مايكروسفت");
        break;

        case 3:
          // execute case y code block
          setData("الاكثر الحلال هي مايكروسفت");
          break;

          case 4:
            // execute case y code block
            setData("   اخر الاخبار ");
      
        break;
      default:
      // execute default code block
    }
  };

  return (
    <Box>
      
      <Button mr={5}
      size='lg'
      mt='80vh'
      position="fixed"
      borderRadius={100}
      colorScheme="teal" onClick={onOpen}>
       
        <AiFillRobot/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
        size="sm"
     
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerHeader bg='#39505F'color={'white'} textAlign='center'>مرحبا ماذا تريد ان تعرف </DrawerHeader>

          <DrawerBody >
          <AiFillRobot  size={50}/>
          <Box mt={2} mb={5}>
            
            <Text mt={2}  bg='gray.500' fontSize='lg' border='1px' h={150} rounded="lg" color='white'> {data} </Text></Box>
            <AiFillRobot  size={50}/>
            <Flex justifyContent="center" gap={3} mt={3} >
              <Button onClick={() => show(1)}>الشركات الاكثر ربحا</Button>
              <Button onClick={() => show(2)}>الشركات الاكثر خساره</Button>
            </Flex>

            <Flex justifyContent="center" gap={3} mt={5}>
              <Button onClick={() => show(3)}>الشركات الحلال</Button>
              <Button onClick={() => show(4)}>  اخر الاخبار</Button>
            </Flex>
          
          </DrawerBody>

          <DrawerFooter bg="#001F33">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              خروج
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Chatbot;
