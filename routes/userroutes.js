const express = require("express")
const Authmiddlewares = require("../middlewares/Authmiddlewares")
const { userdata, updateuser, updatepassword, resetpassword, userdelete } = require("../controllers/userdata")

const routers = express.Router()

routers.get("/user", Authmiddlewares, userdata)
routers.put("/update", Authmiddlewares, updateuser)
routers.put("/updatepassword", Authmiddlewares, updatepassword)
routers.put("/resetpassword", Authmiddlewares, resetpassword)
routers.delete("/deleteuser", Authmiddlewares, userdelete)


module.exports = { routers }