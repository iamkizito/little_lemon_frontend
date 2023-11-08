import React, { useState } from "react";
import logo from '../assets/images/Logo.svg'
import paths from "../paths";
import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../contexts/useCartContext";

import { Box, Flex, Image } from "@chakra-ui/react";
import { colorPallete as cp } from "../variables";
import HeaderNavLink from "./HeaderNavLink";
import NavDrawer from "./NavDrawer";
import CartDrawer from "./cart/CartDrawer";

export const navLinks = [
    {
        name:'home',
        url: paths.home
    },
    {
        name:'menu',
        url: paths.menu
    },
    {
        name:'reservation',
        url: paths.reservation
    },
    {
        name:'orders',
        url: paths.orders
    },
    {
        name:'login',
        url: paths.login
    },
]


const Header = ({active}) => {

    const {cart} = useCartContext()

    return (
        <Box as="header" id="header" data-testid="header_component"
            height={{base: "80px"}}
            fontSize="0.9rem"
            fontWeight="bold"
        >
            <SectionContainer className="container"
                flex={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="20px"
            >
                <Box className="logo">
                    <Image width="170px" src={logo} alt="Logo" />
                </Box>

                <Flex as="nav" className="nav_items" gap="30px" display={{base: "none", md: "flex"}}>
                    {navLinks.map((navLink, index) => {
                        return (                          
                            <HeaderNavLink key={index} to={navLink.url} isActive={active === navLink.name} data-testid={`${navLink.name}_nav`}> 
                                {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                            </HeaderNavLink>
                        )              
                    })}
                </Flex>

                <CartDrawer/>

                <Box display={{base: "block", md: "none"}}>
                    <NavDrawer/>
                </Box>
                
            </SectionContainer>
        </Box>
    )
};
export default Header;


