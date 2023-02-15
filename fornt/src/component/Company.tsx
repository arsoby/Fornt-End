import { Badge, Box, Button, chakra, Heading, Link, SimpleGrid, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { BsStar } from 'react-icons/bs'
import MicosoftLogo from './../assets/microsoft.png'

function Company() {
  return (
    <Box>
        <br></br>
        <Box ml={"4vh"} mr={"4vh"}>
            <SimpleGrid columns={2} alignItems={"center"}>
                <Box>
                    <Heading>Microsoft</Heading>
                    <br></br>
                    <Badge fontSize={"large"} colorScheme='blue' p={"1"}>MSFT</Badge>
                </Box>
                <Box>
                    <Image 
                    objectFit={"contain"}
                    maxW={{ base: '100%', sm: '200px' }}
                    src={MicosoftLogo}
                    alt='Microsoft' />
                </Box>
            </SimpleGrid>
            <br></br>
            <SimpleGrid columns={2}>
                <Box>
                    <Link href='#' color={"blue"} _hover={{ textDecoration: "none" }} fontSize={"x-large"} display={"flex"} alignItems={"center"}>
                        <Text>إضافة الى المفضلة</Text> <BsStar/>
                    </Link>
                </Box>
                <Box>
                    <Box bg={"gray.200"} textAlign={"center"} p={"2"}>
                        <Heading>بيانات الشركة</Heading>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Company