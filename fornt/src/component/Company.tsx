import { Badge, Box, Button, chakra, Heading, Link, SimpleGrid, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink, useParams } from 'react-router-dom'
import { BsStar } from 'react-icons/bs'
import MicosoftLogo from './../assets/microsoft.png'
import axios from 'axios'

function Company() {

    const params = useParams()
    const id = params.id

    // console.log(id);

    const [data,setData]=React. useState<any[]>([]);

    const api = `https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab/${id}`

    React.useEffect(()=>{
        axios.get(api).then(res=>{
            setData(res.data)
        })
    },[])

    console.log(data["0"].nameOfCompany);
    
    

  return (
    <Box>
        <br></br>
        <Box ml={"4vh"} mr={"4vh"}>
            <SimpleGrid columns={2} alignItems={"center"}>
                <Box>
                    <Heading>Microsoft</Heading>
                    <br></br>
                    <Box display={"flex"} justifyContent={"space-between"} w={"30%"}>
                        <Badge fontSize={"large"} colorScheme='blue' p={"1"}>MSFT</Badge>
                        <Text fontSize={"larger"} fontWeight={"bold"}>تقنيات الحاسوب</Text>
                    </Box>
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