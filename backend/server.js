const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/skatingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/staff", require("./routes/staffRoutes"));
app.use("/api/parent", require("./routes/parentRoutes"));

app.get("/", (req, res) => {
  res.send("Skating Web Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
