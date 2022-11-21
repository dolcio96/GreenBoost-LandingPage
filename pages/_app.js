import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/test.scss'
//import '../styles/test2.scss'
import { myTheme } from 'styles/theme';

function MyApp({
  Component,
  pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <>
      <ChakraProvider theme={myTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
  </>
}

export default MyApp
