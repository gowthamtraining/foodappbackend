const express = require("express")
const { userregister, userlogin } = require("../controllers/AuthControllers")

const router = express.Router()

router.post("/register", userregister)
router.post("/login", userlogin)

module.exports = router