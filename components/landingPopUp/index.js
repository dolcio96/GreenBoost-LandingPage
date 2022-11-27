import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router';

import {
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image,
    Flex,
    Center,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    useToast
} from '@chakra-ui/react';


const LandingPopUp = ({ isOpen, onOpen, onClose }) => {



    const router = useRouter();
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const toast = useToast()

    function onSubmit(subscriber) {

        fetch('/?email=' + subscriber.email + 'ferret&type=' + subscriber.type, {
            method: "GET",
        }).then(() => {
            onClose()
            toast({
                position: 'bottom-left',
                title: "Thank you!",
                description: "We will contact you soon.",
                status: "success", 
                duration: 5000,
                isClosable: true,
            })
        }).catch(() => {
            onClose()
            toast({
                position: 'bottom-left',
                title: "Error!",
                description: "Something went wrong.",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        })

    }

    return (<>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                backdropFilter='blur(3px) hue-rotate(50deg)'
            />
            <ModalContent >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader justifyContent={"center"} textAlign={"center"}>Stay Tuned, Subscribe Now!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack direction={'column'} spacing={6}>
                            <Center><Text>Send us your email if you are interested in the project</Text>  </Center>
                            <FormControl isRequired>
                                <Input placeholder='Email' className="inputFieldNormal" type={"email"} {...register('email')} />
                            </FormControl>



                            <FormControl isRequired>
                                <Center>
                                    <Stack direction='row'>
                                        <Text>I want to</Text>
                                        <Controller
                                            render={({ field: { onChange, value } }) => (

                                                <RadioGroup name='type' onChange={onChange} value={value}>
                                                    <Stack direction='row'>

                                                        <Radio value='seller'>Sell</Radio>
                                                        <Radio value='buyer'>Buy</Radio>
                                                    </Stack>
                                                </RadioGroup>

                                            )}
                                            name="type"
                                            control={control}
                                        />
                                        <Text>Voluntary Carbon Credit</Text>
                                    </Stack>
                                </Center>
                            </FormControl>




                        </Stack>
                    </ModalBody>
                    <ModalFooter justifyContent={"center"}>

                        <Button variant={"normalButton"} mr={3} justifyContent={"center"} type='submit'>
                            Subscribe Now
                        </Button>

                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </>)

}

export default LandingPopUp
