
import path from "node:path";
import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategories";

import { listProducts } from "./app/useCases/products/listProducts";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { createProduct } from "./app/useCases/products/createProduct";

import { listOrders } from "./app/useCases/order/listOrders";
import { createOrder } from "./app/useCases/order/createOrder";
import { changeOrderStatus } from "./app/useCases/order/changeOrderStatus";
import { cancelOrder } from "./app/useCases/order/cancelOrder";
import { deleteProduct } from "./app/useCases/products/deleteProduct";
import { deleteCategory } from "./app/useCases/categories/deleteCategory";

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, "..", "uploads"));
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

// 👉 listar categoria
router.get("/categories", listCategories);

// 👉 create categoria
router.post("/categories", createCategories);

// 👉 delete categoria
router.delete("/categories/:categoryId",  deleteCategory);

// 👉 listar produtos
router.get("/products", listProducts);

// 👉 create produtos
router.post("/products", upload.single("image"), createProduct);

// 👉 create produtos
router.delete("/products/:productId",  deleteProduct);

// 👉 get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

// 👉 listar order
router.get("/orders", listOrders);

// 👉 create order
router.post("/orders", createOrder);

// 👉 change order status
router.patch("/orders/:orderId", changeOrderStatus);
// patch - alteracao parcial de elemento(s)
// put - alteracao completa nos elementos.

// 👉 delete / cancel order
router.delete("/orders/:orderId", cancelOrder);
