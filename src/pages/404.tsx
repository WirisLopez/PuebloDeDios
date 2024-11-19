import Head from "next/head";
import {Button, Center, Image, Box} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useState} from "react";

const NotFound = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    await router.push("/admin")
  }

  return (<>
    <Head>
      <title>Pagina no encontrada</title>
      <link rel="shortcut icon" href="/assets/icons/favicon.ico"/>
      <meta property="og:title" content="Global Investment"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://globalinvestment.com.mx/"/>
      <meta property="og:image" content="https://globalinvestment.com.mx/assets/icons/favicon.ico"/>
    </Head>

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Image
        width="70%"
        src="/assets/images/404NotFound.png"
        borderRadius="full"
        alt="logo"
      />
      <Center>
        <Button
          onClick={handleClick}
          colorScheme="blue"
          isLoading={isLoading}
        >
          Ir al inicio
        </Button>
      </Center>
    </Box>
  </>);
};

export default NotFound;