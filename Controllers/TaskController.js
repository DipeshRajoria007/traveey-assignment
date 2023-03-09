const pool = require("../config/DBconfig");
const queries = require("../config/queries");

// GET ALL TASKS
const GetAllTasks = async (req, res, next) => {
  pool.query(queries.getAllTasks, (err, result) => {
    if (err) {
      res.status(401).json({ message: err });
    }
    res.status(200).json(result.rows);
  });
};

// GET ALL TASKS BY E_ID
const GetTaskByE_Id = async (req, res, next) => {
  // employee ID
  const { e_id } = req.body;
  pool.query(queries.getTaskByE_Id, [e_id], (err, result) => {
    if (err) {
      res.status(401).json({ message: err });
    }
    res.status(200).json(result.rows);
  });
};

// ADD TASK
const AddTask = async (req, res, next) => {
  const { title, description, dueDate, e_id } = req.body;
  pool.query(
    queries.addTask,
    [title, description, dueDate, e_id],
    (err, result) => {
      if (err) {
        res.status(401).json({ message: err });
      }
      res.status(200).json({ message: "task added successfully" });
    }
  );
};

// UPDATE TASK
const UpdateTaskById = async (req, res, next) => {
  // TASK ID
  const { id, title, description, dueDate, e_id } = req.body;

  // check if task exists with the given id
  pool.query(queries.checkTaskById, [id, e_id], (err, result) => {
    if (err) {
      res.status(402);
      throw err;
    }
    if (result.rows.length) {
      pool.query(
        queries.updateTaskById,
        [id, title, description, dueDate],
        (err, result) => {
          if (err) {
            res.status(401);
            throw err;
          }
          res.status(200).json({ message: "successfully updated task" });
        }
      );
    }
  });
};
module.exports = {
  GetAllTasks,
  GetTaskByE_Id,
  AddTask,
  UpdateTaskById,
};
