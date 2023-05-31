import { Request, Response, NextFunction } from "express";
import { Apparel } from "../models/Apparel";
import { logger } from "../middleware/logger";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
const secretKey = "secretKey";

export const getAllApparels = asyncHandler(
  async (req: Request, res: Response) => {
    const apparels = await Apparel.findAll();

    // jwt.verify(
    //   <string>req.headers.authorization,
    //   secretKey,
    //   (err: any, authData: any) => {
    //     if (err) {
    //       res.send({ result: "invalid token" });
    //     } else {
    //       res.json({
    //         messagge: "apparel accessed",
    //         authData: JSON.stringify(res.json(apparels)),
    //       });
    //     }
    //   }
    // );
    res.json(apparels);
  }
);

export const getApparelById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const apparel = await Apparel.findByPk(id);
    if (!apparel) {
      return res
        .status(404)
        .json({ message: `Apparel with id ${id} not found` });
    }
    res.json(apparel);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createApparel = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, price, imageurl } = req.body;
    if (name && description && price && imageurl) {
      const apparel = await Apparel.create({
        name,
        description,
        price,
        imageurl,
      });
      res.json(apparel);
    } else {
      res.status(400);
      throw new Error(
        "All the following fields are mandatory :: < apparelType, code,price, quantity, size > please provide"
      );
    }
  }
);

export const updateApparel = asyncHandler(
  async (req: any, res: any, next: NextFunction) => {
    const id = req.params.id;
    const { name, description, price, imageurl } = req.body;
    const apparel = await Apparel.findByPk(id);
    if (!apparel) {
      return res
        .status(404)
        .json({ message: `Apparel with id ${id} not found` });
    } else {
      apparel.name = name || apparel.name;
      apparel.description = description || apparel.description;
      apparel.price = price || apparel.price;
      apparel.imageurl = imageurl || apparel.imageurl;
      await apparel.save();
      res.json(apparel);
    }
  }
);

export const deleteApparel = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const apparel = await Apparel.findByPk(id);
    if (!apparel) {
      return res
        .status(404)
        .json({ message: `Apparel with id ${id} not found` });
    }
    await apparel.destroy();
    res.json({ message: `Apparel with id ${id} deleted successfully` });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
// export const vendorDetails = async (req: Request, res: Response) => {
//   const vendor = {
//     vendorName: "Rohit",
//     email: "rohit@rht.com",
//   };
//   jwt.sign({ vendor }, secretKey, { expiresIn: "300s" }, (err, token) => {
//     res.json({ token });
//   });
// };
// export const verify = (req: Request, res: Response, next: NextFunction) => {
//   const bearerHeader = <string>req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     req.headers.authorization = token;
//     next();
//   } else {
//     res.send({
//       result: "token is invalid",
//     });
//   }
// };
