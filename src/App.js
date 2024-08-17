import React from 'react';
import {
  ChakraProvider,
  Box,  
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
      </BreadcrumbItem>

       <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Work With Me </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
         <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="20vmin" pointerEvents="none" />
            <Text fontSize='5xl'>Welcome to the personal website of</Text>
            <Text fontSize='6xl'>Matt Cousineau</Text>

            <Text>
              I'm a web developer, investor, and family man/crypto enthusiast/gamer/shitposter/outdoorsman.  
              <br />
              I've worked for over a decade developing TradFi systems for banks and insurance companies, as well as occasionally moonlighting in Ethereum DeFi.   
            </Text>
            <Text fontSize='xs'>i liked the stock vsg icon so i left it, sue me (jk plz don't)</Text>
            <Link
              color="teal.500"
              href="https://www.github.com/mattcousineau"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </Link>
            <Link
              color="teal.500"
              href="https://www.x.com/moonwizard69"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
