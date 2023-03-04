const Task = require("../models/taskModel");

//homepage
const home = (req, res) => {
  res.send("Hello World");
};

//get all tasks
const gettasks = async (req, res) => {
  await Task.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to get tasks");
    });
};

//add a task
const addtask = async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  //saving task to the database using promise
  await task
    .save()
    .then((result) => {
      console.log(result);
      res.send("created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
};

//get a single task
const gettask = async (req, res) => {
  console.log(req.params);
  await Task.findById(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).send(`Task not found with id: ${req.params.id}`);
      }
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`unable to get task with id: ${req.params.id}`);
    });
};

//delete a task
const deletetask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      if (!result) {
        return res.status(404).send(`Task not found with id: ${req.params.id}`);
      }
      res.status(200).send(`Task deleted : ${result}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`unable to delete task with id: ${req.params.id}`);
    });
};

//update a task
const updatetask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      console.log(result);
      if (!result) {
        return res.status(404).send(`Task not found with id: ${req.params.id}`);
      }
      res.status(200).send(`Task updated : ${result}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`${err.message}`);
    });
};
module.exports = {
  home,
  gettasks,
  gettask,
  addtask,
  deletetask,
  updatetask,
};
