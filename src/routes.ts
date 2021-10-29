import { Router } from "express";
import ToDoController from "./controllers/ToDoController";
import { validator } from "./middlewares/RequestValidator";
import schema from "./RequestSchema";

const router = Router();

const controller = new ToDoController();

router
  .route("/todos")
  .post(validator(schema.create), controller.create)
  .get(controller.getAll);
router
  .route("/todos/:id")
  .get(validator(schema.getOne), controller.getOne)
  .patch(validator(schema.update), controller.update)
  .delete(validator(schema.delete), controller.delete);

export default router;
