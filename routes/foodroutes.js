const express = require("express")
const Authmiddlewares = require("../middlewares/Authmiddlewares")
const { createfood, getallfood, getfoodbyid, updatefoodbyid, deletefoodbyid, getresturantfoodbyid } = require("../controllers/foodcontroller")
const foodroutes = express.Router()

foodroutes.post("/createfood", Authmiddlewares, createfood)
foodroutes.get("/getallfood", Authmiddlewares, getallfood)
foodroutes.get("/getfoodbyid/:id", Authmiddlewares, getfoodbyid)
foodroutes.get("/getresturantfoodbyid/:id", Authmiddlewares, getresturantfoodbyid)
foodroutes.put("/updatefoodbyid/:id", Authmiddlewares, updatefoodbyid)
foodroutes.delete("/deletefoodbyid/:id", Authmiddlewares, deletefoodbyid)


module.exports = { foodroutes }