const express = require("express")
const router = express.Router()
const userControllers = require("../controler/index")

router.post("/", userControllers.insertStudent)
router.get("/",userControllers.getAll)
router.delete("/",userControllers.emptyStudentTable)

module.exports = router