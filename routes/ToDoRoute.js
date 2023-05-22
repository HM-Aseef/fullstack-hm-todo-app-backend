const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;

// router.get("/", (req, res) => {
//   res.json({ massage: "hii thare.." });
// });

// const { Router } = require("express");

// const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

// const router = Router();

// router.get("/", getToDo);

// router.post("/save", saveToDo);

// router.post("/update", updateToDo);

// router.post("/delete", deleteToDo);

// module.exports = router;
