const express = require("express");
const {
  gettasks,
  gettask,
  addtask,
  deletetask,
  updatetask,
  home,
} = require("../controllers/taskController");

const router = express.Router();

//post request to add a task
router.post("/add", addtask);

//get request to get all tasks
router.get("/", gettasks);

//get request to get a single ta
router.get("/:id", gettask);

//delete request to delete a task
router.delete("/:id", deletetask);

//update a
router.put("/:id", updatetask);

module.exports = router;
