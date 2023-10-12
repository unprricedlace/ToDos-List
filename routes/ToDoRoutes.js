const { Router } = require("express");
const {
  getToDo,
  gettask,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoControllers.js");

const router = Router();

router.get("/", getToDo);
router.get("/task", gettask);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
