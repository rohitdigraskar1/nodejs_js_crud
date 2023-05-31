import { Request, Response, NextFunction } from "express";
import constants from "../constants/constants";
export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        StackTrace: err.stack,
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        message: err.message,
        StackTrace: err.stack,
      });
      break;

    default:
      console.log("Not an error: All Good!");
      break;
  }
};
export default errorHandler;