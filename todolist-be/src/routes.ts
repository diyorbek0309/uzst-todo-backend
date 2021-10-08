import { Router } from "express";
import ToDoController from "./controllers/ToDoController";

const router = Router();

const controller = new ToDoController();

router.route("/todos").post(controller.create).get(controller.getAll);
router
  .route("/todos/:id")
  .get(controller.getOne)
  .patch(controller.update)
  .delete(controller.delete);

export default router;
