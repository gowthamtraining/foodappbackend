const express = require("express")
const Authmiddlewares = require("../middlewares/Authmiddlewares")
const { createcategory, getallcategory, getcategorybyid, updatecategorybyid, deletecategorybyid } = require("../controllers/categorycontroller")
const categoryroutes = express.Router()

categoryroutes.post("/createcategory", Authmiddlewares, createcategory)
categoryroutes.get("/getallcategory", Authmiddlewares, getallcategory)
categoryroutes.get("/getcategorybyid/:id", Authmiddlewares, getcategorybyid)
categoryroutes.put("/updatecategorybyid/:id", Authmiddlewares, updatecategorybyid)
categoryroutes.delete("/deletecategorybyid/:id", Authmiddlewares, deletecategorybyid)


module.exports = { categoryroutes }