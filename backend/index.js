const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://pamnanivanshita_db_user:iQi-CZ!SpJ3t6ct@projects.eazunnn.mongodb.net/portfolio?appName=projects"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(5003, () => console.log("Server running on port 5003"));
