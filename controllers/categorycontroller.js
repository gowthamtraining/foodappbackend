const categorymodels = require("../modals/categorymodels")

const createcategory = async (req, res) => {
    try {
        const { title, categoryurl } = req.body
        if (!title || !categoryurl) {
            return res.status(400).send({
                sucess: false,
                message: "Field Invalid"
            })
        }
        const userdata = await categorymodels.create({ title, categoryurl })
        if (!userdata) {
            return res.status(500).send({
                sucess: false,
                message: "Something Happen"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "category created sucessfully"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const getallcategory = async (req, res) => {
    try {
        const data = await categorymodels.find({})
        if (!data) {
            return res.status(500).send({
                sucess: false,
                message: "data not found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "all category found",
            length: data.length
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}
const getcategorybyid = async (req, res) => {
    try {
        const data = await categorymodels.findById({ _id: req.params.id })
        if (!data) {
            return res.status(400).send({
                sucess: false,
                message: "category No Found"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "category Found",
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
const updatecategorybyid = async (req, res) => {
    try {
        const { title, categoryurl } = req.body
        const updatedata = await categorymodels.findByIdAndUpdate(req.params.id, { title, categoryurl }, { new: true })
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
const deletecategorybyid = async (req, res) => {
    try {
        const byiddata = await categorymodels.findById({ _id: req.params.id })
        if (!byiddata) {
            return res.status(500).send({
                sucess: false,
                message: "category Not Found"
            })
        }
        const deletedata = await categorymodels.findByIdAndDelete({ _id: req.params.id })
        if (!deletedata) {
            return res.status(500).send({
                sucess: false,
                message: "Some Error Was There In Delete"
            })
        }
        res.status(200).send({
            sucess: true,
            message: "category deleted sucessfully"
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            message: error.message
        })
    }
}

module.exports = { createcategory, getallcategory, updatecategorybyid, deletecategorybyid, getcategorybyid }