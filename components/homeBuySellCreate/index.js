import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Stack,
    Center,
    GridItem,
    Heading,
    Highlight
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"

import imageBuy from "@public/Images/imageBuy.jpg"
import imageSell from "@public/Images/imageSell.jpg"
import imageCreate from "@public/Images/imageCreate.jpg"

import Card from "@components/homeBuySellCreate/card";

const data = [{
    title: "COMPRA",
    img: imageBuy,
    lk: "/projects",
    desc: "Acquista Crediti certificati secondo i migliori standard"
},
{
    title: "VENDI",
    img: imageSell,
    lk: "/sell",
    desc: "Sviluppa nuove opportunità di mercato grazie ai Crediti di Carbonio"
},
{
    title: "CREA",
    img: imageCreate,
    lk: "/create",
    desc: "Accellera il processo di certificazione del tuo progetto Carbon Removal"

},
]

const HomeBuySellCreate = ({cardTexts,popUpTexts}) => {
    return (<>

        <Box>
            <SimpleGrid columns={[1, 1, 1, 3]} gap={0}>
                {data.map((e, i) =>
                <GridItem key={i}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                        <Center>
                            <Text fontSize='3xl' fontWeight={"bold"}>{e.title}</Text><Text fontWeight={"bold"} fontSize='2xl' color='green.400'> .</Text>
                        </Center>
                        <Card popUpTexts={popUpTexts} props={e} />
                    </motion.div>
                </GridItem>)}
            </SimpleGrid>
        </Box>
    </>)
}

export default HomeBuySellCreate

