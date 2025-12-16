const Staff = require("../models/Staff");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginStaff = async (req, res) => {
  const { email, password } = req.body;

  const staff = await Staff.findOne({ email });
  if (!staff) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, staff.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: staff._id, role: "staff" }, "secret", {
    expiresIn: "1d"
  });

  res.json({ token });
};
