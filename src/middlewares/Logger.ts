import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const result = {
    method: req.method,
    path: req.path,
    query: req.query,
    body: req.body,
  };
  res.header("Access-Control-Allow-Origin", "*");
  console.log(result);
  next();
}
