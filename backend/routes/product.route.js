import express from "express";
import {

  createProductController,
  getProductController,
} from "../controllers/product.controller.js";

const productRoutes = express.Router();


productRoutes.post(
  "/createproduct",
  createProductController
);
productRoutes.get("/get-product", getProductController);

export default productRoutes;