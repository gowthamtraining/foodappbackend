const mongoose = require("mongoose")

const categoryschema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title Field Is Required"]
    },
    categoryurl: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("category", categoryschema)