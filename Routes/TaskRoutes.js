const { Router } = require("express");
const {
  GetAllTasks,
  GetTaskByE_Id,
  AddTask,
  UpdateTaskById,
} = require("../Controllers/TaskController");
const TaskRouter = Router();
TaskRouter.get("/", GetAllTasks);
TaskRouter.get("/:id", GetTaskByE_Id);
TaskRouter.post("/addTask", AddTask);
TaskRouter.put("/updateTask", UpdateTaskById);
module.exports = TaskRouter;
