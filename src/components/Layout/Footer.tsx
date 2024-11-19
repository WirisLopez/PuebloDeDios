import {Box, BoxProps, ButtonGroup, Center, Divider, IconButton, keyframes, Stack, Text, VStack} from '@chakra-ui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Logo} from "@/components/Logo";
import React from "react";
import moment from "moment";
import Container from './Container';

export const Footer = (props: BoxProps) => {
  const redes = [
    {
      name: "Facebook",
      icon: <FontAwesomeIcon fontSize="1.25rem" icon={faFacebook}/>,
      url: "https://www.facebook.com/"
    },
    {
      name: "Twitter",
      icon: <FontAwesomeIcon fontSize="1.25rem" icon={faXTwitter}/>,
      url: "https://x.com/"
    },
    {
      name: "Instagram",
      icon: <FontAwesomeIcon fontSize="1.25rem" icon={faInstagram}/>,
      url: "https://www.instagram.com/"
    },
  ]

  const animationBg = keyframes`
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  `;

  return (
    <Box
      as="footer"
      role="contentinfo"
      px={{base: '8'}}
      bgGradient="linear(to-r, gray.900, blue.900, blue.800, blue.600, purple.900)"
      bgSize={"200% 200%"}
      animation={`${animationBg} 10s ease infinite`}
      {...props}
      py={5}
      pb={5}
    >
      <Container>
        <Stack
          spacing="8"
          direction={{base: 'column', md: 'row'}}
          justify="space-between"
          py={{base: '0', md: '2'}}
        >
          <Center justifyContent={"space-between"}> 
            <Logo width="60%"/>
          </Center>
          <VStack>
            <Text fontSize="md" color="white">
              &copy; {moment().format("YYYY")} Iglesia Cristiana de Pachuca
            </Text>
            <ButtonGroup variant="ghost">
              {
                redes.map(({name, url, icon}) => (
                  <IconButton
                    target={"_blank"}
                    key={name}
                    as="a"
                    href={url}
                    aria-label={name}
                    icon={icon}
                    color={"white"}
                    _hover={{color: "white"}}
                  />
                ))
              }
            </ButtonGroup>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}
