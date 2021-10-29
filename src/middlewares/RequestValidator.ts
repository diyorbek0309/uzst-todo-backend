import { Request, Response, NextFunction } from "express";

export const validator = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data: any = {};
    if (req.body && Object.keys(req.body).length > 0) {
      data.body = req.body;
    }
    if (req.params && Object.keys(req.params).length > 0) {
      data.params = req.params;
    }
    if (req.query && Object.keys(req.query).length > 0) {
      data.query = req.query;
    }
    const { error } = schema.validate(data);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((detail: any) => {
        return {
          message: detail.message,
          type: detail.type,
          path: detail.path[0],
          property: detail.context.key,
        };
      });
      return res.status(422).send({ message: "VALIDATION_ERROR", e: message });
    }
  };
};
