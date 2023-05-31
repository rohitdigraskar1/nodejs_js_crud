// import {Request,Response} from "express";

// import Apparel from "../models/Apparel"
// import Order from "../models/Order";

// class OrderController {
//     public static canFulfillOrder(req:Request,res:Response): void {
//         const order:Order = req.body;
//         const stock: Apparel[] = req.app.get("stock");
//         for (const code in order){
//             const apparel = stock.find((apparel)=>apparel.code === code);
//             if(!apparel) {
//     res.status(404).json({error:`Apparel ${code} not found`});
//     return;
//     }        

//     for(const size in order[code]){
//         //check if requested quantity is available
//         const quantity= order[code][size];
//         if(!apparel.sizes[size] || apparel.sizes[size].quantity < quantity){
//             res.status(400).json({error: `not enough quantity available for ${code} (${size}).`});
//             return;
//         }
//     }
//     }
//     //if requested quanity available
//     res.status(200).json({message:"order can be fulfilled"})
//     }
// }

//     export default OrderController;
