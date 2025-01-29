import { Box, Heading, HStack, Image, Button, Text, VStack, Input } from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import { toaster } from './ui/toaster';
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogActionTrigger,
  DialogCloseTrigger,
} from "../components/ui/dialog";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: `Unsuccessful`,
        type: "error",
      });
    } else {
      toaster.create({
        title: `Deleted`,
        type: "success",
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'scale(1.03)',
        shadow: '2xl',
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={200}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2} noOfLines={1}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color="blue.600" mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button
                leftIcon={<FaEdit />}
                colorScheme="blue"
                aria-label="Edit Product"
                fontSize="xl"
                padding="10px"
                _hover={{
                  backgroundColor: 'blue.600',
                }}
                _active={{
                  backgroundColor: 'blue.700',
                }}
              >
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                  >
                    Update
                  </Button>
                </DialogActionTrigger>
                <DialogCloseTrigger asChild>
                  <Button variant="ghost" onClick={() => {}}>Cancel</Button>
                </DialogCloseTrigger>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
          <Button
            leftIcon={<FaDeleteLeft />}
            colorScheme="red"
            aria-label="Delete Product"
            onClick={() => handleDeleteProduct(product._id)}
            fontSize="xl"
            padding="10px"
            _hover={{
              backgroundColor: 'red.600',
            }}
            _active={{
              backgroundColor: 'red.700',
            }}
          >
            Delete
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
