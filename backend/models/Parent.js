const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Parent", parentSchema);
