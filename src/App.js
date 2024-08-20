import React from 'react';
import {
  Avatar, 
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
    <Breadcrumb fontWeight='bold' fontSize='lg'>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='mailto:mjcousineau1@gmail.com'>Contact</BreadcrumbLink>
      </BreadcrumbItem>

       <BreadcrumbItem>
        <BreadcrumbLink href='#'>Work With Me</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
         <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="20vmin" pointerEvents="none" />
            <Text fontSize='6xl'>Matt Cousineau</Text>

            <Text>
              I'm a full-stack developer, investor, entrepreneur, and family man/crypto enthusiast/gamer/shitposter.  
              <br />
              I've worked for over a decade developing TradFi systems for banks and insurance companies, as well as occasionally moonlighting in Ethereum DeFi. 
              <br />
                
            </Text>
            <Text fontSize='xs'>i liked the stock chakra vsg icon so i left it, sue me (jk plz don't)</Text>
            <Link
              color="teal.500"
              href="https://www.github.com/moonwizard69"
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
               <Avatar size='lg' name='Christian Nwamba' src='wizard.jpg' />
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
