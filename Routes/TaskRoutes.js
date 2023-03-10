const { Router } = require("express");
const {
  GetAllTasks,
  GetTaskByE_Id,
  AddTask,
  UpdateTaskById,
  DeleteTaskById,
} = require("../Controllers/TaskController");
const TaskRouter = Router();
TaskRouter.get("/", GetAllTasks);
TaskRouter.post("/", GetTaskByE_Id);
TaskRouter.post("/addtask", AddTask);
TaskRouter.put("/updatetask", UpdateTaskById);
TaskRouter.delete("/deletetask", DeleteTaskById);

module.exports = TaskRouter;
