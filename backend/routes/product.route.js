import express from "express";
import { createProducts, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Create Product
router.post("/", createProducts);

// Get All Products
router.get("/", getProducts);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router;
