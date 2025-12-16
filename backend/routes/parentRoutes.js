const express = require("express");
const router = express.Router();
const { loginParent } = require("../controllers/parentController");

router.post("/login", loginParent);

module.exports = router;
