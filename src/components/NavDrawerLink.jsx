import {Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavDrawerLink = ({to, children, close, ...props}) => {
    const [isPointerDown, setIsPointerDown] = useState(false)

    return (
        <Box as={Link}
            style={{
                display: 'block',
                padding: "10px"
            }}
            to={to}
            bg={isPointerDown? "red": ''}
            onPointerDown={() => setIsPointerDown(true)}
            onPointerUp={() => setIsPointerDown(false)}
            onClick={close}
            {...props}
        >
            {children}
        </Box>
    )
}


export default NavDrawerLink;