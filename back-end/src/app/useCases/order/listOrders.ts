import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
    try {
        const orders = await Order.find()
            .sort({ createdAt: 1 }) // -1 o ultimo que saiu --> 1 o primeiro que saiu
            .populate("products.product");

        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}



