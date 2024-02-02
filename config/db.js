const mongoose = require("mongoose")
const env = require("dotenv").config()
const dbconnect = mongoose.connect(process.env.MONGODB_URL)

module.exports = { dbconnect }