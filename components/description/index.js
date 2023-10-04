import React, { useEffect, useState } from "react"
import {
    StackDivider,
    Stack,
    Flex,
    Image,
    Container,
    Highlight,
    Center,
    Heading,
    Text,
    Box,

} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"


import co2 from "@public/Images/icons/co2.svg"
import ecology from "@public/Images/icons/ecology.svg"
import footprint from "@public/Images/icons/footprint.svg"
import forest from "@public/Images/icons/forest.svg"
import greenIndustry from "@public/Images/icons/greenIndustry.svg"
import greenIndustry2 from "@public/Images/icons/greenIndustry2.svg"
import leave from "@public/Images/icons/leave.svg"


const MotionFlex = motion(Flex)




const ImageRow = (info) => {
    return (<>
        <Center w={{ base: "100%", lg: "50%" }}>
            <Box >
                    <Image
                        src={info.img.src}
                        alt='Image'
                        w="100px"
                        h="100px"
                        objectFit='cover'


                    />
            </Box>
        </Center>

    </>);
}

const BoxRow = (info) => {
    return (

        <Box textAlign={"center"} justifyContent={"center"} boxSize={{ base: "100%", lg: "40%" }} mt={{ base: 8, lg: 0 }}>
            <Center textAlign={"center"}><Heading textAlign={"center"} justifyContent={"center"} pb="5" color="#136213">{info.title} </Heading></Center>
            <Text fontSize={"lg"}>{info.description}
            </Text>
        </Box>

    );
}

const RowBoxLeft = (info) => {
    return (
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-around"} my={6}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <ImageRow {...info} />
            <BoxRow {...info} />
        </MotionFlex>
    );

}

const RowBoxRight = (info) => {
    return (
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-around"} my={6}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <BoxRow {...info} />
            <ImageRow {...info} />
        </MotionFlex>
    );

}


const Description = ({sectionText}) => {
const rows = {
    row1: { title: sectionText.section1.title, description: sectionText.section1.description, img: co2 },
    row2: { title: sectionText.section2.title, description: sectionText.section2.description, img: forest },
    row3: { title: sectionText.section3.title, description: sectionText.section3.description, img: footprint },
}
    const [dimension, setDimension] = useState(true);
    const MotionHeading = motion(Heading)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 992) {

                setDimension(false)
            }
            else {
                setDimension(true)

            }

        }

        window.addEventListener('resize', handleResize);
        handleResize();
    })

    return (
        <>
            <Flex direction={"column"}
                backgroundColor={"white"}
                mx='16px'
            >
                <Stack divider={<StackDivider borderColor="gray.200" />}>
                    <RowBoxLeft {...rows.row1} />
                    {dimension ? <RowBoxRight {...rows.row2} /> : <RowBoxLeft {...rows.row2} />}
                    <RowBoxLeft {...rows.row3} />
                </Stack>
            </Flex>

        </>

    )
}


export default Description
