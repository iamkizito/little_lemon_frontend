import logo from '../assets/images/Logo.svg'
import paths from "../paths";
import SectionContainer from "./SectionContainer";
import { Box, Flex, Image } from "@chakra-ui/react";
import HeaderNavLink from "./HeaderNavLink";
import NavDrawer from "./NavDrawer";
import CartDrawer from "./cart/CartDrawer";
import { 
    faHouse,
    faBowlFood,
    faCreditCard,
    faTable,
    faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons"


export const navLinks = [
    {
        name:'home',
        url: paths.home,
        icon: faHouse
    },
    {
        name:'menu',
        url: paths.menu,
        icon: faBowlFood
    },
    {
        name:'reservation',
        url: paths.reservation,
        icon: faTable
    },
    {
        name:'orders',
        url: paths.orders,
        icon: faCreditCard
    },
    {
        name:'login',
        url: paths.login,
        icon: faArrowRightToBracket
    },
]


const Header = ({active}) => {

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


