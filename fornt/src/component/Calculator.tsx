import { Box, Button, Flex, Heading, Input,Text } from "@chakra-ui/react";
import React from "react";

function Calculator() {

    // المبلغ كامل للزكاه
    const[number,setNumber]=React.useState<any>()
    // عددالاسهم
    const[number2,setNumber2]=React.useState<any>()
    // نسبه التطهير
    const[number3,setNumber3]=React.useState<any>()

    const[total,setTotal]=React.useState<any>()
    const[total2,setTotal2]=React.useState<any>()

   {/* حاسبه الزكاه */}
    const calculat1 = ()=>{
        setTotal (number/40)
       
    }
   {/* حاسبه التطهير */}
    const calculat2 = ()=>{
        const t=number2 * number3
        setTotal2 (t)
       
    }
  return (
    <div>
      <Flex 
      mt={100}
      alignItems="center"
      justifyContent="center"
      gap="40">
        {/* حاسبه التطهير */}
        <Box
          border="2px"
          textAlign="center"
          width={400}
          h={300}
          bg="blue.100"
          rounded="xl"
          shadow="xl"
          p={10}
        >
          <Heading fontSize="2xl"> حاسبه التطهير </Heading>

          <Input mt={5} placeholder="ادخل  مقدار الربح " onChange={e =>{setNumber2(e.target.value)}}></Input>
          <Input mt={5} placeholder=" ادخل نسبه التطهير" onChange={e =>{setNumber3(e.target.value)}}></Input>

          <Button mt={5} onClick={()=>calculat2()}>احسب</Button>
          <Text mt={5} bg='green'>{total2}</Text>

        </Box>

        {/* حاسبه الزكاه */}

        <Box
          border="2px"
          textAlign="center"
          width={400}
          h={300}
          bg="blue.100"
          rounded="xl"
          shadow="xl"
          p={10}
        >
          <Heading fontSize="2xl"> حاسبه الزكاه </Heading>

          <Input mt={5} placeholder="ادخل المبلغ" onChange={e =>{setNumber(e.target.value)}}></Input>

          <Button mt={5}onClick={()=>calculat1()}>احسب</Button>
          <Text mt={8} bg='green'>{total}</Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Calculator;
