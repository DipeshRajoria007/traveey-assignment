// Queries for Employees Table
const getAllEmployees = "SELECT * FROM employees;";
const getEmployeesById = "SELECT * FROM employees WHERE id = $1;";
const addEmployee =
  "INSERT INTO employees (name,email,phone,hireDate,position) VALUES ($1,$2,$3,$4,$5);";
const checkEmailExists = "SELECT e FROM employees e WHERE e.email = $1;";
const deleteEmployeeById = "DELETE FROM employees where id= $1;";
const updateEmployeeById =
  "UPDATE employees SET name = $1 ,email = $2, phone =$3 , hireDate = $4,position = $5 where id= $6;";

// Queries for Tasks Table
const getAllTasks = "SELECT * FROM tasks;";
const getTaskByE_Id = "SELECT * FROM tasks WHERE e_id = $1;";
const addTask =
  "INSERT INTO tasks (title,description,dueDate,e_id) VALUES ($1,$2,$3,$4);";
const checkTaskById = "SELECT * FROM tasks WHERE id = $1 AND e_id =$2;";
const updateTaskById =
  "UPDATE tasks SET title = $2, description = $3, dueDate = $4 WHERE id = $1;";

const deleteTaskById = "DELETE FROM tasks WHERE id = $1;";
module.exports = {
  getAllEmployees,
  getEmployeesById,
  addEmployee,
  checkEmailExists,
  updateEmployeeById,
  deleteEmployeeById,

  // task queries export
  getAllTasks,
  getTaskByE_Id,
  addTask,
  checkTaskById,
  updateTaskById,
  deleteTaskById,
};
