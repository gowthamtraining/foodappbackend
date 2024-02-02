const express = require("express")
const Authmiddlewares = require("../middlewares/Authmiddlewares")
const { createresturant, getallresturants, getresturantbyid, deleteresturantbyid } = require("../controllers/resturantcontroller")

const resturantroutes = express.Router()

resturantroutes.post("/create", Authmiddlewares, createresturant)
resturantroutes.get("/getall", getallresturants)
resturantroutes.get("/getresturant/:id", getresturantbyid)
resturantroutes.delete("/deleteresturant/:id", Authmiddlewares, deleteresturantbyid)


module.exports = { resturantroutes }