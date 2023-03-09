const pool = require("../config/DBconfig");
const queries = require("../config/queries");

// Get All Employees
const GetAllEmployees = async (req, res, next) => {
  pool.query(queries.getAllEmployees, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};
// Get Employee using Id
const GetEmployeeById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEmployeesById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

// Add a new employee
const AddEmployee = async (req, res, next) => {
  const { name, email, phone, hireDate, role } = req.body;
  // check if the employee already exists and if not, add the employee to table
  pool.query(queries.checkEmailExists, [email], (err, result) => {
    if (result.rows.length) {
      res.status(401).json({
        message: "Employee already exists",
      });
      return;
    }
    // Add New Employee to table
    pool.query(
      queries.addEmployee,
      [name, email, phone, hireDate, role],
      (err, result) => {
        if (err) throw err;
        res.status(201).json(result.rows);
      }
    );
  });
};
const UpdateEmployeeById = async (req, res, next) => {
  // here id = task id
  const { id, title, description, dueDate } = req.body;
  pool.query(
    queries.updateTaskById,
    [id, title, description, dueDate],
    (err, result) => {
      if (err) {
        res.status(400);
        throw err;
      }
      res.status(200).json({ message: "Task updated successfully" });
    }
  );
};
const DeleteEmployeeById = (req, res, next) => {
  const id = req.params.id;
  pool.query(queries.deleteEmployeeById, [id], (err, result) => {
    if (err) {
      res.status(401);
      throw err;
    }
    res.status(200).json({ message: `Employee with id ${id} Deleted` });
  });
};
module.exports = {
  GetAllEmployees,
  GetEmployeeById,
  AddEmployee,
  UpdateEmployeeById,
  DeleteEmployeeById,
};
