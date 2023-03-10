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
  const { name, email, phone, hireDate, position } = req.body;
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
      [name, email, phone, hireDate, position],
      (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: "Added employee" });
      }
    );
  });
};
const UpdateEmployeeById = async (req, res, next) => {
  const { id, name, email, phone, hireDate, position } = req.body;

  let currId;

  pool.query(queries.checkEmailExists, [email], (err, result) => {
    if (err) throw err;
    currId = result.rows[0]?.id;
  });

  if (currId && id !== currId) {
    return res.status(400).json({ message: "Email already exists" });
  }

  pool.query(
    queries.updateEmployeeById,
    [name, email, phone, hireDate, position, id],
    (err, result) => {
      if (err) {
        res.status(400);
        throw err;
      }
      res.status(200).json({ message: "employee updated successfully" });
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
