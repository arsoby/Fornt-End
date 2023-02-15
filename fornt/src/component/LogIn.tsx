import {
  Box,
  Text,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
  Center,
  VStack,
  Grid,
  GridItem,
  InputLeftElement,
  CardHeader,
  Heading,
  useDisclosure,
  keyframes,
  ScaleFade,
  Slide,
  SlideFade,
  Hide,
} from "@chakra-ui/react";
import React, { useState } from "react";
function LogIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onToggle } = useDisclosure()
  const [showCard, setShowCard] = useState(true);
  function toggleShowCard() {
    setShowCard(!showCard);
  }

  return (
    <>
      <Container
        bg={"gray.100"}
        height={"100vh"}
        maxW={"4xl"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        
      >
        <SimpleGrid columns={2} bg={'gray.300'} w="100%" display={"flex"} pos="relative" justifyContent="center" alignItems="center"> 
        {/* تسجيل الدخول */}

        <SimpleGrid width={"100%"} h="md" columns={2} pos="absolute" display={ showCard ? "none":"flex"} alignItems="center" className="Signup"  >  
           


          <Card w={"100%"} h={"100%"}  bg="#23acff">
         <CardHeader mb="5">
         <Heading  textAlign={"center"}>تسجيل الدخول</Heading>
         </CardHeader>
           <CardBody>
            

            
             <SimpleGrid spacingY={5}>
               <Input bg={"whitesmoke"}   size="md" textAlign={"right"} placeholder="البريد الإلكتروني" />
               
               <InputGroup size="md">
                 <Input bg={"whitesmoke"} 
                   pl="4.5rem"
                   type={show ? "text" : "password"}
                   placeholder="كلمة السر" textAlign={"right"}
                 />
                 <InputLeftElement width="4.5rem" >
                   <Button bg={"#e5e5e5"} h="1.75rem"size="sm" onClick={handleClick}>
                     {show ? "إخفاء" : "إظهار"}
                   </Button>
                 </InputLeftElement>
               </InputGroup>
             </SimpleGrid>
           </CardBody>
           <Center pb={"10px"}>
             <Button  bg={"#48b064"} w="60%">
               تسجيل الدخول
             </Button>
           </Center>
         </Card>
   

      
    
       
      
         <Card bg={"#142c65"} w={"100%"} h={"100%"} display={"flex"} flexDir="column" align="center"  >
           <CardBody pos={"absolute"}  bottom="50%" >
            <SimpleGrid spacingY={3}  >
             <Text textAlign={"center"} color="white">
              ليس لديك حساب ؟ 
             </Text>
             <Text textAlign={"center"} color="white">من فضلك قم بإنشاء حساب جديد</Text>
             <Center>

             <Button onClick={toggleShowCard}
              bg={"#48b064"} w="60%">
               تسجيل جديد
             </Button>
             </Center>
             </SimpleGrid>
           </CardBody>
         </Card>
       
     </SimpleGrid>
     
      

        {/* نهاية تسجيل الدخول */}

        {/* بداية تسجيل جديد */}
        <SimpleGrid width={"100%"} h="md" columns={2} pos="absolute" display={ showCard ? "flex":"none"} alignItems="center" className="Signup"  >

        <Card bg={"#142c65"} w={"100%"} h={"100%"} display={"flex"} flexDir="column" align="center" pos={"relative"} >
           <CardBody pos={"absolute"}  bottom="50%">
            <SimpleGrid spacingY={3} >
             <Text textAlign={"center"} color="white">
              مرحباً بك  
             </Text>
             <Text textAlign={"center"}></Text>
             <Center>

             <Button onClick={toggleShowCard}
              bg={"#48b064"} w="100%">
               تسجيل الدخول
             </Button>
             </Center>
             </SimpleGrid>
           </CardBody>
         </Card>
         <Card w={"100%"} h={"100%"} bg="#23acff">
         <CardHeader>
         <Heading textAlign={"center"}>تسجيل جديد</Heading>
         </CardHeader>
           <CardBody>
             <SimpleGrid spacingY={2}  >
               <Input bg={"whitesmoke"}   size="md" textAlign={"right"} placeholder="البريد الإلكتروني" />
               <Input bg={"whitesmoke"} size="md" textAlign={"right"} placeholder="اسم المستخدم" />
               <InputGroup size="md">
                 <Input bg={"whitesmoke"} 
                   pl="4.5rem"
                   type={show ? "text" : "password"}
                   placeholder="كلمة السر" textAlign={"right"}
                 />
                 <InputLeftElement width="4.5rem" >
                   <Button bg={"#e5e5e5"} h="1.75rem"size="sm" onClick={handleClick}>
                     {show ? "إخفاء" : "إظهار"}
                   </Button>
                 </InputLeftElement>
               </InputGroup>
             </SimpleGrid>
           </CardBody>
           <Center pb={"10px"}>
             <Button  bg={"#48b064"} w="60%">
               تسجيل جديد
             </Button>
           </Center>
         </Card>
       
      

       
     </SimpleGrid>
        {/* نهاية تسجيل جديد */}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default LogIn;
