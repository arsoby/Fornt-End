import { Box, Card, Image, chakra, Stack, CardBody, Heading, Text, CardFooter, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import MicosoftLogo from './../assets/microsoft.png'

function Companies() {
  return (
    <Box ml={"10%"} mr={"10%"}>
        <br></br>
        <Heading size='lg'>جميع الشركات</Heading>
        <br></br>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            padding={"1vh"}
            variant='outline'>
        <Image
            objectFit={"contain"}
            maxW={{ base: '100%', sm: '200px' }}
            src={MicosoftLogo}
            alt='Microsoft'/>

            <HStack gap={"19vh"}>
                <CardBody>
                    <HStack gap={"19vh"}>
                        <Heading size='md'>Microsoft</Heading>

                    <Text py='2'>
                        MSFT
                    </Text>
                    <Text py='2'>
                        100$
                    </Text>
                    <Text py='2'>
                        حلال
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
    </Box>
  )
}

export default Companies