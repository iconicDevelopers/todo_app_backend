const express = require("express");
const router = express.Router();

const {
  createData,
  fetchData,
  updateDate,
  deleteData,
} = require("../controllers/toDoController");

router.post("/", createData);

router.get("/", fetchData);

router.put("/:id", updateDate);

router.delete("/:id", deleteData);

module.exports = router;
