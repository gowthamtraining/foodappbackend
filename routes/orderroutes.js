const express = require("express")
const Authmiddlewares = require("../middlewares/Authmiddlewares")
const { createorder, updatestatus } = require("../controllers/ordercontroller")
const adminmiddleware = require("../middlewares/adminmiddleware")

const orderroutes = express.Router()

orderroutes.post("/createorder", Authmiddlewares, createorder)
orderroutes.put("/updatestatus/:id", Authmiddlewares, adminmiddleware, updatestatus)
orderroutes.put("/updatestatus/:id", Authmiddlewares, adminmiddleware, updatestatus)

module.exports = { orderroutes }