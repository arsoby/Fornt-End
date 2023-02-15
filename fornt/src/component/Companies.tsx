import { Box, Card, Image, chakra, Stack, CardBody, Heading, Text, CardFooter, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import MicosoftLogo from './../assets/microsoft.png'
import axios from 'axios'

function Companies() {
    const [data,setData]=React. useState<any[]>([]);

    const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab"

    React.useEffect(()=>{
        axios.get('https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab').then(res=>{
            setData(res.data)
        })
    },[])

  return (
    <>

    <Box ml={"10%"} mr={"10%"}>
        <br></br>
        <Heading size='lg'>جميع الشركات</Heading>
        <br></br>
        {data.map((item:any)=>
        <li key={item.id}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            padding={"1vh"}
            variant='outline'
            bg={'#193547'}
            >
            
        <Image
            objectFit={"contain"}
            maxW={{ base: '100%', sm: '200px' }}
            src={item.img}
            alt='Microsoft'/>
            
            <HStack gap={"19vh"}>
                <CardBody>
                    <HStack gap={"19vh"}>
                        <Heading color={'white'} size='md'>{item.nameOfCompany}</Heading>

                    <Text color={'white'} py='2'>
                    {item.num}
                    </Text>
                    <Text color={'white'} py='2'>
                    {item.price} $
                    </Text>
                    <Text color={'white'} py='2'>
                    {item.ishalal}
                    </Text>
                    </HStack>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        للمزيد
                    </Button>
                </CardFooter>
            </HStack>
        </Card>
        </li>
        )}
    </Box>
    
    </>
  )
}

export default Companies