const foodmodels = require("../modals/foodmodels")

const createfood = async (req, res) => {
    try {
        const { title, discription, price, imageurl, foodtags, category, isavailable, resturant, rating, ratingcount, code } = req.body
        if (!title || !discription || !price || !resturant) {
            return res.status(400).send({
                sucess: false,
                message: "Field Invalid"
            })
        }
        const userdata = await foodmodels.create({ title, discription, price, imageurl, foodtags, category, isavailable, resturant, rating, ratingcount, code })
        if (!userdata) {
            return res.status(500).send({
                sucess: false,
                message: "Something Happen"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "Food Item created sucessfully"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const getallfood = async (req, res) => {
    try {
        const data = await foodmodels.find({})
        if (!data) {
            return res.status(500).send({
                sucess: false,
                message: "data not found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "all Food Items found",
            length: data.length
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const getfoodbyid = async (req, res) => {
    try {
        const data = await foodmodels.findById({ _id: req.params.id })
        if (!data) {
            return res.status(400).send({
                sucess: false,
                message: "Food Item No Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "Food Item Found",
            data
        })
    } catch (error) {
        res.status(500).send({
            sucess: false,
            message: "Error in Api",
            error: error.message
        })
    }
}
const getresturantfoodbyid = async (req, res) => {
    try {
        const data = await foodmodels.find({ resturant: req.params.id })
        if (!data) {
            return res.status(400).send({
                sucess: false,
                message: "Resturant Food No Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "Resturant Food Done",
            data
        })
    } catch (error) {
        res.status(500).send({
            sucess: false,
            message: "Error in Api",
            error: error.message
        })
    }
}
const updatefoodbyid = async (req, res) => {
    try {
        const { title, discription, price, imageurl, foodtags, category, isavailable, resturant, rating, ratingcount, code } = req.body
        const updatedata = await foodmodels.findByIdAndUpdate(req.params.id, { title, discription, price, imageurl, foodtags, category, isavailable, resturant, rating, ratingcount, code }, { new: true })
        if (!updatedata) {
            return res.status(500).send({
                sucess: false,
                message: "Update Not Done"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "update done"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const deletefoodbyid = async (req, res) => {
    try {
        const byiddata = await foodmodels.findById({ _id: req.params.id })
        if (!byiddata) {
            return res.status(500).send({
                sucess: false,
                message: "food item Not Found"
            })
        }
        const deletedata = await foodmodels.findByIdAndDelete({ _id: req.params.id })
        if (!deletedata) {
            return res.status(500).send({
                sucess: false,
                message: "Some Error Was There In Delete"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "Food deleted sucessfully"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}

module.exports = { createfood, getallfood, getfoodbyid, getresturantfoodbyid, updatefoodbyid, deletefoodbyid }