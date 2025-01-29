import { Button, Container, Flex, HStack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { useProductStore } from '../store/product';

const Navbar = () => {
  return (
    <Box bg={"gray.800"} py={3} px={4} shadow="md">
      <Container maxW="1140px">
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
        >
          {/* Store Name */}
          <Text
            fontSize={{ base: "22px", sm: "28px" }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            <Link to="/">Product Store</Link>
          </Text>

          {/* Button */}
          <HStack spacing={2} alignItems="center">
            <Link to="/create">
              <Button>
              <CiSquarePlus />
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
