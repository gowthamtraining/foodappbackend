const express = require("express")
const { dbconnect } = require("./config/db")
const env = require("dotenv").config()
const router = require("./routes/Authroutes")
const { routers } = require("./routes/userroutes")
const { resturantroutes } = require("./routes/resturantroutes")
const { categoryroutes } = require("./routes/categoryroutes")
const { foodroutes } = require("./routes/foodroutes")
const { orderroutes } = require("./routes/orderroutes")

const app = express()

app.use(express.json())
app.use("/api/v1/", router)
app.use("/api/v1/app/", resturantroutes)
app.use("/api/v1/", routers)
app.use("/api/v1/app/", categoryroutes)
app.use("/api/v1/app/food", foodroutes)
app.use("/api/v1/app/order/", orderroutes)
dbconnect.then(() => {
    console.log("databases is connecte")
}).catch((err) => {
    console.log("errr", err)
})
app.listen(4000, () => {
    console.log("server is running")
})