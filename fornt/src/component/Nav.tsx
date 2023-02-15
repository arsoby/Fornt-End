import React from 'react'
import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    Stack,
    VStack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as RouteLink } from 'react-router-dom'
function Nav() {

    const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("fffff", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("#39505F", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link href="#home">
      <Button w="full" variant="light">
        الصفحة الرئيسية
      </Button>
      </Link>
      <Link href="#about">
      <Button 
        w="full"
      color="light"
        leftIcon={<AiOutlineInbox />}>
        جميع الشركات
      </Button>
      </Link>
      <Link href="#projects">
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        الحاسبة
      </Button>
      </Link>
    </VStack>
  );

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTopColor="brand.400"
      w="full"
      pos={"relative"}
      overflowY="hidden"
      borderBottomWidth={2}
      // color="gray.200"
      _dark={{ color: "gray.900" }}
      id="header"
    >
      <chakra.div h="4.5rem" mx="auto" maxW="100%">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
                {/* <Logo /> */}
                {/* <Image src={Logo} w={"64px"} h={"64px"} borderRadius={"50%"}></Image> */}
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <RouteLink to={"/"}>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}>
                  الصفحة الرئيسية
              </Button>
              </RouteLink>
              <RouteLink to="/companies">
                <Button
                  bg={bg}
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}>
                    جميع الشركات
                </Button>
              </RouteLink>
              <RouteLink to={"/calculator"}>
              <Button
                bg={bg}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}>
                    الحاسبة
              </Button>
              </RouteLink>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">

          <InputGroup>
              <InputRightElement pointerEvents="none" >
                <AiOutlineSearch />
              </InputRightElement>
              <Input color='white' type="tel" placeholder="بحث..." mr={"10px"}/>
            </InputGroup>
            
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="white"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  )
}

export default Nav