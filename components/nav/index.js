import React, { ReactNode, useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    useDisclosure,
    useColorModeValue,
    Stack,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const Links = ['About Us'];

import LogoGB from '@public/logoGB.png'
import languageJSON from "@lib/language.json"
import LandingPopUp from '@components/landingPopUp';


const Nav = () => {
    var language = languageJSON.IT;
    var popUpTexts = language.popUp;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [scrolled, setScrolled] = useState(false)
    useEffect(_ => {
        const handleScroll = _ => {
            if (window.pageYOffset > 64) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="fixed" w="100%" zIndex={200}
                backgroundColor={!scrolled ? "rgba(232, 232, 232, 0)" : "white"}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <HStack spacing={8.} alignItems={'center'}>
                        <Box w={"200px"} as={"a"} href={"/"}>
                            <Image w={"100%"} src={LogoGB.src} />
                        </Box>
                    </HStack>
                    <Flex alignItems={'center'}>

                    </Flex>
                    {scrolled ? <Button
                        color={"white"}
                        bg={"primary"}
                        rounded={'full'}
                        px={6}
                        _hover={{
                            color: 'tertiary',
                            bg: 'quaternary',
                        }}
                        onClick={onOpen}
                        _focus={{ outline: "none" }}

                    >
                   
                         Stay tuned

                    </Button> : ""}
                </Flex>
            </Box>
            <LandingPopUp popUpTexts={popUpTexts} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );

}

export default Nav


