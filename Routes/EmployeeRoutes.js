const { Router } = require("express");
const {
  GetAllEmployees,
  GetEmployeeById,
  AddEmployee,
  UpdateEmployeeById,
  DeleteEmployeeById,
} = require("../Controllers/EmployeeController");
const EmployeeRouter = Router();
EmployeeRouter.get("/", GetAllEmployees);
EmployeeRouter.get("/:id", GetEmployeeById);
EmployeeRouter.post("/addemployee", AddEmployee);
EmployeeRouter.put("/updateemployee", UpdateEmployeeById);
EmployeeRouter.delete("/:id", DeleteEmployeeById);
module.exports = EmployeeRouter;
