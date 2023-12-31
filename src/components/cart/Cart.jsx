import Main from "../Main";
import SectionContainer from "../SectionContainer";
import CartItem from "./CartItem";
import { useCartContext } from "../../contexts/useCartContext";
import { Box, Flex, Button } from "@chakra-ui/react";


const Cart = () => {
    const {cart} = useCartContext()

    const primaryColor1 = "#495E57"
    const primaryColor2 = "#F4CE14"

    const calcTotal = () => {
        let total = 0
        cart.forEach((item) => {
            total += (item.count * item.price)
        })  
        return total
    }

    const calcTax = () => {
        let taxPercent = 0.1;
        let tax = 0;
        cart.forEach((item) => {
            tax += (item.count * item.price * taxPercent)
        })  
        return tax
    }

    const total = calcTotal()
    const tax = calcTax()

    return (
        <Main id="cart_page" fontSize={{base:"0.8rem", md:"1rem"}}>
            <SectionContainer className="container" padding="0">
                <Flex className="cart_header" bg={primaryColor1} padding={2} marginBottom={10} color="white">
                    <Box flex={1}>Meal</Box>
                    <Box flex={1} textAlign="center">
                        Quantity
                    </Box>
                    <Box flex={1} textAlign="flex-end">
                        Subtotal
                    </Box>   
                </Flex>

                <Flex className="Cart_items" flexDirection="column" gap={5}>
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                                item={item}
                            />
                        )
                    })}
                </Flex>

                <Flex className="total_summary" justify="flex-end" marginBottom={10}>

                    <Flex flexDirection="column" gap={5} width="50%" paddingTop={5}>
                        <Box as="hr" bg={primaryColor1} height="2px"></Box>
                        <Flex flex={1} justify="space-between">
                            <Box>Subtotal</Box>
                            <Box>${total}</Box>
                        </Flex>
                        <Flex flex={1} justify="space-between">
                            <Box>Tax</Box>
                            <Box>${tax}</Box>
                        </Flex>
                        <Flex flex={1} justify="space-between">
                            <Box>Total</Box>
                            <Box>${total + tax}</Box>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex justify="flex-end" paddingBottom={20}>
                    <Button bg={primaryColor2} fontSize="0.95rem">Proceed to pay</Button>
                </Flex>
                
            </SectionContainer>
        </Main>
    )
}

export default Cart;




