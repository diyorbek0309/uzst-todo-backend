import { Request, Response } from "express";
import ToDo, { IToDo } from "../models/ToDoSchema";

export default class {
  async create(req: Request, res: Response) {
    try {
      const todo: IToDo = await ToDo.create({
        ...req.body,
      });

      return res.status(200).send({ message: "OK", data: todo });
    } catch (e) {
      return res.status(500).send({ message: "SERVER_ERROR", error: e });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skipIndex = (page - 1) * limit;

      const paginatedToDos = await ToDo.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();

      return res.status(200).send({ message: "OK", data: paginatedToDos });
    } catch (e) {
      return res.status(500).send({ message: "SERVER_ERROR", error: e });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const todo = await ToDo.findOne({ _id: req.params.id });
      if (!todo) {
        return res.status(404).send({ message: "NOT_FOUND" });
      }

      return res.status(200).send({ message: "OK", data: todo });
    } catch (e) {
      return res.status(500).send({ message: "SERVER_ERROR", error: e });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!todo) {
        return res.status(404).send({ message: "NOT_FOUND" });
      }

      return res.status(200).send({ message: "OK", data: todo });
    } catch (e) {
      return res.status(500).send({ message: "SERVER_ERROR", error: e });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const todo = await ToDo.findByIdAndDelete(req.params.id);
      if (!todo) {
        return res.status(404).send({ message: "NOT_FOUND" });
      }
      return res.status(200).send({ message: "OK", data: todo });
    } catch (e) {
      return res.status(500).send({ message: "SERVER_ERROR", error: e });
    }
  }
}
