import React from 'react'
import { ReactNode } from 'react';

import {
  Box,
  chakra,
  Container,
  useDisclosure,
  Center,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Image,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

import LogoGB from '@public/logoGB.png'

import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import { writefile } from '@lib/writeFile';

import LandingPopUp from '@components/landingPopUp';



const SocialButton = ({
  children,
  label,
  href,
  bgColor,
}) => {
  return (
    <chakra.button
      bg={bgColor}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={"_blank"}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      color={"#FFFFFF"}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        color: bgColor
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (<>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ base:'1fr', sm: '1fr ', md: '2fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>

            <Box w={"70%"} as={"a"} href={"/"}>
              <Image src={LogoGB.src} color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 GreenBoost. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              {/* <SocialButton label={'Twitter'} href={'#'} bgColor={"#00acee"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.linkedin.com/company/greenboost/'} bgColor={"#0077B5"}>
                <FaLinkedin />
              </SocialButton>
      
              <SocialButton label={'Instagram'} href={'#'} bgColor={"#E1306C"}>
                <FaInstagram />
              </SocialButton>*/}
            </Stack>
          </Stack>



          <Center>
            <Button

              bg="primary"
              onClick={onOpen}
              color={useColorModeValue('white', 'gray.800')}
              _hover={{
                bg: 'gray.300',
                color:'primary'
              }}

              rightIcon={<BiMailSend />}
            >
              Stay up to date
            </Button>
            <Text px={2}>or</Text>

            <Button

              bg="#0077B5"

              as={"a"}
              href={'https://www.linkedin.com/company/greenboost/'}
              color={useColorModeValue('white', 'gray.800')}
              _hover={{
                bg: 'gray.300',
                color:'#0077B5'
              }}

              rightIcon={<FaLinkedin />}
            >
              Contact us
            </Button>

          </Center>
        </SimpleGrid>
      </Container>
    </Box>
    <LandingPopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
  </>)

}

export default Footer



