const mongoose = require("mongoose")

const foodschema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Resturant Title Is Required"]
    },
    discription: {
        type: String,
        required: [true, "discription is required"]
    },
    price: {
        type: Number,
        required: [true, "Price Is Required"]
    },
    imageurl: {
        type: String
    },
    foodtags: {
        type: String
    },
    category: {
        type: String
    },
    isavailable: {
        type: Boolean,
        default: true
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resturant"
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    ratingcount: {
        type: String
    },
    code: {
        type: String
    },
}, { timestamps: true })

module.exports = mongoose.model("food", foodschema)