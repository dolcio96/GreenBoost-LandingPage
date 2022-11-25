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

        return (true
            // fetch('https://api.mailjet.com/v3.1/send', {
            //     method: "POST",
            //     headers: {
            //         'Authorization': 'Basic NDgzZGQ3ZjdmMTc0ODdlMzI0OTdmMGI2MjFkYmY3NDg6NGQ4ODU5MDViMGY0MzI1MzIxMDdhOWJhN2Q5YjQ4ZTU=',
            //         'Content-Type': 'application/json'
            //     },
            //     mode: 'no-cors',
            //     body: '{"Messages":[{"From": {"Email": "admin@greenboost.it"},"To": [{"Email": "admin@greenboost.it"}],"Subject": "zxc","TextPart": "qwe","HTMLPart": "asd"}]}'
            // })
            //     .then(() => {
            //         onClose()
            //         toast({
            //             position: 'bottom-left',
            //             title: "Thank you!",
            //             description: "We've sent an email with other information.",
            //             status: "success", //https://stackoverflow.com/questions/69531448/how-to-change-the-background-color-of-the-chakra-ui-toast-component
            //             duration: 5000,
            //             isClosable: true,
            //         })
            //     }).catch(() => {
            //         onClose()
            //         toast({
            //             position: 'bottom-left',
            //             title: "Error!",
            //             description: "Something went wrong.",
            //             status: "error", //https://stackoverflow.com/questions/69531448/how-to-change-the-background-color-of-the-chakra-ui-toast-component
            //             duration: 5000,
            //             isClosable: true,
            //         })
            //     })

            //fetch('/?email=' + subscriber.email + '&type=' + subscriber.type, {
            // fetch('https://api.sendgrid.com/v3/mail/send', {
            //     method: "POST",
            //     headers: {
            //         'Authorization': 'Bearer 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',
            //         'Content-Type': 'application/json'
            //     },
            //     mode: 'no-cors',
            //     body: JSON.stringify({ "personalizations": [{ "to": [{ "email": "admin@greenboost.it" }] }], "from": { "email": "admin@greenboost.it" }, "subject": "Sending with SendGrid is Fun", "content": [{ "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }] })

            // }).then(() => {
            //     onClose()
            //     toast({
            //         position: 'bottom-left',
            //         title: "Thank you!",
            //         description: "We've sent an email with other information.",
            //         status: "success", //https://stackoverflow.com/questions/69531448/how-to-change-the-background-color-of-the-chakra-ui-toast-component
            //         duration: 5000,
            //         isClosable: true,
            //     })
            // }).catch(() => {
            //     onClose()
            //     toast({
            //         position: 'bottom-left',
            //         title: "Error!",
            //         description: "Something went wrong.",
            //         status: "error", //https://stackoverflow.com/questions/69531448/how-to-change-the-background-color-of-the-chakra-ui-toast-component
            //         duration: 5000,
            //         isClosable: true,
            //     })
            // })
        );

    }

    return (<>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay
                backdropFilter='blur(3px) hue-rotate(50deg)'
            />
            <ModalContent >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader justifyContent={"center"} textAlign={"center"}>Stay Tuned, Subscribe Now!</ModalHeader>

                    <ModalBody>
                        <Stack direction={'column'} spacing={6}>
                            <Center><Text>Send us your email if you are interested in the project</Text>  </Center>
                            <FormControl isRequired>
                                <Input placeholder='Email' className="inputFieldNormal"  {...register('email')} />
                            </FormControl>
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
