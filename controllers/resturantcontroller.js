const resturantmodel = require("../modals/resturantmodel")

const createresturant = async (req, res) => {
    try {
        const { title, imageurl, food, time, pickup, delivery, isopen, logourl, rating, ratingcount, code, coords } = req.body
        if (!title || !coords) {
            return res.status(400).send({
                sucess: false,
                message: "Tittle Or Address Field Where Missing"
            })
        }
        const user = await resturantmodel.create({ title, imageurl, food, time, pickup, delivery, isopen, logourl, rating, ratingcount, code, coords })
        res.status(200).send({
            sucess: true,
            message: "Resturant Created",
            user
        })
    } catch (error) {
        res.status(500).send({
            sucess: false,
            message: "Error in Api",
            error: error.message
        })
    }
}

const getallresturants = async (req, res) => {
    try {
        const userdata = await resturantmodel.find({})
        if (!userdata) {
            return res.status(400).send({
                sucess: false,
                message: "No Resturants Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "resturants Found",
            userdata
        })
    } catch (error) {
        res.status(500).send({
            sucess: false,
            message: "Error in Api",
            error: error.message
        })
    }
}
const getresturantbyid = async (req, res) => {
    try {
        const data = await resturantmodel.findById({ _id: req.params.id })
        if (!data) {
            return res.status(400).send({
                sucess: false,
                message: "Resturant No Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "resturant Found",
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
const deleteresturantbyid = async (req, res) => {
    try {
        const data = await resturantmodel.findByIdAndDelete({ _id: req.params.id })
        if (!data) {
            return res.status(400).send({
                sucess: false,
                message: "Resturant No Found To Delete"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "resturant Deleted",
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

module.exports = { createresturant, getallresturants, getresturantbyid, deleteresturantbyid }