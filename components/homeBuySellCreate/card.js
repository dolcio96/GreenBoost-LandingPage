import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import LandingPopUp from '@components/landingPopUp';

import {
    Box,
    Heading,
    Container,
    Text,
    LinkBox,
    LinkOverlay,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image,
    Grid,
    Center,
    GridItem,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    Radio,
    RadioGroup,
    Input,
    Button,
} from '@chakra-ui/react';

const Card = ({popUpTexts,props}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<>

        <Flex p={5} w="full" alignItems="center" justifyContent="center" _hover={ {cursor: "pointer"}} >
            <LinkBox
                maxW="sm"
                onClick={onOpen}
                rounded="xl"
                shadow="xl"
                position="relative"
                bg="white">
                <LinkOverlay>
                    <Image
                        h={'250px'}
                        w={'full'}
                        src={props.img.src}
                        alt='abc'
                        rounded="xl"
                        bg="white"
                        opacity={"0.9"}
                    />
                    <Center h="110px">
                        <Box p="3" textAlign="center" >
                            <Center>
                                <Text fontSize='2xl' color='quaternary'>{props.desc}</Text>
                            </Center>
                        </Box>
                    </Center>
                </LinkOverlay>
            </LinkBox >

        </Flex>

        <LandingPopUp popUpTexts={popUpTexts} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

    </>)

}

export default Card

