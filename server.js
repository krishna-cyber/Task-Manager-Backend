const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

//importing required files
const routes = require("./routes/route");

//loading env variables
require("dotenv").config();

//creating server app
const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//routes
app.use("/tasks", routes);

//Database connection and server listening

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log(`Database connected on ${conn.connection.host}`);
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
