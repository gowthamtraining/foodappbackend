const mongoose = require("mongoose")

const resturantchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Resturant Title Is Required"]
    },
    imageurl: {
        type: String
    },
    food: {
        type: Array
    },
    time: {
        type: String
    },
    pickup: {
        type: Boolean
    },
    delivery: {
        type: Boolean
    },
    isopen: {
        type: Boolean
    },
    logourl: {
        type: String
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
    coords: {
        id: {
            type: String
        },
        latitude: { type: Number },
        latitudeDelta: { type: Number },
        longitude: { type: Number },
        longitudeDelta: {
            type: Number
        },
        address: { type: String },
        title: { type: String }
    }


}, { timestamps: true })

module.exports = mongoose.model("resturant", resturantchema)