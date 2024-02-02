const mongoose = require("mongoose")

const orderschema = mongoose.Schema({
    food: [{ type: mongoose.Schema.Types.ObjectId, ref: "food", required: [true] }],
    payement: { type: String },
    buyer: {
        type: mongoose.Schema.Types.ObjectId
        ,
        ref: "user",
        required: [true]
    },
    status: {
        type: String,
        enum: ["preparing", "prepare", "on the way", "delivered"],
        default: "preparing"
    }


}, { timestamps: true })

module.exports = mongoose.model("order", orderschema)