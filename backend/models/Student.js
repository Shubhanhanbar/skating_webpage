const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  batch: String,
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent"
  }
});

module.exports = mongoose.model("Student", studentSchema);
