import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks } from './Header';
import NavDrawerLink from './NavDrawerLink';
import { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import { colorPallete as cp } from "../variables";


const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} bg={cp.primary1} color="white" onClick={onOpen}>
          <FontAwesomeIcon icon={faBars}/>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Quick Navigation</DrawerHeader>
  
            <DrawerBody display="block"> 
                {navLinks.map((navLink, index) => {
                    return (                          
                        <NavDrawerLink key={index} to={navLink.url} close={onClose} data-testid={`${navLink.name}_nav`}> 
                            <FontAwesomeIcon icon={navLink.icon} style={{marginRight:"10px"}}/>
                            {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                        </NavDrawerLink>
                    )              
                })}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default NavDrawer;