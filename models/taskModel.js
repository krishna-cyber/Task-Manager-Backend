const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"], //this is a validator
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, //this will automatically add createdAt and updatedAt fields
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
