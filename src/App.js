import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

// Global style to prevent scrolling when the modal is open
const GlobalStyle = createGlobalStyle`
  body {
    ${({ isModalOpen }) => isModalOpen && `
      overflow: hidden;
    `}
  }
`;

const PageWrapper = styled.div`
  filter: ${({ isModalOpen }) => (isModalOpen ? 'blur(8px)' : 'none')};
  transition: filter 0.3s ease-in-out;
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? 'none' : 'all')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black; /* Black background for old-school look */
  border-radius: 10px;
  width: 300px;
  color: #00FF00; /* Bright green for the text */
  text-align: center;
  z-index: 15;
  overflow: hidden;
  font-family: 'Courier New', Courier, monospace; /* Old-school terminal font */
`;

const ModalHeader = styled.div`
  background-color: #C0C0C0; /* Windows 95 grey header color */
  color: black; /* Black text */
  padding: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Courier New', Courier, monospace; /* Apply terminal font to header */
`;

const HeaderText = styled.span`
  font-size: 14px; /* Reduce the font size to make sure it fits */
  overflow: hidden;
  text-overflow: ellipsis; /* Ensures long text is truncated */
  max-width: 200px; /* Limiting the width so the close button has space */
  position: relative;

  /* Blinking cursor */
  &::after {
    content: '▉'; /* Blinking block cursor */
    font-weight: bold;
    display: inline-block;
    margin-left: 5px;
    animation: blink 1s step-end infinite; /* Blinking effect */
  }

  @keyframes blink {
    50% {
      opacity: 0; /* Invisible for half the animation cycle */
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const ModalContent = styled.div`
  padding: 20px;
  font-family: 'Courier New', Courier, monospace; /* Apply terminal font to content */
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 15px 0;
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  color: #00FF00; /* Bright green */
  display: block; /* Ensures each menu item is vertical */
  transition: opacity 0.3s ease, text-shadow 0.3s ease;

  /* Glow effect on hover */
  &:hover {
    text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #39FF14;
  }

  /* Re-typing animation on hover */
  &:hover span {
    display: inline-block;
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
  }

  & span {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    /* Typing effect - border appears only during typing */
    animation-fill-mode: forwards; /* Ensures the border doesn't reappear after typing ends */
  }

  /* Keyframes for typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Keyframes for caret blinking (appears only during typing) */
  @keyframes blink-caret {
    from, to {
      border-right: 2px solid #00FF00; /* Caret appears only during typing */
    }
    50% {
      border-right: 2px solid transparent;
    }
  }
`;

const MenuModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <ModalBackground isOpen={isOpen}>
          <ModalWrapper>
            <ModalHeader>
              <HeaderText>~/COUSINEAU/DIRECTORY/</HeaderText>
              <CloseButton onClick={onClose}>X</CloseButton>
            </ModalHeader>
            <ModalContent>
              <MenuList>
                <MenuItem><span>Home</span></MenuItem>
                <MenuItem><span>About Me</span></MenuItem>
                <MenuItem><span>GitHub</span></MenuItem>
                <MenuItem><span>Farcaster</span></MenuItem>
                <MenuItem><span>X.com</span></MenuItem>
                <MenuItem><span>Projects</span></MenuItem>
              </MenuList>
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle isModalOpen={isModalOpen} />
      <PageWrapper isModalOpen={isModalOpen}>
        <div>
          <button onClick={openModal}>Open Menu</button>
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
              <Link
                  color="teal.500"
                  href="https://www.base.org/name/moonwizard"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                ><Logo h="20vmin" pointerEvents="none" /></Link>
                <Text fontSize='6xl'>Matt Cousineau</Text>

                <Text>
                  I'm a full-stack developer, investor, entrepreneur, and family man/crypto enthusiast/gamer/shitposter.
                  <br />
                  I've worked for over a decade developing TradFi systems for banks and insurance companies, as well as occasionally moonlighting in Ethereum DeFi. 
                  <br />
                </Text>
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
                  href="https://www.x.com/wget_matt"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar size='lg' name='Christian Nwamba' src='wizard.jpg' />
                </Link>
              </VStack>
            </Grid>
          </Box>
        </div>
      </PageWrapper>
      <MenuModal isOpen={isModalOpen} onClose={closeModal} />
    </ChakraProvider>
  );
}

export default App;