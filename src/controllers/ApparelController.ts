import asyncHandler from "express-async-handler";
import Apparel from "../models/Apparel";
import * as service from "../services/apparelServices";
import { Request, Response } from "express";

//@desc get all the available apparels
//@route GET /api/apparels
//@access public
export const getApparels = asyncHandler(async (req: any, res: any) => {
  res.status(200).json({
    message: `get all the available apparels!`,
    Data: JSON.parse(service.readFile()),
  });
});

//@desc get the available apparel with the code
//@route GET /api/apparels
//@access public

export const getApparel = asyncHandler(async (req: Request, res: Response) => {
  const { code } = req.params;
  const fileData = JSON.parse(service.readFile()) as string[];
  const apparel = fileData.find((a: any) => a.code === code);
  if (!apparel) {
    res.status(404).send("Apparel not found");
  } else {
    res.status(200).json({
      message: `get the available apparel having code ${req.params.code}`,
      Data: apparel,
    });
  }
});

//@desc add new apparel
//@route POST /api/apparels
//@access public

export const addApparel = asyncHandler(
  async (req: any, res: any, next: any) => {
    console.log("The requested body is ", req.body);
    const apparel: Apparel = req.body;
    if (
      !(
        apparel.apparelType &&
        apparel.code &&
        apparel.price &&
        apparel.quantity &&
        apparel.size
      )
    ) {
      res.status(400);
      throw new Error(
        "All the following fields are mandatory :: < apparelType, code,price, quantity, size > please provide"
      );
    } else {
      const fileData = JSON.parse(service.readFile()) as string[];
      fileData.push(req.body);
      service.write_File(JSON.stringify(fileData));
      res.status(201).json({
        message: `add new apparel`,
        Data: apparel,
      });
    }
  }
);

//@desc update the existing apparel
//@route PUT /api/apparels/:code
//@access public

export const updateApparel = asyncHandler(async (req: any, res: any) => {
  const { code } = req.params;
  const fileData = JSON.parse(service.readFile()) as Apparel[];
  const index = fileData.findIndex((data) => {
    data.code == code;
  });
  if (!fileData) {
    res.status(404).send("Apparel not found");
  } else {
    res.status(200).json({
      message: `apparel having code ${req.params.code} updated succefully!`,
    });
  }
  const updatedItem: Apparel = {
    ...fileData[index + 1],
    ...req.body,
  };

  fileData[index + 1] = updatedItem;
  service.write_File(JSON.stringify(fileData));
});

//@desc delete the existing apparel
//@route DELETE /api/apparels/:code
//@access public

export const deleteApparel = asyncHandler(async (req: any, res: any) => {
  const code = req.params.code;
  const fileData = JSON.parse(service.readFile());
  const index = fileData.findIndex((data) => {
    data.code === code;
  });
  if (fileData == -1) {
    res.status(404).send("Apparel not found");
  } else {
    res.status(200).json({
      message: `Delete apparel having code ${req.params.code}`,
    });
    fileData.splice(index, 1);
    console.log("index is here    ", index);
    service.write_File(JSON.stringify(fileData));
  }
});

module.exports = {
  getApparels,
  getApparel,
  addApparel,
  updateApparel,
  deleteApparel,
};
