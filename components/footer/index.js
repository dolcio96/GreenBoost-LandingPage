import React from 'react'
import { ReactNode } from 'react';

import {
  Box,
  chakra,
  Container,
  Link,
  Center,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import LogoGB from '@public/logoGB.png'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

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
  return (<>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
           
            <Box w={"70%"} as={"a"} href={"/"}>
              <Image src={LogoGB.src} color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 GreenBoost. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'} bgColor={"#00acee"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'} bgColor={"#FF0000"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'} bgColor={"#E1306C"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg="primary"
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </Box>
  </>)

}

export default Footer



