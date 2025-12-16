const Parent = require("../models/Parent");
const jwt = require("jsonwebtoken");

exports.loginParent = async (req, res) => {
  const { phone } = req.body;

  let parent = await Parent.findOne({ phone });
  if (!parent) {
    parent = await Parent.create({ phone });
  }

  const token = jwt.sign({ id: parent._id, role: "parent" }, "secret", {
    expiresIn: "1d"
  });

  res.json({ token });
};
