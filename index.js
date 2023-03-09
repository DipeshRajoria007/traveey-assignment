const express = require("express");
const app = express();
const EmployeeRouter = require("./Routes/EmployeeRoutes");
const TaskRouter = require("./Routes/TaskRoutes");
const PORT = 9999;
app.use(express.json());

app.use("/api/v1/employee", EmployeeRouter);
app.use("/api/v1/task", TaskRouter);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
