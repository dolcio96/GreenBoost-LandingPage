import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
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

const Card = (props) => {
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
                    <Center h="80px">
                        <Box p="3" textAlign="center" >
                            <Center>
                                <Text fontSize='2xl' color='quaternary'>{props.desc}</Text>
                            </Center>
                        </Box>
                    </Center>
                </LinkOverlay>
            </LinkBox >

        </Flex>


        <Modal isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay
                backdropFilter='blur(3px) hue-rotate(50deg)'
            />
            <ModalContent >
                <ModalHeader ustifyContent={"center"} textAlign={"center"}>Stay Tuned, Subscribe Now!</ModalHeader>

                <ModalBody>
                    <Stack direction={'column'} spacing={6}>
                        <Text>Send us your email if you are interested in the project</Text>
                        <FormControl>
                            <Input placeholder='Email' className="inputFieldNormal" />
                        </FormControl>
                        <Stack direction='row'>
                            <Text>I want to</Text>
                            <RadioGroup >
                                <Stack direction='row'>
                                    <Radio value='Seller'>Sell</Radio>
                                    <Radio value='Buyer'>Buy</Radio>
                                </Stack>
                            </RadioGroup>
                            <Text>Voluntary Carbon Credit</Text>

                        </Stack>
                    </Stack>
                </ModalBody>
                <ModalFooter justifyContent={"center"}>

                    <Button variant={"normalButton"} mr={3} justifyContent={"center"}>
                        Subscribe Now
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)

}

export default Card

