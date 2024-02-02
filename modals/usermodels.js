const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "Email Is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password Is Required"]
    },
    address: {
        type: Array,
        required: [true, "Address Is Required"]
    },
    phone: {
        type: String,
        required: [true, "Phone Is Required"]
    },
    usertype: {
        type: String,
        required: [true, "UserType Is Required"],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: "https://imgs.search.brave.com/w8HBixgUGY6DwIc2ElPg_qpxJ-yufwJGyJTDJY6AZ64/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc3F1aXJjbGUt/dWkvMzIvQXZhdGFy/LTY0LnBuZw"
    },
    answer: {
        type: String,
        required: [true, "answer Is Required"]
    }

}, { timestamps: true })

module.exports = mongoose.model("user", userschema)